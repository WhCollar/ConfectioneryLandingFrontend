<script setup lang="ts">
defineProps<{
  dividerStart?: boolean;
  markerStart?: boolean;
}>();
</script>

<template>
  <div
    class="relative my-[16px] h-auto leading-[1em] text-center before:content-[' ']"
    style="font-size: 0"
  >
    <div
      class="relative align-middle my-[10px] h-auto"
      :class="{ ['inline-block']: !dividerStart }"
    >
      <div class="w-full relative align-middle inline-block">
        <div class="w-[140px] h-[1px] bg-primary scale-100"></div>
        <div
          class="absolute w-[8px] h-[8px] top-[50%] align-baseline bg-primary translate-y-[-50%] translate-x-[-50%] rotate-45 m-0 p-0"
          :class="markerStart ? 'left-0' : 'left-[50%]'"
        ></div>
      </div>
    </div>
  </div>
</template>
