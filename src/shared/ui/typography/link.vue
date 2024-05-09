<script setup lang="ts">
defineProps<{
  href?: string;
  active?: boolean;
  hideUnderline?: boolean;
}>();
</script>

<template>
  <a
    :href="href"
    class="relative inline-block transition text-black hover:text-primary align-top uppercase font-montserrat text-[13px] px-[24px] tracking-[.19em] leading-[23px] font-medium cursor-pointer"
    :class="{ ['text-primary']: active }"
  >
    <span class="relative block">
      <span
        class="relative align-top inline-block after:content-[''] after:bottom-[1px] after:block after:absolute after:translate-x-[-50%] after:left-[50%] after:w-[20px] after:h-[1px] after:bg-current after:opacity-0 after:transition-opacity after:hover:opacity-100"
        :class="{
          ['after:opacity-100']: active && !hideUnderline,
          ['after:hover:opacity-0']: hideUnderline,
        }"
      >
        <slot />
      </span>
    </span>
  </a>
</template>
