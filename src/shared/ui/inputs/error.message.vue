<script setup lang="ts">
import { ErrorMessage } from 'vee-validate';

defineProps<{
  name: string;
}>();
</script>

<template>
  <ErrorMessage class="text-error text-[21px] font-cormorant" :name="name" />
</template>
