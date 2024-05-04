<script setup lang="ts">
import { Divider } from 'shared/ui/divider';
import {
  TypographyText,
  TypographyTitle,
  TypographyTitleLabel,
} from 'shared/ui/typography';
import { IntroductionProps } from './model';

defineProps<IntroductionProps>();
</script>

<template>
  <div class="text-center">
    <div class="w-full md:px-[5%] lg:px-[19%]">
      <template v-if="titleLabel">
        <TypographyTitleLabel>{{ titleLabel }}</TypographyTitleLabel>
      </template>
      <template v-if="title">
        <TypographyTitle :level="2">{{ title }}</TypographyTitle>
      </template>
      <template v-if="text">
        <Divider />
        <TypographyText type="primary">
          {{ text }}
        </TypographyText>
      </template>
    </div>
  </div>
</template>
