<script lang="ts" setup>
import logoSvg from "@/assets/images/icons/logo.svg";

const links = [
  { text: "Наша продукция", href: "/products" },
  { text: "Контакты", href: "/contacts" },
];

const phone = "+7 (495) 935-73-64";
</script>

<template>
  <footer class="site-footer">
    <div class="site-footer__container container">
      <div class="site-footer__top">
        <div class="site-footer__logo">
          <router-link to="/" class="logo-link">
            <img :src="logoSvg" alt="SCORPIO-АРОМАТЫ" class="logo-icon" />
          </router-link>
        </div>

        <nav class="site-footer__nav">
          <ul class="nav-list">
            <li v-for="link in links" :key="link.text">
              <router-link :to="link.href" class="nav-link">{{ link.text }}</router-link>
            </li>
          </ul>

          <div class="marketplaces">
            <a
              href="https://www.wildberries.ru/brands/312173866-ooo-skorpio-kvetka"
              target="_blank"
              rel="noopener"
              class="marketplace-link wb"
            >
              <span class="mp-name">Wildberries</span>
              <span class="mp-seller">Кветка</span>
            </a>
            <span class="divider">|</span>
            <a
              href="https://www.ozon.ru/seller/ip-pertsev-platon-pavlovich-3065326/?miniapp=seller_3065326"
              target="_blank"
              rel="noopener"
              class="marketplace-link ozon"
            >
              <span class="mp-name">Ozon</span>
              <span class="mp-seller">ИП Перцев</span>
            </a>
          </div>
        </nav>

        <div class="site-footer__contacts">
          <a :href="`tel:${phone.replace(/[^\d+]/g, '')}`" class="phone-link">{{ phone }}</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
$footer-bg: #0f172a;
$text-white: #EAE0D5;
$text-gray: #9ca3af;
$accent-wb: #cb11ab;
$accent-ozon: #005bff;

.site-footer {
  background-color: $footer-bg;
  color: $text-white;
  padding: 40px 0 20px;
  font-family:
    "Inter",
    system-ui,
    -apple-system,
    sans-serif;
  border-top: 1px solid #1e293b;
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  // --- Верхняя часть ---
  // --- Верхняя часть ---
  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
    margin-bottom: 30px;
  }

  &__logo {
    .logo-link {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
      color: $text-white;
      font-weight: 700;
      font-size: 1.5rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;

      .logo-icon {
        width: 280px;
        height: auto;
        display: block;
        filter: invert(1);
      }
    }
  }

  // --- Навигация ---
  &__nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    flex: 1;
  }

  .nav-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 40px;

    .nav-link {
      color: $text-white;
      text-decoration: none;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 0.03em;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.7;
      }
    }
  }

  // --- Маркетплейсы ---
  .marketplaces {
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: 0.85rem;

    .divider {
      color: #1e293b;
    }

    .marketplace-link {
      text-decoration: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      line-height: 1.2;
      transition: transform 0.2s;

      .mp-name {
        font-weight: 700;
        text-transform: uppercase;
        color: $text-white;
      }

      .mp-seller {
        font-size: 0.75rem;
        color: $text-gray;
        font-weight: 400;
      }

      &:hover {
        transform: translateY(-2px);

        &.wb .mp-name {
          color: $accent-wb;
        }
        &.ozon .mp-name {
          color: $accent-ozon;
        }
      }
    }
  }

  // --- Телефон ---
  &__contacts {
    .phone-link {
      color: $text-white;
      text-decoration: none;
      font-weight: 700;
      font-size: 1.2rem;
      white-space: nowrap;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  // --- Разделитель ---
  &__divider {
    border: none;
    border-top: 1px solid #1e293b;
    margin: 0 0 25px 0;
  }

  // --- Нижняя часть ---
  &__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.85rem;
    color: $text-gray;
    flex-wrap: wrap;
    gap: 20px;

    a {
      color: $text-gray;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: $text-white;
        text-decoration: underline;
      }
    }

    .privacy-link {
      text-decoration: underline;
      text-decoration-color: rgba($text-gray, 0.5);

      &:hover {
        text-decoration-color: $text-white;
      }
    }
  }

  // --- Адаптивность для мобильных устройств ---
  @media (max-width: 768px) {
    &__top {
      flex-direction: column;
      text-align: center;
      gap: 30px;
    }

    &__nav {
      width: 100%;
    }

    .nav-list {
      flex-direction: column; // Ссылки друг под другом на мобильном
      gap: 15px;
      margin-bottom: 15px;
    }

    .marketplaces {
      flex-direction: row;
      justify-content: center;
    }

    &__bottom {
      flex-direction: column;
      text-align: center;
      gap: 15px;
    }
  }
}
</style>
