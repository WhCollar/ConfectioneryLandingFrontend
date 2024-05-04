<script setup lang="ts">
import { ref } from 'vue';

const loading = ref();
</script>

<template>
  <template v-if="loading">
    <div class="w-[100vw] h-[100vh] flex-col justify-center">
      Грузимся, честно...
    </div>
  </template>
  <template v-else>
    <slot />
  </template>
</template>
