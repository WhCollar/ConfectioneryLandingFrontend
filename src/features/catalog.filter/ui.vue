<script setup lang="ts">
import { computed, ref } from 'vue';
import { SecondaryButton } from 'shared/ui/buttons';
import { Divider } from 'shared/ui/divider';
import { Slider } from 'shared/ui/slider';
import { TypographyTitle, TypographyText } from 'shared/ui/typography';
import { FilterProperties } from './model';

const emit = defineEmits<{
  (e: 'applyFilters', properties: FilterProperties): void;
}>();

const filterProperties = ref<FilterProperties>({
  minPrice: 10,
  maxPrice: 300,
  categories: [
    'Autumn Pies',
    'Raw Cakes',
    'Cupcakes',
    'Wedding cakes',
    'Truffles',
    'Chocobar',
  ],
});

const selectedFilterProperties = ref<FilterProperties>({
  minPrice: 10,
  maxPrice: 300,
  categories: [],
});

const priceSliderValue = computed({
  get: () =>
    [
      selectedFilterProperties.value.minPrice,
      selectedFilterProperties.value.maxPrice,
    ] as [number, number],
  set: (value) => {
    selectedFilterProperties.value.minPrice = value[0];
    selectedFilterProperties.value.maxPrice = value[1];
  },
});

const onClickCategory = (category: string) => {
  if (selectedFilterProperties.value.categories.includes(category)) {
    const categoryIndex =
      selectedFilterProperties.value.categories.indexOf(category);
    selectedFilterProperties.value.categories.splice(categoryIndex, 1);
  } else {
    selectedFilterProperties.value.categories.push(category);
  }
};
</script>

<template>
  <div class="text-center flex-col justify-center px-[15px]">
    <div class="mb-[45px]">
      <TypographyTitle class="mb-[40px]" :level="5">Цена</TypographyTitle>
      <Slider
        v-model:value="priceSliderValue"
        :min="filterProperties.minPrice"
        :max="filterProperties.maxPrice"
      />
    </div>
    <div class="mb-[45px]">
      <TypographyTitle :level="5">Категории</TypographyTitle>
      <Divider />
      <ul class="list-none mt-[16px]">
        <template
          v-for="(category, index) in filterProperties.categories"
          :key="index"
        >
          <li>
            <TypographyText
              class="cursor-pointer"
              :class="{
                ['text-primary']:
                  selectedFilterProperties.categories.includes(category),
              }"
              @click="onClickCategory(category)"
            >
              {{ category }}
            </TypographyText>
          </li>
        </template>
      </ul>
    </div>
    <SecondaryButton @click="emit('applyFilters', selectedFilterProperties)">
      Отфильтровать
    </SecondaryButton>
  </div>
</template>
