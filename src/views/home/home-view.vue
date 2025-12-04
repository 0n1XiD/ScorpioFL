<script lang="ts" setup>
import { onMounted, nextTick, ref, reactive } from "vue";
import ContactFormModal from "@/components/ContactFormModal.vue";
import CompanyFeatures from "@/components/CompanyFeatures.vue";

import heroBgImage from "@/assets/images/hero.png";
import bottlesImg from "@/assets/images/diffusors.png";
import truckImg from "@/assets/images/truck.jpg";
import placeImg from "@/assets/images/place.jpg";
import splashImg from "@/assets/images/splash.jpg";
import splash2Img from "@/assets/images/splash2.jpg";

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
          <p class="hero__lead">
            Российский производитель с 1993 года. <br />
            Мы предлагаем более 1000 композиций:
          </p>
          <ul class="hero__list">
            <li>
              <span class="text-accent">ПИЩЕВЫЕ АРОМАТИЗАТОРЫ</span> — для всех отраслей пищевой
              промышленности.
            </li>
            <li>
              <span class="text-accent">ОТДУШКИ</span> — для косметики, парфюмерии, свечей и бытовой
              химии.
            </li>
          </ul>
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
          <h3 class="about-slogan">Совершенство качества — совершенство вкуса</h3>

          <div class="about-grid">
            <div class="about-item">
              <div class="about-info">
                <h4>30+ ЛЕТ ОПЫТА</h4>
                <p>
                  Мы успешно работаем на рынке с 1993 года, являясь одним из ведущих российских
                  производителей. Располагаем собственным высокотехнологичным производством в
                  Московской области.
                </p>
              </div>
            </div>

            <div class="about-item">
              <div class="about-info">
                <h4>КОНТРОЛЬ КАЧЕСТВА</h4>
                <p>
                  Наша современная лаборатория проводит многоступенчатое тестирование продукции,
                  гарантируя стабильность аромата, безопасность состава и точное соответствие
                  заявленным нотам.
                </p>
              </div>
            </div>

            <div class="about-item">
              <div class="about-info">
                <h4>СЕРВИС И ПОДДЕРЖКА</h4>
                <p>
                  Обеспечиваем оперативную доставку по всей России и СНГ. Предлагаем удобную фасовку
                  от 1 кг и предоставляем профессиональную технологическую поддержку на всех этапах
                  сотрудничества.
                </p>
              </div>
            </div>
          </div>

          <router-link to="/products" class="link-arrow"
            >СМОТРЕТЬ РАЗДЕЛ «ПРОДУКЦИЯ» &rarr;</router-link
          >
        </div>
        <div class="main-card__media">
          <img :src="splashImg" alt="Ароматизаторы Скорпио-Аромат" class="main-card__image" />
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
        <div class="main-card__media">
          <img :src="splash2Img" alt="Флаконы с ароматизаторами" class="main-card__image" />
        </div>
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
      </div>
    </section>

    <CompanyFeatures />

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
  </main>

  <ContactFormModal v-model="showContactModal" />
</template>

<style lang="scss" scoped>
$bg: #020617;
$card-bg: #0f172a;
$accent: #d4af37;
$primary: #cb3334;
$text: #eae0d5;
$muted: #9ca3af;
$white: #eae0d5;
$border-radius: 16px;

body {
  padding-top: 0;
}

.home-page {
  background: $bg;
  color: $text;
  font-family:
    Inter,
    system-ui,
    -apple-system,
    sans-serif;
  margin-top: calc(var(--site-header-height) * -1);
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
    background-color: $primary;
    color: #fff;
    box-shadow: 0 4px 10px rgba($primary, 0.3);

    &:hover {
      background-color: darken($primary, 8%);
      transform: translateY(-2px);
    }
  }

  &--outline {
    background-color: transparent;
    border: 2px solid $accent;
    color: $accent;

    &:hover {
      background-color: $accent;
      color: $bg;
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
      flex: 1 1 60%;
      height: auto;
      min-height: 100%;
    }
  }
}

.hero {
  position: relative;
  min-height: 70vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  color: $white;
  margin-bottom: 40px;
  margin-top: 160px;

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(2, 6, 23, 0.3) 0%,
      rgba(2, 6, 23, 0.6) 60%,
      #020617 100%
    );
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
    max-width: 800px;
    margin-bottom: 35px;
    color: $white;

    .hero__lead {
      font-size: 1.4rem;
      line-height: 1.4;
      margin-bottom: 25px;
      font-weight: 500;
    }

    .hero__list {
      list-style: none;
      padding: 0;
      font-size: 1.2rem;
      line-height: 1.6;

      li {
        margin-bottom: 15px;
        display: flex;
        align-items: baseline;
        gap: 12px;

        &::before {
          content: "";
          display: block;
          width: 8px;
          height: 8px;
          background-color: $accent;
          border-radius: 50%;
          flex-shrink: 0;
        }
      }
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
        color: $accent;
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
  .about-slogan {
    font-size: 1.2rem;
    font-weight: 600;
    color: $accent;
    margin-bottom: 30px;
    font-style: italic;
    letter-spacing: 0.02em;
  }

  .about-grid {
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-bottom: 30px;
  }

  .about-item {
    display: flex;
    gap: 15px;
    align-items: flex-start;

    .about-info {
      h4 {
        font-size: 1rem;
        font-weight: 700;
        margin: 0 0 6px 0;
        color: $white;
        text-transform: uppercase;
      }
      p {
        font-size: 0.95rem;
        line-height: 1.5;
        color: rgba($white, 0.8);
        margin: 0;
      }
    }
  }

  .link-arrow {
    display: inline-block;
    margin-top: 10px;
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
  background: $card-bg;
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
      color: $accent;
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
    background: $card-bg;
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
        color: $accent;
      }
      p {
        margin: 2px 0 0;
        font-size: 0.85rem;
        color: $text;
      }
    }
  }
}

// --- 6. FORM SECTION STYLES ---
// Removed

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
