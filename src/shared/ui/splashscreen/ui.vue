<script setup lang="ts">
import { useIsFetching } from '@tanstack/vue-query';
import { computed, ref, watchEffect } from 'vue';

const isFetching = useIsFetching();
const isLoading = computed(() => isFetching.value !== 0);

const isScreensaverShow = ref(false);

watchEffect(() => {
  if (!isLoading.value) {
    setTimeout(() => {
      isScreensaverShow.value = isLoading.value;
    }, 1600);
  } else {
    isScreensaverShow.value = isLoading.value;
  }
});
</script>

<template>
  <div
    v-show="isScreensaverShow"
    class="fixed z-[1000] bg-white w-[100vw] h-[100vh] flex justify-center items-center transition-opacity duration-[1.6s]"
    :class="isLoading ? 'opacity-100' : 'opacity-0'"
  >
    <div class="loading-ping"></div>
  </div>
</template>

<style lang="scss">
.loading-ping {
  animation: myAnim 2s linear 0s infinite normal backwards;
  @apply bg-primary;
  width: 100px;
  height: 100px;
  transform: rotate(-45deg);
}

@keyframes myAnim {
  0% {
    opacity: 0.8;
    transform: scale(0.2);
  }

  80% {
    opacity: 0;
    transform: scale(1.2);
  }

  100% {
    opacity: 0;
    transform: scale(2.2);
  }
}
</style>
