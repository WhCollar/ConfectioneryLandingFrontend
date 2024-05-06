<script setup lang="ts">
withDefaults(
  defineProps<{
    iconClass?: string;
    hoverTextColorClass?: string;
  }>(),
  {
    hoverTextColorClass: 'text-white',
  },
);
</script>

<template>
  <a
    class="inline-block h-[35px] w-[35px] text-[15px] text-primary border border-primary rotate-[45deg] align-middle leading-[35px] bg-transparent transition-colors ease-out duration-[.2s] hover:bg-primary cursor-pointer"
    :class="`hover:${hoverTextColorClass}`"
  >
    <span class="rotate-[-45deg] inline-block" :class="iconClass"></span>
  </a>
</template>
