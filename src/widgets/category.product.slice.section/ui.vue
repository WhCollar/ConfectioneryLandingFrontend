<script setup lang="ts">
// eslint-disable-next-line
import { ProductCategorySlice } from 'widgets/product.category.slice';
import { useMainPageCategorySection } from 'entities/queries';
import { SectionWithIntroduction } from 'entities/structure';

const { data } = useMainPageCategorySection();
</script>

<template>
  <SectionWithIntroduction
    :introduction-props="{
      titleLabel: ' we know that ',
      title: data?.name,
      text: data?.description,
    }"
  >
    <template #content>
      <ProductCategorySlice :products="data?.products" />
    </template>
  </SectionWithIntroduction>
</template>
