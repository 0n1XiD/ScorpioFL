<script lang="ts" setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import ContactFormModal from "@/components/ContactFormModal.vue";
import logoSvg from "@/assets/images/icons/logo.svg";

const mobileMenuOpen = ref(false);

const route = useRoute();
const showContactModal = ref(false);
const openContactModal = () => {
  showContactModal.value = true;
};

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};
</script>

<template>
  <header class="header">
    <div class="header__container container">
      <div class="header__top">
        <div class="header__left">
          <a href="/" class="header__logo-link">
            <img :src="logoSvg" alt="SCORPIO-АРОМАТЫ" class="logo-img" />
          </a>
          <div class="header__description">
            Надёжный производитель, который соединяет опыт, <br />
            качество и современные технологии
          </div>
        </div>

        <div class="header__right">
          <div class="header__phones">
            <a href="tel:+78001007364" class="phone-link">+7 (800) 100-73-64</a>
            <a href="tel:+74959357364" class="phone-link">+7 (495) 935-73-64</a>
          </div>
          <button class="header__btn-call" @click="openContactModal">ЗАКАЗАТЬ ЗВОНОК</button>
        </div>

        <button
          class="header__burger"
          @click="toggleMobileMenu"
          :class="{ 'is-active': mobileMenuOpen }"
        >
          <span class="burger__line"></span>
          <span class="burger__line"></span>
          <span class="burger__line"></span>
        </button>
      </div>

      <div class="header__bottom">
        <nav class="header__nav">
          <router-link
            to="/"
            class="nav-link"
            :class="{
              'nav-link--highlight': route.path === '/',
              'nav-link-highlight': route.path === '/',
            }"
            >О КОМПАНИИ</router-link
          >

          <router-link
            to="/products"
            class="nav-link"
            :class="{
              'nav-link--highlight': route.path === '/products',
              'nav-link-highlight': route.path === '/products',
            }"
            >НАША ПРОДУКЦИЯ</router-link
          >

          <router-link
            to="/contacts"
            class="nav-link"
            :class="{
              'nav-link--highlight': route.path === '/contacts',
              'nav-link-highlight': route.path === '/contacts',
            }"
            >КОНТАКТЫ</router-link
          >
        </nav>
      </div>

      <div class="mobile-menu header__mobile-menu" v-if="mobileMenuOpen">
        <router-link
          to="/"
          class="mobile-menu__link"
          :class="{ 'mobile-menu__link--active': route.path === '/' }"
          @click="closeMobileMenu"
          >О КОМПАНИИ</router-link
        >
        <router-link
          to="/products"
          class="mobile-menu__link"
          :class="{ 'mobile-menu__link--active': route.path === '/products' }"
          @click="closeMobileMenu"
          >НАША ПРОДУКЦИЯ</router-link
        >
        <router-link
          to="/contacts"
          class="mobile-menu__link"
          :class="{ 'mobile-menu__link--active': route.path === '/contacts' }"
          @click="closeMobileMenu"
          >КОНТАКТЫ</router-link
        >
        <button
          class="mobile-menu__btn"
          @click="
            openContactModal();
            closeMobileMenu();
          "
        >
          ЗАКАЗАТЬ ЗВОНОК
        </button>
      </div>
    </div>
  </header>
  <ContactFormModal v-model="showContactModal" />
</template>

<style lang="scss" scoped>
$bg-top: #0f172a;
$text-top: #EAE0D5;
$border-top: #1e293b;

