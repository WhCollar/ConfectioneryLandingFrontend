<script setup lang="ts">
defineProps<{
  imageUrl: string;
}>();
</script>

<template>
  <div
    class="bg-[50%_0px] max-2xl:bg-cover bg-fixed bg-no-repeat"
    :style="{ backgroundImage: `url('${imageUrl}')` }"
  >
    <slot />
  </div>
</template>
