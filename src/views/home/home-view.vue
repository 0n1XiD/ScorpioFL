<script lang="ts" setup>
import { onMounted, nextTick, ref, reactive } from "vue";
import ContactFormModal from "@/components/ContactFormModal.vue";
import CompanyFeatures from "@/components/CompanyFeatures.vue";

import heroBgImage from "@/assets/images/background.jpg";
import bottlesImg from "@/assets/images/diffusors.png";
import truckImg from "@/assets/images/truck.jpg";

const fruitsBg =
  "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=2070&auto=format&fit=crop";

const leafIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`;
const flaskIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v7.31"/><path d="M14 2v7.31"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/></svg>`;

onMounted(async () => {
  await nextTick();
  const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

  if (typeof IntersectionObserver === "undefined") {
    els.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        const el = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -5% 0px" }
  );

  els.forEach((el) => io.observe(el));
});

const showContactModal = ref(false);
const openContactModal = () => {
  showContactModal.value = true;
};

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

const isSuccessModalOpen = ref(false);

const validateForm = () => {
  let isValid = true;

  errors.name = "";
  errors.phone = "";
  errors.email = "";
  errors.company = "";

  if (!form.name.trim()) {
    errors.name = "Введите ваше имя";
    isValid = false;
  }

  if (!form.phone.trim()) {
    errors.phone = "Введите номер телефона";
    isValid = false;
  } else if (form.phone.length < 5) {
    errors.phone = "Некорректный номер";
    isValid = false;
  }

  if (!form.company.trim()) {
    errors.company = "Укажите название компании";
    isValid = false;
  }

  if (form.email.trim()) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      errors.email = "Некорректный e-mail";
      isValid = false;
    }
  }

  return isValid;
};

