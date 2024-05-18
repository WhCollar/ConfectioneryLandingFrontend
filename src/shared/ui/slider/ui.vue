<script setup lang="ts">
import Slider from '@vueform/slider';

defineProps<{
  value?: [number, number];
  min?: number;
  max?: number;
  step?: number | [number, number];
}>();

const emit = defineEmits<{
  (e: 'update:value', value: [number, number]): void;
}>();
</script>

<template>
  <Slider
    :value="value"
    :min="min"
    :max="max"
    :step="step"
    @change="(value) => emit('update:value', value as any)"
  />
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
