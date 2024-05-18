<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { CategoryResponse, useFiltersGet } from 'entities/queries';
import { SecondaryButton } from 'shared/ui/buttons';
import { Divider } from 'shared/ui/divider';
import { Slider } from 'shared/ui/slider';
import { TypographyTitle, TypographyText } from 'shared/ui/typography';
import { FilterProperties } from './model';

const emit = defineEmits<{
  (e: 'applyFilters', properties: FilterProperties): void;
}>();

const { data } = useFiltersGet();

const filterProperties = ref<FilterProperties>({
  minPrice: 0,
  maxPrice: 1,
  categories: [],
});

const selectedFilterProperties = ref<FilterProperties>({
  minPrice: 0,
  maxPrice: 1,
  categories: [],
});

watch(
  () => data.value,
  (value) => {
    const fp = {
      minPrice: value?.minPrice ?? 0,
      maxPrice: value?.maxPrice ?? 1,
      categories: value?.categories ?? [],
    };
    filterProperties.value = fp;
    selectedFilterProperties.value = {
      minPrice: fp.minPrice,
      maxPrice: fp.maxPrice,
      categories: [],
    };
  },
);

const priceSliderValue = computed({
  get: () =>
    [
      selectedFilterProperties.value.minPrice,
      selectedFilterProperties.value.maxPrice,
    ] as [number, number],
  set: (value) => {
    console.log(value);
    selectedFilterProperties.value.minPrice = value[0];
    selectedFilterProperties.value.maxPrice = value[1];
  },
});

const onClickCategory = (category: CategoryResponse) => {
  const selectedCategories = selectedFilterProperties.value.categories;
  if (selectedCategories.includes(category)) {
    const categoryIndex = selectedCategories.indexOf(category);
    selectedCategories.splice(categoryIndex, 1);
  } else {
    selectedCategories.push(category);
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
    <template v-if="filterProperties.categories.length > 0">
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
                {{ category.name }}
              </TypographyText>
            </li>
          </template>
        </ul>
      </div>
    </template>
    <SecondaryButton @click="emit('applyFilters', selectedFilterProperties)">
      Отфильтровать
    </SecondaryButton>
  </div>
</template>
