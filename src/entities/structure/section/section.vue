<script setup lang="ts">
import { Container } from 'shared/ui/utils';
import Introduction from './introduction.vue';

defineProps<{
  introductionProps: IntroductionProps;
}>();
</script>

<template>
  <section class="pt-[145px] pb-[112px]">
    <Container>
      <template v-if="introductionProps">
        <Introduction v-bind="introductionProps" />
      </template>
      <slot name="content" />
    </Container>
  </section>
</template>
