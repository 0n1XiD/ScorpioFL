<script lang="ts" setup>
import { onMounted, onUnmounted, computed, reactive, ref, watch } from "vue";

const closeIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
const successIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`;

interface Props {
  modelValue: boolean;
}
const props = defineProps<Props>();

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const show = computed(() => props.modelValue);

const isSuccess = ref(false);

const form = reactive({
  name: "",
  phone: "",
  email: "",
  company: "",
  comment: "",
});

const errors = reactive({
  name: "",
  phone: "",
  email: "",
  company: "",
});

const closeModal = () => {
  emit("update:modelValue", false);
};

watch(
  () => props.modelValue,
  (newVal) => {
    if (!newVal) {
      setTimeout(() => {
        isSuccess.value = false;
        form.name = "";
        form.phone = "";
        form.email = "";
        form.company = "";
        form.comment = "";
        errors.name = "";
        errors.phone = "";
        errors.email = "";
        errors.company = "";
      }, 300);
    }
  }
);

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === "Escape" && props.modelValue) {
    closeModal();
  }
};

// --- Валидация и отправка ---

const validateForm = () => {
  let isValid = true;

  // Очистка ошибок
  errors.name = "";
  errors.phone = "";
  errors.email = "";
  errors.company = "";

  if (!form.name.trim()) {
    errors.name = "Введите имя";
    isValid = false;
  }

  if (!form.phone.trim()) {
    errors.phone = "Введите телефон";
    isValid = false;
  } else if (form.phone.length < 5) {
    errors.phone = "Некорректный номер";
    isValid = false;
  }

  if (!form.company.trim()) {
    errors.company = "Укажите компанию";
    isValid = false;
  }

  if (form.email.trim()) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      errors.email = "Неверный e-mail";
      isValid = false;
    }
  }

  return isValid;
};

const submitForm = () => {
  if (validateForm()) {
    // Здесь будет запрос к API
    console.log("Отправка формы:", form);

    isSuccess.value = true;
  }
};

onMounted(() => {
  document.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleKeydown);
});
</script>

<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div v-if="show" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
          <button class="modal-close-btn" @click="closeModal" aria-label="Закрыть">
            <span v-html="closeIconSvg"></span>
          </button>

          <div class="form-wrapper" v-if="!isSuccess">
            <h2 class="form-title">ЗАКАЖИТЕ ОБРАТНЫЙ ЗВОНОК</h2>
            <p class="form-subtitle">
              Оставьте заявку и наш менеджер свяжется с Вами в ближайшее время
            </p>

            <form class="contact-form" @submit.prevent="submitForm">
              <div class="form-row">
                <div class="input-wrapper">
                  <input
                    type="text"
                    placeholder="Ваше имя*"
                    class="form-input"
                    :class="{ 'has-error': errors.name }"
                    v-model="form.name"
                  />
                  <span v-if="errors.name" class="error-text">{{ errors.name }}</span>
                </div>

                <div class="input-wrapper">
                  <input
                    type="tel"
                    placeholder="Ваш номер телефона*"
                    class="form-input"
                    :class="{ 'has-error': errors.phone }"
                    v-model="form.phone"
                  />
                  <span v-if="errors.phone" class="error-text">{{ errors.phone }}</span>
                </div>
              </div>

              <div class="form-row">
                <div class="input-wrapper">
                  <input
                    type="email"
                    placeholder="Ваш e-mail"
                    class="form-input"
                    :class="{ 'has-error': errors.email }"
                    v-model="form.email"
                  />
                  <span v-if="errors.email" class="error-text">{{ errors.email }}</span>
                </div>

                <div class="input-wrapper">
                  <input
                    type="text"
                    placeholder="Название компании*"
                    class="form-input"
                    :class="{ 'has-error': errors.company }"
                    v-model="form.company"
                  />
                  <span v-if="errors.company" class="error-text">{{ errors.company }}</span>
                </div>
              </div>

              <textarea
                placeholder="Оставьте комментарий"
                class="form-textarea"
                v-model="form.comment"
              ></textarea>

              <div class="form-footer">
                <button class="btn btn--primary form-btn">Отправить заявку</button>
                <p class="form-policy">
                  Нажимая на кнопку "Отправить заявку", вы даете согласие на обработку своих
                  персональных данных
                </p>
              </div>
            </form>
          </div>

          <div class="success-wrapper" v-else>
            <div class="success-icon" v-html="successIconSvg"></div>
            <h2 class="success-title">Заявка отправлена!</h2>
            <p class="success-text">
              Спасибо за обращение. Мы получили ваши данные и свяжемся с вами в ближайшее рабочее
              время.
            </p>
            <button class="btn btn--primary success-btn" @click="closeModal">Хорошо</button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss" scoped>
$dark-bg: #141414;
$overlay-bg: rgba(0, 0, 0, 0.8);
$text-light: #EAE0D5;
$text-muted: #9ca3af;
$input-border: #444444;
$input-focus: #4caf50;
$error-color: #ff5252;
$green-btn: #4caf50;
$border-radius: 6px;

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: $overlay-bg;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  overflow-y: auto;
  backdrop-filter: blur(4px);
  box-sizing: border-box;
}

.modal-content {
  position: relative;
  max-width: 650px;
  width: 100%;
  background: $dark-bg;
  border-radius: $border-radius;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  padding: 40px 30px;
  margin: auto;
  transform: scale(1);
  box-sizing: border-box;
  max-height: 90vh;
  overflow-y: auto;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.modal-close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  color: $text-light;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.2s;
  z-index: 10;

  &:hover {
    opacity: 1;
  }

  svg {
    width: 24px;
    height: 24px;
    stroke: currentColor;
  }
}

// --- Form Content Styles ---
.form-wrapper {
  color: $text-light;
  animation: fadeIn 0.4s ease;

  .form-title {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 5px;
    line-height: 1.2;
    color: $text-light;
    text-transform: uppercase;
    word-break: break-word;
  }

  .form-subtitle {
    font-size: 0.95rem;
    margin-bottom: 25px;
    color: $text-muted;
    word-break: break-word;
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .form-row {
      display: flex;
      gap: 20px;
      flex-direction: column;
      align-items: flex-start;
      @media (min-width: 500px) {
        flex-direction: row;
      }
    }

    .input-wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
      position: relative;
    }

    .form-input,
    .form-textarea {
      background: transparent;
      border: none;
      border-bottom: 1px solid $input-border;
      padding: 10px 0;
      color: $text-light;
      width: 100%;
      font-family: inherit;
      transition: all 0.2s;

      &::placeholder {
        color: $text-muted;
      }

      &:focus {
        outline: none;
        border-bottom-color: $input-focus;
      }

      &.has-error {
        border-bottom-color: $error-color;
      }
    }

    .error-text {
      color: $error-color;
      font-size: 0.75rem;
      margin-top: 4px;
      font-weight: 500;
    }

    .form-textarea {
      min-height: 120px;
      border: 1px solid $input-border;
      border-radius: 4px;
      padding: 10px;
      resize: vertical;
    }

    .form-footer {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 15px;
      margin-top: 15px;

      @media (min-width: 600px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }
    }

    .form-btn {
      background-color: $green-btn;
      color: $text-light;
      font-weight: bold;
      padding: 12px 30px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      text-transform: uppercase;
      transition: background-color 0.2s;

      &:hover {
        background-color: darken($green-btn, 8%);
      }
    }

    .form-policy {
      font-size: 0.75rem;
      color: $text-muted;
      text-align: right;
      line-height: 1.3;
      max-width: 300px;

      @media (max-width: 600px) {
        text-align: left;
      }
    }
  }
}

// --- Success Content Styles ---
.success-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: $text-light;
  padding: 20px 0;
  animation: fadeIn 0.4s ease;

  .success-icon {
    color: $green-btn;
    margin-bottom: 20px;
    animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .success-title {
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 15px;
    text-transform: uppercase;
  }

  .success-text {
    font-size: 1rem;
    color: $text-muted;
    max-width: 400px;
    margin-bottom: 30px;
    line-height: 1.5;
  }

  .success-btn {
    background-color: $green-btn;
    color: $text-light;
    font-weight: bold;
    padding: 12px 40px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    text-transform: uppercase;
    transition: background-color 0.2s;

    &:hover {
      background-color: darken($green-btn, 8%);
    }
  }
}

// --- Animations ---
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes popIn {
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;

  .modal-content {
    transition:
      transform 0.3s cubic-bezier(0.3, 0.7, 0.4, 1.5),
      opacity 0.3s ease-out;
  }
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;

  .modal-content {
    transform: scale(0.9);
  }
}
</style>
