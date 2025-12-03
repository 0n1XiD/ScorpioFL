<script lang="ts" setup>
const features: {
  icon: string;
  title: string;
  subtitle: string;
  detail: string;
}[] = [
  {
    icon: "⌚",
    title: "35 ЛЕТ ОПЫТА ПРОИЗВОДСТВА",
    subtitle: "На рынке с 1993 года",
    detail: "35 ЛЕТ ОПЫТА ПРОИЗВОДСТВА",
  },
  {
    icon: "🧪",
    title: "АССОРТИМЕНТ",
    subtitle: "Более 1000 видов ароматизаторов и отдушек",
    detail: "БОЛЕЕ 1000 ВИДОВ АРОМАТИЗАТОРОВ И ОТДУШЕК",
  },
  {
    icon: "🔬",
    title: "СВОЯ ЛАБОРАТОРИЯ",
    subtitle: "Собственная лаборатория и разработка рецептур",
    detail: "СОБСТВЕННАЯ ЛАБОРАТОРИЯ И РАЗРАБОТКА РЕЦЕПТУР",
  },
  {
    icon: "✅",
    title: "КАЧЕСТВО",
    subtitle: "Качество и стабильность каждой партии",
    detail: "КАЧЕСТВО И СТАБИЛЬНОСТЬ КАЖДОЙ ПАРТИИ",
  },
  {
    icon: "🚚",
    title: "ФАСОВКА И ДОСТАВКА",
    subtitle: "Удобная фасовка и быстрая доставка",
    detail: "УДОБНАЯ ФАСОВКА И БЫСТРАЯ ДОСТАВКА",
  },
  {
    icon: "👨‍🔬",
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
        <div class="feature-card__icon">{{ feature.icon }}</div>
        <div class="feature-card__text">
          <p class="feature-card__detail">{{ feature.detail }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
$bg: #f5f6f7;
$card-bg: #ffffff;
$accent: #f1a41a;
$green: #4caf50;
$text: #111214;
$border-radius: 12px;

.section-company-features {
  padding: 40px 20px;
  margin-bottom: 40px;
  border-radius: $border-radius;
}

.section-title {
  text-align: center;
  margin-bottom: 40px;
  color: #333;
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

  border: 1px solid rgba(0, 150, 255, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }

  &__icon {
    font-size: 3.5rem;
    margin-bottom: 15px;
    line-height: 1;
  }

  .feature-card__icon:nth-child(4) {
    color: $green;
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
