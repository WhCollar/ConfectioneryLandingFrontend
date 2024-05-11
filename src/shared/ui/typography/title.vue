<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    level?: 1 | 2 | 3 | 4 | 5;
  }>(),
  {
    level: 1,
  },
);

const info = computed(() => {
  let tag;
  let classes;

  switch (props.level) {
    case 2:
      tag = 'h2';
      classes =
        'sm:text-[47px] lg:text-[56px] text-[32px] uppercase font-semibold tracking-[.12em]';
      break;
    case 3:
      tag = 'h3';
      classes =
        'text-[40px] font-semibold uppercase leading-[1.1em] tracking-[.08em]';
      break;
    case 4:
      tag = 'h4';
      classes = 'text-[24px] font-bold uppercase';
      break;
    case 5:
      tag = 'h5';
      classes =
        'uppercase font-semibold leading-[1.33em] text-[18px] tracking-[.06em]';
      break;
    default:
      tag = 'h1';
      classes = '';
      break;
  }

  return { tag, classes };
});
</script>

<template>
  <component
    :is="info.tag"
    class="font-montserrat text-black"
    :class="info.classes"
  >
    <slot />
  </component>
</template>
