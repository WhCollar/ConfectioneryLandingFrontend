<script setup lang="ts">
import { Field } from 'vee-validate';
import ErrorMessage from './error.message.vue';

interface Props {
  name: string;
  options?: { value: number | string; label: string }[];
  label?: string;
  labelClass?: string;
  inputWrapperClass?: string;
  placeholder?: string;
}

defineProps<Props>();
</script>

<template>
  <div>
    <label v-if="label" :for="name" :class="labelClass">{{ label }}</label>
    <div :class="inputWrapperClass || 'border-b border-zinc-400'">
      <Field
        type="text"
        as="select"
        class="w-full relative py-[10px] px-[26px] select-option border border-gray focus:outline-none focus:border-primary transition-colors duration-[.2s] ease-in-out"
        :name="name"
      >
        <template v-if="placeholder">
          <option
            class="select-option-placeholder"
            value=""
            disabled
            selected
            hidden
          >
            {{ placeholder }}
          </option>
        </template>
        <template v-for="option in options" :key="option.value">
          <option class="select-option" :value="option.value">
            {{ option.label }}
          </option>
        </template>
      </Field>
    </div>
    <ErrorMessage :name="name" />
  </div>
</template>

<style scoped lang="scss">
.select-option-placeholder {
  @apply text-gray;
  @apply font-cormorant;
  @apply text-[17px];
  @apply leading-[28px];
}

.select-option {
  @apply font-cormorant;
  @apply text-[17px];
  @apply leading-[28px];
}
</style>
