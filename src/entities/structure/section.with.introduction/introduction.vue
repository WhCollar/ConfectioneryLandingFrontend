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
  <div class="w-full text-center">
    <div class="w-full">
      <template v-if="titleLabel">
        <TypographyTitleLabel>{{ titleLabel }}</TypographyTitleLabel>
      </template>
      <template v-if="title">
        <TypographyTitle :level="2">{{ title }}</TypographyTitle>
      </template>
      <template v-if="text">
        <Divider />
        <TypographyText type="primary" :class="textClass">
          {{ text }}
        </TypographyText>
      </template>
    </div>
  </div>
</template>