$color-red: #d32f2f;
$color-green: #4caf50;
$color-hover-green: darken($color-green, 10%);
$color-hover-red: darken($color-red, 10%);

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  height: 160px;

  background-color: $bg-top;
  color: $text-top;
  box-shadow: none;
  padding-bottom: 5px;

  &__top {
    height: 85px;
    border-bottom-color: $border-top;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }

  .header__description {
    color: #9ca3af;
    border-left-color: #1e293b;
  }

  .nav-link:not(.nav-link--highlight) {
    &:hover {
      color: $color-red;
    }
  }

  &__container {
    height: 160px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
  }

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 15px;
    padding-bottom: 15px;
    margin-bottom: 15px;

    // Разделитель по умолчанию для темной темы
    border-bottom: 1px solid $border-top;
    transition:
      border-bottom-color 0.4s ease,
      padding 0.3s ease;
  }

  &__left {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  &__logo-link {
    text-decoration: none;
    color: inherit;

    .logo-img {
      width: 260px;
      height: auto;
      display: block;
      filter: invert(1);
    }
  }

  &__description {
    font-size: 0.85rem;
    line-height: 1.3;
    color: #9ca3af;
    max-width: 300px;
    border-left: 1px solid rgba(255, 255, 255, 0.2);
    padding-left: 20px;
    transition:
      color 0.4s ease,
      border-left-color 0.4s ease;
  }

  &__right {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  &__phones {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .phone-link {
      color: inherit;
      text-decoration: none;
      font-weight: 600;
      font-size: 1.1rem;
      line-height: 1.4;
      transition: color 0.2s;

      &:hover {
        color: $color-red;
      }
    }
  }

  &__btn-call {
    background-color: $color-red;
    color: #fff;
    border: none;
    padding: 12px 24px;
    font-size: 0.9rem;
    font-weight: 700;
    text-transform: uppercase;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: $color-hover-red;
    }
  }

  // --- Навигация ---
  &__bottom {
    display: flex;
    justify-content: center;
    padding-bottom: 15px;
  }

  &__nav {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    max-width: 1000px;
  }

  .nav-link {
    text-decoration: none;
    color: inherit;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 1rem;
    padding: 10px 20px;
    transition: color 0.2s;

    &:hover {
      color: $color-red;
    }

    &--highlight {
      background-color: $color-green;
      color: #fff !important;
      padding: 12px 40px;
      border-radius: 4px;
      font-size: 1.1rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);

      &:hover {
        background-color: $color-hover-green;
        transform: translateY(-1px);
      }
    }
  }

  // --- Burger Menu ---
  &__burger {
    display: none;
    flex-direction: column;
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    gap: 6px;
    transition: all 0.3s ease;

    .burger__line {
      width: 24px;
      height: 2.5px;
      background-color: currentColor;
      border-radius: 2px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      transform-origin: center;
    }

    &.is-active {
      .burger__line:nth-child(1) {
        transform: translateY(8.5px) rotate(45deg);
      }
      .burger__line:nth-child(2) {
        opacity: 0;
        transform: translateX(-10px);
      }
      .burger__line:nth-child(3) {
        transform: translateY(-8.5px) rotate(-45deg);
      }
    }
  }

  &__mobile-menu {
    display: none;
  }

  @media (max-width: 1024px) {
    &__description {
      display: none;
    }
    .logo-img {
      width: 200px;
    }
  }

  @media (max-width: 768px) {
    height: auto;
    padding-bottom: 25px;
    &__container {
      height: auto;
    }
    &__top {
      flex-direction: row;
      gap: 15px;
      padding-top: 12px;
      padding-bottom: 12px;
      margin-bottom: 0;
      border-bottom: none;
    }
    &__left {
      gap: 15px;
      flex: 1;
    }
    &__right {
      display: none;
    }
    &__bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 15px;
      border-bottom: 1px solid currentColor;
      opacity: 0.9;
    }
    &__nav {
      display: none;
    }
    &__burger {
      display: flex;
    }
    &__mobile-menu {
      display: flex;
      flex-direction: column;
      gap: 0;
      width: 100%;
      background-color: inherit;
      border-top: 1px solid currentColor;
      opacity: 0.9;
      animation: slideDown 0.3s ease;
    }
  }
}

.mobile-menu {
  &__link {
    display: block;
    padding: 16px 20px;
    text-decoration: none;
    color: inherit;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 0.95rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    transition: background-color 0.2s;

    &:hover {
      background-color: rgba(211, 47, 47, 0.1);
      color: $color-red;
    }

    &--active {
      background-color: $color-green;
      color: #fff !important;
    }
  }

  &__btn {
    background-color: $color-red;
    color: #fff;
    border: none;
    padding: 14px 20px;
    width: 100%;
    font-size: 0.9rem;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-color 0.2s;
    padding-bottom: 20px;

    &:active {
      background-color: $color-hover-red;
    }
  }
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
