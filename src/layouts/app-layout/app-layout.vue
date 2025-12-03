<script setup lang="ts">
import AppHeader from "./components/app-header.vue";
import AppFooter from "./components/app-footer.vue";
</script>

<template>
  <AppHeader />
  <router-view :key="$route.fullPath"></router-view>
  <AppFooter />
</template>

<style lang="scss"></style>
