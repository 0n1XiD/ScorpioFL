<script lang="ts" setup>
import { onMounted, nextTick, ref, watch } from "vue";
import placeImg from "@/assets/images/place2.jpg";
import schemePassenger from "@/assets/images/scheme_passenger.png";
import schemeTruck from "@/assets/images/scheme_truck.png";
import emailIcon from "@/assets/images/icons/email.svg";

const closeIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;

const selectedSchemeImg = ref<string | null>(null);

const openSchemeModal = (imgSrc: string) => {
  selectedSchemeImg.value = imgSrc;
};

const closeSchemeModal = () => {
  selectedSchemeImg.value = null;
};

watch(selectedSchemeImg, (newVal) => {
  if (newVal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});

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
</script>

<template>
  <main class="contacts-page">
    <section class="contacts-page__info container">
      <div class="main-card reveal">
        <div class="main-card__content">
          <h2 class="main-card__title">Контакты</h2>

          <div class="main-card__grid">
            <article class="department">
              <h3 class="department__title">Главный офис и отдел продаж</h3>

              <div class="department__item">
                <h4>Отдел продаж и закупок</h4>
                <div class="department__phones">
                  <a class="link-phone" href="tel:+78001007364">+7 (800) 100-73-64</a>
                  <a class="link-phone" href="tel:+74959357364">+7 (495) 935-73-64</a>
                </div>
              </div>

              <div class="department__item">
                <h4>Адрес офиса</h4>
                <div class="text">Московская область, г. Одинцово, ул. Западная д.19</div>
              </div>

              <div class="department__item">
                <h4>Email</h4>
                <div class="department__email">
                  <img class="icon icon--mail" :src="emailIcon" alt="email" aria-hidden />
                  <a href="mailto:info@s-aromat.ru" class="link-email">info@s-aromat.ru</a>
                </div>
              </div>
            </article>

            <article class="department">
              <h3 class="department__title">Производство и склад</h3>

              <div class="department__item">
                <h4>Телефон</h4>
                <div class="department__phones">
                  <a class="link-phone" href="tel:+74959759448">+7 (495) 975-94-48</a>
                </div>
              </div>

              <div class="department__item">
                <h4>Почтовый адрес</h4>
                <div class="text">143002, Московская область, г. Одинцово, а/я 1101</div>
              </div>

              <div class="department__item">
                <h4>Email</h4>
                <div class="department__email">
                  <img class="icon icon--mail" :src="emailIcon" alt="email" aria-hidden />
                  <a class="link-email" href="mailto:secretar@s-aromat.ru">secretar@s-aromat.ru</a>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div class="main-card__media">
          <img class="main-card__image" :src="placeImg" alt="Наш офис, фасад здания" />
        </div>
      </div>
    </section>

    <section class="schemes container">
      <h3 class="schemes__title">Схемы проезда</h3>
      <div class="schemes__list">
        <div class="schemes__item schemes__item--passenger reveal">
          <h4>Для легкового транспорта</h4>
          <div class="schemes__graphic" @click="openSchemeModal(schemePassenger)">
            <img
              class="schemes__image"
              :src="schemePassenger"
              alt="Схема для легкового транспорта"
            />
            <div class="schemes__zoom-hint">Увеличить</div>
          </div>
        </div>
        <div class="schemes__item schemes__item--truck reveal">
          <h4>Для грузового транспорта</h4>
          <div class="schemes__graphic" @click="openSchemeModal(schemeTruck)">
            <img class="schemes__image" :src="schemeTruck" alt="Схема для грузового транспорта" />
            <div class="schemes__zoom-hint">Увеличить</div>
          </div>
        </div>
      </div>
    </section>

    <section class="road-view container">
      <h3 class="road-view__title">Навигация</h3>
      <div class="road-view__inner">
        <div class="road-view__info reveal">
          <h4 class="info-title">Координаты для навигатора</h4>
          <p class="info-text copy-text">55.670640, 37.238232</p>

          <h4 class="info-title">Режим работы склада</h4>
          <p class="info-text">Пн-Пт: с 09:00 до 18:00<br />Сб-Вс: выходной</p>

          <h4 class="info-title">Важная информация</h4>
          <p class="info-text text-muted">
            На территории действует пропускной режим. Для заказа пропуска, пожалуйста, сообщите
            номер автомобиля вашему менеджеру за 1 час до приезда. Вход через центральную проходную
            (ориентир — синие ворота).
          </p>
        </div>

        <div class="road-view__map reveal">
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=37.238232%2C55.670640&z=16&pt=37.238232,55.670640,pm2rdm"
            frameborder="0"
            allowfullscreen
            title="Яндекс.Карта — Наш офис"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  </main>

  <Transition name="modal-fade">
    <div v-if="selectedSchemeImg" class="modal-overlay" @click="closeSchemeModal">
      <div class="modal-content" @click.stop>
        <button class="modal-close-btn" @click="closeSchemeModal" aria-label="Закрыть">
          <span v-html="closeIconSvg"></span>
        </button>
        <img :src="selectedSchemeImg" alt="Схема проезда полноэкранная" class="modal-image" />
      </div>
    </div>
  </Transition>
</template>

<style lang="scss">
$bg: #020617;
$card-bg: #0f172a;
$accent: #d4af37;
$text: #eae0d5;
$muted: #9ca3af;
$border-radius: 16px;

.contacts-page {
  background: $bg;
  color: $text;
  font-family:
    Inter,
    system-ui,
    -apple-system,
    sans-serif;
  padding: 40px 0;

  .container {
    padding: 0 20px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .main-card {
    background: $card-bg;
    border-radius: $border-radius;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);

    &__content {
      padding: 24px;
      flex: 1;
    }

    &__title {
      font-size: 2.2rem;
      margin: 0 0 24px 0;
      font-weight: 800;
      letter-spacing: -0.02em;
    }

    &__grid {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    &__media {
      height: 300px;
      width: 100%;
      position: relative;
      overflow: hidden;
    }

    &__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.3s ease;
      transform: scale(1.5);

      &:hover {
        transform: scale(1.4);
      }
    }
  }

  // Department styles
  .department {
    &__title {
      font-size: 1.1rem;
      margin: 0 0 12px 0;
      color: $accent;
      font-weight: 700;
    }

    &__item {
      margin-bottom: 12px;

      h4 {
        font-size: 0.95rem;
        margin: 0 0 4px 0;
        color: $muted;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.03em;
        font-size: 0.75rem;
      }
      .text {
        font-size: 1rem;
        line-height: 1.4;
      }
    }

    &__phones {
      display: flex;
      flex-direction: column;
      gap: 4px;

      .link-phone {
        font-size: 1.1rem;
        color: $text;
        text-decoration: none;
        font-weight: 600;
        transition: color 0.2s;
        &:hover {
          color: $accent;
        }
      }
    }

    &__email {
      display: flex;
      align-items: center;
      margin-top: 4px;

      .link-email {
        color: $text;
        text-decoration: none;
        font-weight: 500;
        border-bottom: 1px solid rgba($text, 0.2);
        transition: border-color 0.2s;
        &:hover {
          border-color: $accent;
        }
      }
      .icon--mail {
        width: 18px;
        height: 18px;
        margin-right: 8px;
        opacity: 0.7;
        filter: invert(1);
      }
    }
  }

  @media (min-width: 900px) {
    .main-card {
      flex-direction: row;
      align-items: stretch;

      &__content {
        padding: 40px;
        flex: 1 1 40%;
      }

      &__grid {
        flex-direction: row;
        justify-content: space-between;
        gap: 20px;
      }

      .department {
        flex: 1;
      }

      &__media {
        flex: 1 1 50%;
        height: auto;
        min-height: 100%;
        max-width: 650px;
      }
    }
  }

  .schemes {
    margin-top: 40px;

    &__title {
      font-size: 1.5rem;
      margin-bottom: 20px;
      font-weight: 700;
    }

    &__list {
      background: $card-bg;
      border-radius: $border-radius;
      overflow: hidden;
      display: flex;
      flex-direction: column;

      @media (min-width: 768px) {
        flex-direction: row;
      }
    }

    &__item {
      padding: 30px;
      flex: 1;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);

      &:last-child {
        border-bottom: none;
      }

      @media (min-width: 768px) {
        border-bottom: none;
        border-right: 1px solid rgba(255, 255, 255, 0.1);

        &:last-child {
          border-right: none;
        }
      }

      h4 {
        margin: 0 0 16px 0;
        font-size: 1.1rem;
        font-weight: 600;
      }
    }

    &__graphic {
      height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 8px;
      padding: 10px;
      cursor: zoom-in;
      position: relative;
      overflow: hidden;
      border: 2px solid transparent;
      transition:
        border-color 0.3s,
        background-color 0.3s;

      &:hover {
        border-color: rgba($accent, 0.3);
        background: rgba(255, 255, 255, 0.1);

        .schemes__zoom-hint {
          opacity: 1;
          transform: translateY(0);
        }
      }

      img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        transition: transform 0.3s;
        filter: invert(1);
      }
    }

    &__zoom-hint {
      position: absolute;
      bottom: 16px;
      left: 50%;
      transform: translateX(-50%) translateY(10px);
      background: rgba($text, 0.8);
      color: white;
      padding: 6px 12px;
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 600;
      opacity: 0;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      pointer-events: none;
    }
  }

  // --- Road View Section ---
  .road-view {
    margin-top: 40px;

    &__title {
      font-size: 1.5rem;
      margin-bottom: 20px;
      font-weight: 700;
    }

    &__inner {
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
      @media (min-width: 768px) {
        grid-template-columns: 4fr 8fr;
      }
    }

    &__info {
      background: $card-bg;
      padding: 24px;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .info-title {
        font-size: 0.8rem;
        text-transform: uppercase;
        color: $muted;
        margin: 0 0 6px 0;
        font-weight: 600;
        letter-spacing: 0.05em;
      }

      .info-text {
        font-size: 1.05rem;
        margin: 0 0 20px 0;
        line-height: 1.5;
        font-weight: 500;

        &.copy-text {
          font-family: monospace;
          background: rgba(255, 255, 255, 0.1);
          padding: 4px 8px;
          border-radius: 4px;
          display: inline-block;
        }

        &.text-muted {
          font-size: 0.95rem;
          color: $muted;
          margin-bottom: 0;
        }
      }
    }

    &__map {
      border-radius: 12px;
      overflow: hidden;
      min-height: 300px;
      background: $card-bg;
      iframe {
        width: 100%;
        height: 100%;
        min-height: 300px;
        display: block;
      }
    }
  }

  .reveal {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .reveal.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  backdrop-filter: blur(4px);
}

.modal-content {
  position: relative;
  max-width: 95vw;
  max-height: 95vh;
  background: transparent;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-image {
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  display: block;
  border-radius: 4px;
  background: #fff;
}

.modal-close-btn {
  position: absolute;
  top: -40px;
  right: 0;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.4);
  }

  svg {
    width: 20px;
    height: 20px;
  }

  @media (min-width: 768px) {
    top: 10px;
    right: 10px;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    &:hover {
      background: rgba(0, 0, 0, 0.8);
    }
  }
}

// Vue Transition for Modal
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
