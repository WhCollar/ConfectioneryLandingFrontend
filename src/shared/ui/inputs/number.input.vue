<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  value?: number;
  min?: number;
  max?: number;
}>();

const emit = defineEmits<{
  (e: 'update:value', value?: number): void;
}>();

const value = computed({
  get: () => props.value,
  set: (newValue) => {
    if (!newValue) return;

    if (props.min && newValue <= props.min) {
      emit('update:value', props.min);
      return;
    }

    if (props.max && newValue >= props.max) {
      emit('update:value', props.max);
      return;
    }

    emit('update:value', newValue);
  },
});
</script>

<template>
  <div class="relative inline-block align-middle">
    <input
      class="quality-border quality-input"
      v-model="value"
      :min="min"
      :max="max"
    />
    <span class="quality-border quality-button quality-plus" @click="value++">
      +
    </span>
    <span class="quality-border quality-button quality-minus" @click="value--">
      -
    </span>
  </div>
</template>

<style scoped lang="scss">
.quality-border {
  @apply border;
  @apply border-primary;
}

.quality-button {
  @apply absolute;
  @apply w-[30px];
  @apply h-[30px];
  @apply text-[15px];
  @apply cursor-pointer;
  @apply transition-colors;
  @apply ease-in-out;
  @apply duration-[.15s];
  @apply hover:text-primary;
  @apply text-center;
  @apply leading-[30px];
}

.quality-minus {
  @apply bottom-0;
}

.quality-plus {
  @apply top-0;
  @apply border-b-0;
}

.quality-input {
  @apply relative;
  @apply h-[60px];
  @apply w-[75px];
  @apply text-[18px];
  @apply leading-[60px];
  @apply font-semibold;
  @apply text-center;
  @apply font-montserrat;
}
</style>
