<script lang="ts" setup>
import clockIcon from "@/assets/images/icons/clock.svg";
import shoppingIcon from "@/assets/images/icons/shopping.svg";
import microscopeIcon from "@/assets/images/icons/microscope.svg";
import qualityIcon from "@/assets/images/icons/quality.svg";
import deliveryIcon from "@/assets/images/icons/delivery.svg";
import scientistIcon from "@/assets/images/icons/scientist.svg";

const features: {
  icon: string;
  title: string;
  subtitle: string;
  detail: string;
  iconClass?: string;
}[] = [
  {
    icon: clockIcon,
    title: "35 ЛЕТ ОПЫТА ПРОИЗВОДСТВА",
    subtitle: "На рынке с 1993 года",
    detail: "35 ЛЕТ ОПЫТА ПРОИЗВОДСТВА",
  },
  {
    icon: shoppingIcon,
    title: "АССОРТИМЕНТ",
    subtitle: "Более 1000 видов ароматизаторов и отдушек",
    detail: "БОЛЕЕ 1000 ВИДОВ АРОМАТИЗАТОРОВ И ОТДУШЕК",
  },
  {
    icon: microscopeIcon,
    title: "СВОЯ ЛАБОРАТОРИЯ",
    subtitle: "Собственная лаборатория и разработка рецептур",
    detail: "СОБСТВЕННАЯ ЛАБОРАТОРИЯ И РАЗРАБОТКА РЕЦЕПТУР",
  },
  {
    icon: qualityIcon,
    title: "КАЧЕСТВО",
    subtitle: "Качество и стабильность каждой партии",
    detail: "КАЧЕСТВО И СТАБИЛЬНОСТЬ КАЖДОЙ ПАРТИИ",
  },
  {
    icon: deliveryIcon,
    title: "ФАСОВКА И ДОСТАВКА",
    subtitle: "Удобная фасовка и быстрая доставка",
    detail: "УДОБНАЯ ФАСОВКА И БЫСТРАЯ ДОСТАВКА",
  },
  {
    icon: scientistIcon,
    title: "ТЕХНОЛОГ",
    subtitle: "Поддержка технолога при подборе ароматов",
    detail: "ПОДДЕРЖКА ТЕХНОЛОГА ПРИ ПОДБОРЕ АРОМАТОВ",
  },
];

const chunkArray = (arr: any[], chunkSize: number) => {
  const chunks: any = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
};

const featureBlocks = chunkArray(features, 3);
</script>

<template>
  <section class="section-company-features container">
    <h2 class="section-title reveal">ПРЕИМУЩЕСТВА КОМПАНИИ</h2>

    <div v-for="(block, index) in featureBlocks" :key="index" class="feature-block-row reveal">
      <div v-for="(feature, idx) in block" :key="idx" class="feature-card">
        <div class="feature-card__icon">
          <img :src="feature.icon" :alt="feature.title" :class="feature.iconClass" />
        </div>
        <div class="feature-card__text">
          <p class="feature-card__detail">{{ feature.detail }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
$bg: #020617;
$card-bg: #0f172a;
$accent: #D4AF37;
$green: #4caf50;
$text: #EAE0D5;
$border-radius: 12px;

.section-company-features {
  padding: 40px 20px;
  margin-bottom: 40px;
  border-radius: $border-radius;
}

.section-title {
  text-align: center;
  margin-bottom: 40px;
  color: $text;
  font-size: 2.2rem;
  font-weight: 600;
  text-transform: uppercase;
}

.feature-block-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.feature-card {
  background: $card-bg;
  border-radius: $border-radius;
  padding: 30px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 180px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }

  &__icon {
    width: 64px;
    height: 64px;
    margin-bottom: 15px;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      filter: invert(1);
    }
  }

  &__detail {
    font-size: 0.95rem;
    font-weight: 700;
    line-height: 1.4;
    color: $text;
    text-transform: uppercase;
    margin: 0;
  }
}
</style>
