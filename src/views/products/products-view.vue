<script setup lang="ts">
import { onMounted, nextTick, ref } from "vue";
import ContactFormModal from "@/components/ContactFormModal.vue";
import sertificatsImage from "@/assets/images/sertificats.jpg";

// Импорт партнеров
import partner1 from "@/assets/images/partner1.jpg";
import partner2 from "@/assets/images/partner2.jpg";
import partner3 from "@/assets/images/partner3.jpg";
import partner4 from "@/assets/images/partner4.jpg";
import partner5 from "@/assets/images/partner5.jpg";
import partner6 from "@/assets/images/partner6.jpg";
import partner7 from "@/assets/images/partner7.jpg";

const partnerLogos = [partner1, partner2, partner3, partner4, partner5, partner6, partner7];

const flavorImages = {
  fruits: "",
  caramel: "",
  dairy: "",
  coffee: "",
  cocktails: "",
  herbs: "",
  meat: "",
  hookah: "",
};

const fragranceImages = {
  cosmetics: "",
  perfume: "",
  shampoo: "",
  candles: "",
  diffusers: "",
  soap: "",
  cleaners: "",
  powder: "",
};

const flavorCategories = [
  {
    name: "Фруктово-ягодные",
    alt: "Фруктово-ягодные пищевые ароматизаторы",
    icon: "🍓",
    image: flavorImages.fruits,
    link: "#",
  },
  {
    name: "Карамельно-сливочные",
    alt: "Карамельно-сливочные ароматизаторы",
    icon: "🍦",
    image: flavorImages.caramel,
    link: "#",
  },
  {
    name: "Молочно-сливочные",
    alt: "Молочно-сливочные ароматизаторы",
    icon: "🥛",
    image: flavorImages.dairy,
    link: "#",
  },
  {
    name: "Шоколадно-ореховые и кофейные",
    alt: "Шоколадно-ореховые и кофейные ароматизаторы",
    icon: "☕",
    image: flavorImages.coffee,
    link: "#",
  },
  {
    name: "Коктейльные и напиточные",
    alt: "Ароматизаторы для напитков и коктейлей",
    icon: "🍹",
    image: flavorImages.cocktails,
    link: "#",
  },
  {
    name: "Травы и специи",
    alt: "Ароматизаторы травы и специи",
    icon: "🌿",
    image: flavorImages.herbs,
    link: "#",
  },
  {
    name: "Мясные/рыбные/колбасные",
    alt: "Мясные и рыбные ароматизаторы",
    icon: "🥩",
    image: flavorImages.meat,
    link: "#",
  },
  {
    name: "Табачные и кальянные",
    alt: "Кальянные и табачные ароматизаторы",
    icon: "💨",
    image: flavorImages.hookah,
    link: "#",
  },
];

const fragranceCategories = [
  {
    name: "Косметика",
    alt: "Отдушки для косметики и ухода",
    icon: "🧴",
    image: fragranceImages.cosmetics,
    link: "#",
  },
  {
    name: "Духи",
    alt: "Отдушки для парфюмерии",
    icon: "🌷",
    image: fragranceImages.perfume,
    link: "#",
  },
  {
    name: "Шампуни/гели",
    alt: "Отдушки для шампуней и гелей",
    icon: "🛁",
    image: fragranceImages.shampoo,
    link: "#",
  },
  {
    name: "Свечи",
    alt: "Отдушки для свечей и диффузоров",
    icon: "🕯️",
    image: fragranceImages.candles,
    link: "#",
  },
  {
    name: "Диффузоры",
    alt: "Отдушки для аромадиффузоров",
    icon: "🌬️",
    image: fragranceImages.diffusers,
    link: "#",
  },
  { name: "Мыло", alt: "Отдушки для мыла", icon: "🧼", image: fragranceImages.soap, link: "#" },
  {
    name: "Пено-моющие средства",
    alt: "Отдушки для бытовой химии",
    icon: "🧽",
    image: fragranceImages.cleaners,
    link: "#",
  },
  {
    name: "Стиральные порошки",
    alt: "Отдушки для стирки",
    icon: "🧺",
    image: fragranceImages.powder,
    link: "#",
  },
];

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
</script>