const submitForm = () => {
  if (validateForm()) {
    const subject = `Заявка с сайта Scorpio-Aromat от ${form.company}`;
    const body = `
      Имя: ${form.name}
      Телефон: ${form.phone}
      Email: ${form.email}
      Компания: ${form.company}
      Комментарий: ${form.comment}
    `;

    window.location.href = `mailto:sogib12899@httpsu.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    console.log("Form data sent to mail client:", form);

    isSuccessModalOpen.value = true;

    form.name = "";
    form.phone = "";
    form.email = "";
    form.company = "";
    form.comment = "";
  }
};

const closeSuccessModal = () => {
  isSuccessModalOpen.value = false;
};
</script>

<template>
  <main class="home-page">
    <section class="hero" :style="{ backgroundImage: `url(${heroBgImage})` }">
      <div class="hero__overlay"></div>
      <div class="container hero__container reveal">
        <h1 class="hero__title">
          ПИЩЕВЫЕ АРОМАТИЗАТОРЫ <br />
          <span class="text-accent">SCORPIO-АРОМАТ</span>
        </h1>

        <div class="hero__description">
          <p>
            СКОРПИО-АРОМАТ — российский производитель пищевых ароматизаторов и отдушек, работающий
            на рынке с 1993 года. Мы специализируемся на разработке и выпуске ароматизаторов для
            пищевой промышленности, а также отдушек для косметики, парфюмерии, свечей, диффузоров,
            бытовой химии и автомобильных ароматизаторов.
          </p>
          <p>
            Ассортимент компании насчитывает более 1000 композиций, адаптированных под различные
            категории продуктов и технологические процессы.
            <br /><strong>ОТДУШКИ:</strong> Для косметики, свечей, диффузоров, шампуней, мыла —
            всего порядка 1000 наименований.
          </p>
        </div>

        <div class="hero__badges">
          <div class="badge">
            <div class="badge__icon" v-html="leafIcon"></div>
            <span>Не содержат ГМО</span>
          </div>
          <div class="badge">
            <div class="badge__icon" v-html="flaskIcon"></div>
            <span>Не содержат спирта</span>
          </div>
        </div>

        <div class="hero__actions">
          <router-link to="/products" class="btn btn--primary">НАША ПРОДУКЦИЯ</router-link>
          <router-link to="#about" class="btn btn--outline">О КОМПАНИИ</router-link>
        </div>
      </div>
    </section>

    <section class="section-about container">
      <div class="main-card reveal">
        <div class="main-card__content">
          <h2 class="section-title">О КОМПАНИИ</h2>
          <div class="about-text">
            <p>
              <strong>СКОРПИО-АРОМАТ</strong> — один из ведущих российских производителей пищевых
              ароматизаторов и отдушек, работающий с 1993 года. За более чем 30 лет компания
              сформировала ассортимент из свыше 1000 ароматических композиций для пищевой
              промышленности, косметики, парфюмерии, свечей, мыла, бытовой химии и ароматизации
              помещений. Продукция создаётся на собственном производстве в Московской области и
              проходит многоуровневый контроль качества, обеспечивающий высокую стабильность,
              насыщенность и точное соответствие заявленной ноте.
            </p>
            <p>
              Наши ароматизаторы и отдушки разрабатываются по современным рецептурам, включающим
              фруктовые, сливочные, карамельные, кофейные, травяные, табачные и косметические
              направления. Широкий выбор позволяет подобрать подходящий аромат для любых задач — от
              производства напитков или кондитерских изделий до создания парфюмерных композиций,
              домашних свечей или косметических средств.
            </p>
            <p>
              Лаборатория СКОРПИО-АРОМАТ обеспечивает тестирование каждого продукта: проверяется
              устойчивость в различных средах, стабильность при хранении, поведение при нагреве и
              повторяемость аромата. Такой подход делает нашу продукцию одинаково удобной как для
              промышленных предприятий, так и для hand-made мастерских, интернет-магазинов и частных
              покупателей.
            </p>
            <p>
              Мы предлагаем оперативную доставку по России, профессиональные консультации технолога
              и удобную фасовку — от небольших объёмов для тестов до промышленных партий.
              СКОРПИО-АРОМАТ — это надёжный производитель, который соединяет опыт, качество и
              современные технологии.
            </p>
          </div>
          <router-link to="/products" class="link-arrow"
            >СМОТРЕТЬ РАЗДЕЛ «ПРОДУКЦИЯ» &rarr;</router-link
          >
        </div>
      </div>
    </section>

    <section class="section-stats container reveal">
      <div class="stats-grid">
        <div class="stat-item">
          <div class="stat-icon">📦</div>
          <div class="stat-info">
            <h4>Ассортимент</h4>
            <p>1000+ вкусов</p>
          </div>
        </div>
        <div class="stat-item">
          <div class="stat-icon">⚖️</div>
          <div class="stat-info">
            <h4>Фасовка</h4>
            <p>1 | 5 | 10 | 25 л</p>
          </div>
        </div>
        <div class="stat-item">
          <div class="stat-icon">🚛</div>
          <div class="stat-info">
            <h4>Оптовые продажи</h4>
            <p>по России и СНГ</p>
          </div>
        </div>
        <div class="stat-item">
          <div class="stat-icon">🤝</div>
          <div class="stat-info">
            <h4>Индивидуальный подход</h4>
            <p>отправляем небольшими партиями</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-advantages container">
      <div class="main-card reveal">
        <div class="main-card__content">
          <h2 class="section-title">Наши преимущества</h2>
          <ul class="advantages-list">
            <li>Высокие требования к сырью и поставщикам сырья.</li>
            <li>Постоянное совершенствование технологии производства.</li>
            <li>Качественные ингредиенты, без ГМО и спирта.</li>
            <li>Самый широкий ассортимент: более 1000 востребованных ароматов.</li>
            <li>Производство по стандарту ISO 22000:2005 SGS.</li>
            <li>Вся продукция имеет право на сертификацию EUR1.</li>
          </ul>
          <p class="advantages-note">
            Мы оперативно подберем Ароматизаторы под ваш продукт и бесплатно отправим Вам в руки
            транспортной компанией.
          </p>
          <button class="btn btn--primary" @click.prevent="openContactModal">
            Хочу работать с профессионалами
          </button>
        </div>
        <div class="main-card__media">
          <img :src="bottlesImg" alt="Флаконы с ароматизаторами" class="main-card__image" />
        </div>
      </div>
    </section>

    <section class="section-shipping container">
      <div class="shipping-card reveal">
        <div class="shipping-card__content">
          <h3>
            Отправляем удобными для вас <br />
            транспортными компаниями <br />
            по России и СНГ
          </h3>
          <button class="btn btn--primary" @click.prevent="openContactModal">
            ЗАКАЗАТЬ ЗВОНОК
          </button>
        </div>
        <div class="shipping-card__image-wrapper">
          <img :src="truckImg" alt="Грузовой транспорт" class="shipping-card__image" />
        </div>
      </div>
    </section>

    <CompanyFeatures />

    <section class="section-form" :style="{ backgroundImage: `url(${fruitsBg})` }">
      <div class="form-overlay"></div>
      <div class="container relative reveal">
        <div class="form-wrapper">
          <h2 class="form-title">ОСТАЛИСЬ ВОПРОСЫ?<br />ЗАКАЖИТЕ ОБРАТНЫЙ ЗВОНОК</h2>
          <p class="form-subtitle">
            Оставьте заявку и наш менеджер свяжется с Вами в ближайшее время
          </p>

          <form class="contact-form" @submit.prevent="submitForm">
            <div class="form-row">
              <div class="input-group">
                <input
                  type="text"
                  placeholder="Ваше имя*"
                  class="form-input"
                  :class="{ 'has-error': errors.name }"
                  v-model="form.name"
                />
                <span v-if="errors.name" class="error-text">{{ errors.name }}</span>
              </div>

              <div class="input-group">
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
              <div class="input-group">
                <input
                  type="email"
                  placeholder="Ваш e-mail"
                  class="form-input"
                  :class="{ 'has-error': errors.email }"
                  v-model="form.email"
                />
                <span v-if="errors.email" class="error-text">{{ errors.email }}</span>
              </div>

              <div class="input-group">
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

            <button class="btn btn--primary form-btn">Отправить заявку</button>
            <p class="form-policy">
              Нажимая на кнопку, вы даете согласие на обработку персональных данных
            </p>
          </form>
        </div>
      </div>

      <transition name="fade">
        <div
          v-if="isSuccessModalOpen"
          class="success-modal-overlay"
          @click.self="closeSuccessModal"
        >
          <div class="success-modal-content">
            <div class="success-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h3>Успешно отправлено!</h3>
            <p>Спасибо за вашу заявку. Мы свяжемся с вами в ближайшее время.</p>
            <button class="btn btn--primary" @click="closeSuccessModal">Отлично</button>
          </div>
        </div>
      </transition>
    </section>

    <ContactFormModal v-model="showContactModal" />
  </main>
</template>

<style lang="scss">
$bg: #f5f6f7;
$card-bg: #ffffff;
$accent: #f1a41a;
$green: #4caf50;
$text: #111214;
$muted: #6c6f72;
$white: #ffffff;
$border-radius: 16px;

.home-page {
  background: $bg;
  color: $text;
  font-family:
    Inter,
    system-ui,
    -apple-system,
    sans-serif;
}

.container {
  padding: 0 20px;
  max-width: 1200px;
  margin: 0 auto;
}

// --- Common Classes ---
.text-accent {
  color: $accent;
}

.section-title {
  font-size: 2rem;
  margin: 0 0 24px 0;
  font-weight: 800;
  letter-spacing: -0.02em;
  text-transform: uppercase;
}

// Buttons
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 32px;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;

  &--primary {
    background-color: $green;
    color: $white;
    box-shadow: 0 4px 10px rgba($green, 0.3);

    &:hover {
      background-color: darken($green, 8%);
      transform: translateY(-2px);
    }
  }

  &--outline {
    background-color: transparent;
    border: 2px solid $white;
    color: $white;

    &:hover {
      background-color: $white;
      color: $text;
    }
  }
}

// Cards Style (Borrowed from your code)
.main-card {
  background: $card-bg;
  border-radius: $border-radius;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
  margin-bottom: 40px;

  &__content {
    padding: 30px;
    flex: 1;
  }

  &__media {
    height: 300px;
    width: 100%;
    position: relative;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: stretch;

    &__content {
      padding: 50px;
      flex: 1 1 50%;
    }
    &__media {
      flex: 1 1 50%;
      height: auto;
      min-height: 100%;
    }
  }
}

.hero {
  position: relative;
  min-height: 90vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  color: $white;
  margin-bottom: 40px;
  padding-top: 80px;

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.65);
  }

  &__container {
    position: relative;
    z-index: 2;
    width: 100%;
  }

  &__title {
    font-size: 2.5rem;
    font-weight: 900;
    line-height: 1.2;
    margin-bottom: 25px;

    @media (min-width: 768px) {
      font-size: 3.5rem;
    }
  }

  &__description {
    max-width: 700px;
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 30px;
    color: rgba($white, 0.9);

    p {
      margin-bottom: 15px;
    }
  }

  &__badges {
    display: flex;
    gap: 20px;
    margin-bottom: 35px;

    .badge {
      display: flex;
      align-items: center;
      gap: 10px;

      &__icon {
        width: 30px;
        height: 30px;
        color: $green;
      }
      span {
        font-weight: 700;
        font-size: 0.9rem;
        text-transform: uppercase;
      }
    }
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
}

// --- 2. ABOUT US STYLES ---
.section-about {
  .about-text {
    font-size: 1rem;
    line-height: 1.6;
    color: #333;

    p {
      margin-bottom: 15px;
    }
  }

  .link-arrow {
    display: inline-block;
    margin-top: 15px;
    font-weight: 700;
    color: $accent;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.9rem;
    transition: color 0.2s;

    &:hover {
      color: darken($accent, 10%);
    }
  }
}

// --- 3. ADVANTAGES STYLES ---
.section-advantages {
  .advantages-list {
    list-style: none;
    padding: 0;
    margin: 0 0 30px 0;

    li {
      position: relative;
      padding-left: 20px;
      margin-bottom: 12px;
      font-size: 1rem;
      line-height: 1.4;

      &::before {
        content: "•";
        position: absolute;
        left: 0;
        color: $accent;
        font-size: 1.5rem;
        line-height: 1rem;
        top: 2px;
      }
    }
  }

  .advantages-note {
    font-style: italic;
    color: $muted;
    margin-bottom: 30px;
  }
}

// --- 4. SHIPPING CARD STYLES ---
.shipping-card {
  background: $white;
  border-radius: $border-radius;
  overflow: hidden;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);

  &__content {
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    h3 {
      font-size: 1.5rem;
      font-weight: 800;
      line-height: 1.3;
      margin-bottom: 25px;
    }
  }

  &__image-wrapper {
    height: 250px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;

    &__content {
      flex: 1;
      padding: 50px;
    }
    &__image-wrapper {
      flex: 1;
      height: auto;
      clip-path: polygon(10% 0, 100% 0, 100% 100%, 0% 100%);
    }
  }
}

// --- 5. STATS GRID STYLES ---
.section-stats {
  margin-bottom: 40px;
  .stats-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;

    @media (min-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 1000px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .stat-item {
    background: $white;
    padding: 20px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    gap: 15px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);

    .stat-icon {
      font-size: 2rem;
    }

    .stat-info {
      h4 {
        font-size: 0.9rem;
        font-weight: 700;
        margin: 0;
        color: $text;
      }
      p {
        margin: 2px 0 0;
        font-size: 0.85rem;
        color: $muted;
      }
    }
  }
}

// --- 6. FORM SECTION STYLES ---
.section-form {
  position: relative;
  padding: 60px 0;
  background-size: cover;
  background-position: center;
  color: $white;

  .form-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
  }

  .relative {
    position: relative;
    z-index: 2;
  }

  .form-wrapper {
    max-width: 600px;
  }

  .form-title {
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 10px;
    line-height: 1.2;
  }

  .form-subtitle {
    font-size: 1rem;
    margin-bottom: 30px;
    opacity: 0.8;
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 15px;

    .form-row {
      display: flex;
      gap: 15px;
      flex-direction: column;
      align-items: flex-start;
      @media (min-width: 600px) {
        flex-direction: row;
      }
    }

    .input-group {
      width: 100%;
      display: flex;
      flex-direction: column;
      position: relative;
    }

    .form-input,
    .form-textarea {
      background: transparent;
      border: 1px solid rgba(255, 255, 255, 0.3);
      padding: 12px 16px;
      border-radius: 4px;
      color: $white;
      width: 100%;
      font-family: inherit;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }

      &:focus {
        outline: none;
        border-color: $accent;
      }

      &.has-error {
        border-color: #ff5252;
        background: rgba(255, 82, 82, 0.1);
      }
    }

    .error-text {
      font-size: 0.75rem;
      color: #ff5252;
      margin-top: 4px;
      margin-left: 2px;
      font-weight: 500;
    }

    .form-textarea {
      resize: vertical;
      min-height: 100px;
    }

    .form-btn {
      align-self: flex-start;
      margin-top: 10px;
    }

    .form-policy {
      font-size: 0.75rem;
      color: rgba(255, 255, 255, 0.4);
      margin-top: 10px;
    }
  }
}

// Animation
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.success-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
}

.success-modal-content {
  background: #ffffff;
  color: #111214;
  padding: 40px;
  border-radius: 16px;
  text-align: center;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  animation: popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  .success-icon {
    width: 60px;
    height: 60px;
    margin: 0 auto 20px;
    color: #4caf50;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 800;
    margin-bottom: 10px;
  }

  p {
    color: #6c6f72;
    margin-bottom: 25px;
    line-height: 1.5;
  }

  .btn {
    width: 100%;
  }
}

@keyframes popIn {
  from {
    opacity: 0;
    transform: scale(0.8) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
