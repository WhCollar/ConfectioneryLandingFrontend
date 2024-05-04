<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    type: 'primary' | 'regular';
  }>(),
  {
    type: 'regular',
  },
);

const info = computed(() => {
  let tag;
  let classes;

  switch (props.type) {
    case 'primary':
      tag = 'h6';
      classes = 'text-[24px] leading-[1.42em] tracking-normal normal-case';
      break;
    default:
      tag = 'p';
      classes = 'text-[21px] leading-[1.4em] mx-0 mt-0 mb-[3px]';
      break;
  }

  return { tag, classes };
});
</script>

<template>
  <component
    :is="info.tag"
    class="font-cormorant italic text-black font-normal"
    :class="info.classes"
  >
    <slot />
  </component>
</template>