<template>
  <main class="products-page">
    <div class="container">
      <h1 class="page-title reveal">НАША ПРОДУКЦИЯ</h1>

      <section class="product-section">
        <h2 class="section-subtitle reveal">ПИЩЕВЫЕ АРОМАТИЗАТОРЫ</h2>

        <div class="description-block reveal">
          <p>
            Пищевые ароматизаторы <strong>СКОРПИО-АРОМАТ</strong> — это профессиональные
            вкусо-ароматические композиции для промышленного и ремесленного производства продуктов
            питания. В ассортименте представлены направления, охватывающие ключевые сегменты
            вкусовой индустрии:
            <strong
              >фруктово-ягодные, карамельно-сливочные, молочно-сливочные, шоколадно-ореховые и
              кофейные, коктейльные и напиточные, травяно-пряные, мясные/рыбные/колбасные, табачные
              и кальянные</strong
            >
            профили.
          </p>
          <p class="final-note">
            Пищевые ароматизаторы доступны оптом, с удобной логистикой и поставками по всей России
          </p>
        </div>

        <div class="category-grid reveal">
          <a
            v-for="(category, index) in flavorCategories"
            :key="index"
            :href="category.link"
            class="category-card"
            :aria-label="category.alt"
          >
            <div class="category-card__media" v-if="category.image">
              <img :src="category.image" :alt="category.alt" class="category-card__image" />
            </div>
            <div class="category-card__media category-card__media--icon" v-else>
              <span class="category-card__icon-large">{{ category.icon }}</span>
            </div>
            <h3 class="category-card__title">{{ category.name }}</h3>
          </a>
        </div>
      </section>

      <hr class="section-divider reveal" />

      <section class="product-section">
        <h2 class="section-subtitle reveal">ОТДУШКИ</h2>

        <div class="description-block reveal">
          <p>
            <strong>Отдушки СКОРПИО-АРОМАТ</strong> — это профессиональные ароматические композиции
            для косметики, парфюмерии, бытовой химии, мыла, шампуней, гелей и ароматизации
            помещений.
          </p>
          <p class="final-note">
            Все отдушки СКОРПИО-АРОМАТ создаются с учётом специфики каждой категории.
          </p>
        </div>

        <div class="category-grid reveal">
          <a
            v-for="(category, index) in fragranceCategories"
            :key="index"
            :href="category.link"
            class="category-card"
            :aria-label="category.alt"
          >
            <div class="category-card__media" v-if="category.image">
              <img :src="category.image" :alt="category.alt" class="category-card__image" />
            </div>
            <div class="category-card__media category-card__media--icon" v-else>
              <span class="category-card__icon-large">{{ category.icon }}</span>
            </div>
            <h3 class="category-card__title">{{ category.name }}</h3>
          </a>
        </div>
      </section>

      <section class="section-trust reveal">
        <h2 class="section-subtitle">КАЧЕСТВО И ДОВЕРИЕ</h2>

        <div class="trust-wrapper">
          <div class="trust-col trust-col--certs">
            <h3 class="col-title">Сертификация</h3>
            <p class="trust-text">
              Вся наша продукция сертифицирована и произведена в соответствии с ГОСТом РФ и строгой
              политикой качества компании "Скорпио-Аромат".
            </p>
            <div class="certs-image-box">
              <img :src="sertificatsImage" alt="Сертификаты соответствия" class="certs-img" />
            </div>
          </div>

          <div class="trust-col trust-col--partners">
            <h3 class="col-title">Нам доверяют</h3>
            <p class="trust-text">
              Мы гордимся долгосрочным сотрудничеством с ведущими производителями отрасли.
            </p>
            <div class="partners-grid">
              <div class="partner-item" v-for="(logo, idx) in partnerLogos" :key="idx">
                <img :src="logo" :alt="`Партнер ${idx + 1}`" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <ContactFormModal v-model="showContactModal" />
  </main>
</template>

<style lang="scss" scoped>
$bg: #f5f6f7;
$card-bg: #ffffff;
$accent: #f1a41a;
$green: #4caf50;
$text: #111214;
$muted: #6c6f72;
$white: #ffffff;
$border-radius: 12px;

.products-page {
  background: $bg;
  color: $text;
  padding-bottom: 60px;
}

.container {
  padding: 0 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.page-title {
  font-size: 2.8rem;
  font-weight: 800;
  padding: 40px 0 20px 0;
  text-align: left;
  text-transform: uppercase;
  margin-bottom: 40px;
  line-height: 1.2;
}

.product-section {
  margin-bottom: 60px;
}

.section-subtitle {
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  color: $text;
  margin-bottom: 30px;
  border-left: 5px solid $accent;
  padding-left: 15px;
}

.section-divider {
  border: none;
  border-top: 1px solid rgba($muted, 0.2);
  margin: 60px 0;
}

.description-block {
  max-width: 100%;
  margin-bottom: 40px;
  padding: 25px;
  background-color: $card-bg;
  border-radius: $border-radius;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
  line-height: 1.6;

  p {
    margin-bottom: 15px;
    color: #333;
  }

  strong {
    font-weight: 600;
    color: $text;
  }

  .final-note {
    font-weight: 600;
    color: $green;
    margin-top: 20px;
    margin-bottom: 0;
  }
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  margin-top: 30px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.category-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: $card-bg;
  border-radius: $border-radius;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  text-decoration: none;
  color: $text;
  position: relative;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  // Убрали padding-bottom, так как кнопки больше нет,
  // но добавим немного отступа снизу для заголовка
  padding-bottom: 25px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);

    // Подсветка заголовка при наведении
    .category-card__title {
      color: $accent;
    }
  }

  &__media {
    height: 180px;
    width: 100%;
    margin-bottom: 20px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    &--icon {
      background-color: #f0f0f0;
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &__icon-large {
    font-size: 5rem;
    display: block;
  }

  &:hover &__image {
    transform: scale(1.08);
  }

  &__title {
    font-size: 1.15rem;
    font-weight: 700;
    margin: 0 20px;
    text-align: center;
    line-height: 1.3;
    transition: color 0.3s ease;
  }
}

// --- Новая секция с сертификатами и партнерами ---
.section-trust {
  margin: 60px 0;
}

.trust-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
}

.trust-col {
  background: $card-bg;
  border-radius: $border-radius;
  padding: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
  height: 100%;

  .col-title {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 15px;
    text-transform: uppercase;
  }

  .trust-text {
    font-size: 0.95rem;
    color: $muted;
    margin-bottom: 25px;
    line-height: 1.5;
  }
}

// Блок сертификатов
.certs-image-box {
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #eee;

  .certs-img {
    width: 100%;
    height: auto;
    display: block;
  }
}

// Сетка партнеров
.partners-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;

  @media (min-width: 500px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.partner-item {
  background: #fff;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 3/2;
  transition: all 0.3s ease;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    filter: grayscale(100%);
    opacity: 0.7;
    transition: all 0.4s ease;
  }

  &:hover {
    border-color: rgba($accent, 0.3);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

    img {
      filter: grayscale(0%);
      opacity: 1;
      transform: scale(1.05);
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
</style>
