<script setup lang="ts">
import { Field } from 'vee-validate';
import ErrorMessage from './error.message.vue';

interface Props {
  name: string;
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
    <div class="" :class="inputWrapperClass">
      <Field
        type="text"
        class="w-full relative py-[10px] px-[26px] font-cormorant text-[17px] leading-[28px] border border-gray focus:outline-none focus:border-primary transition-colors duration-[.2s] ease-in-out"
        :name="name"
        :placeholder="placeholder"
      />
    </div>
    <ErrorMessage :name="name" />
  </div>
</template>
