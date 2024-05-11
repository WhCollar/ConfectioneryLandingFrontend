<script setup lang="ts">
import Slider from '@vueform/slider';

defineProps<{
  min?: number;
  max?: number;
  step?: number | [number, number];
}>();

const value = defineModel('value');
</script>

<template>
  <Slider v-model:value="value" :min="min" :max="max" :step="step" />
</template>

<style>
@import '@vueform/slider/themes/default.css';

.slider-base {
  @apply h-[2px];
}

.slider-connect {
  @apply bg-primary;
  @apply h-[2px];
}

.slider-handle {
  @apply bg-primary;
  @apply border-0;
  @apply focus:shadow-none;
}

.slider-tooltip {
  @apply bg-primary;
  @apply border-primary;
  @apply font-cormorant;
  @apply text-[18px];
}
</style>
