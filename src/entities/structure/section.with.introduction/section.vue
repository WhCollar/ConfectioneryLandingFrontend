<script setup lang="ts">
import { Container } from 'shared/ui/utils';
import Introduction from './introduction.vue';
import { IntroductionProps } from './model';

defineProps<{
  introductionProps: IntroductionProps;
}>();
</script>

<template>
  <section class="pt-[145px] pb-[112px]">
    <Container>
      <template v-if="introductionProps">
        <Introduction
          v-bind="introductionProps"
          class="md:px-[5%] lg:px-[19%]"
        />
        <div class="w-full h-[20px]"></div>
      </template>
      <slot name="content" />
    </Container>
  </section>
</template>
