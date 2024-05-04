<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    level: 1 | 2 | 3 | 4 | 5;
  }>(),
  {
    level: 1,
  },
);

const tag = computed(() => {
  switch (props.level) {
    case 2:
      return 'h2';
    case 3:
      return 'h3';
    case 4:
      return 'h4';
    case 5:
      return 'h5';
    default:
      return 'h1';
  }
});
</script>

<template>
  <component :is="tag" class="font-montserrat text-black">
    <slot />
  </component>
</template>
