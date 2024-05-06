<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { CloseIcon } from '../icons';

const props = defineProps<{
  show: boolean;
}>();

const emit = defineEmits<{
  (e: 'update:show', show: boolean): void;
}>();

const isHolderShow = ref(props.show);

watchEffect(() => {
  if (!props.show) {
    setTimeout(() => {
      isHolderShow.value = props.show;
    }, 600);
  } else {
    isHolderShow.value = props.show;
  }
});
</script>

<template>
  <div
    v-show="isHolderShow"
    class="fixed top-0 left-0 z-30 h-screen w-screen duration-[.6s] transition-opacity"
    :class="show ? 'opacity-100' : 'opacity-0'"
    style="background: rgba(0, 0, 0, 0.5)"
    @click="emit('update:show', !show)"
  ></div>
  <div
    class="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto duration-[.6s] transition-transform bg-white w-full lg:w-[560px]"
    tabindex="-1"
    :class="{ 'translate-x-full': !show }"
  >
    <div class="w-full h-[60px] px-[40px] flex items-center justify-end">
      <div @click="emit('update:show', !show)">
        <CloseIcon />
      </div>
    </div>
    <div :style="{ height: 'calc(100% - 60px)' }">
      <slot name="content" />
    </div>
  </div>
</template>
