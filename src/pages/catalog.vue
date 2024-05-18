<script setup lang="ts">
import { computed, ref } from 'vue';
import { CatalogFilter } from 'features/catalog.filter';
import { FilterProperties } from 'features/catalog.filter';
import { ProductCard, ProductCardProps } from 'features/product.card';
import { useProductsGet } from 'entities/queries';
import { ShotTitle, Shop2, Shop13, Shop15, Shop26 } from 'shared/ui/images';
import { TypographyTitle, TypographyText } from 'shared/ui/typography';
import { Container } from 'shared/ui/utils';

const filters = ref<FilterProperties>();
const CategoryIds = computed(() =>
  filters.value?.categories.map((category) => category.id),
);
const MinPrice = computed(() => filters.value?.minPrice);
const MaxPrice = computed(() => filters.value?.maxPrice);
const { data } = useProductsGet(CategoryIds, MinPrice, MaxPrice);

const products: ProductCardProps[] = [
  {
    id: 0,
    imgUrl: Shop2,
    title: 'CARROT CAKE',
    description: 'Cupcakes, Raw Cakes, Truffles',
    price: 200,
  },
  {
    id: 1,
    imgUrl: Shop13,
    title: 'SPONGE CAKE',
    description: 'Autumn Pies, Truffles',
    price: 200,
  },
  {
    id: 2,
    imgUrl: Shop15,
    title: 'MAKOWIEC',
    description: 'Autumn Pies, Truffles',
    price: 200,
  },
  {
    id: 3,
    imgUrl: Shop26,
    title: 'ORANGE TRUFFLE',
    description: 'Chocobar, Cupcakes, Truffles',
    price: 200,
  },
];
</script>

<template>
  <section
    class="h-[300px] bg-fixed bg-[50%_0] bg-no-repeat gap-[20px]"
    :style="{ backgroundImage: `url('${ShotTitle}')` }"
  >
    <Container class="h-full flex flex-col justify-center">
      <TypographyTitle :level="2"> Каталог </TypographyTitle>
    </Container>
  </section>
  <Container class="my-[70px]">
    <div class="pb-[30px]">
      <TypographyText> Найдено: {{ products.length }} </TypographyText>
    </div>
    <div class="w-full lg:flex">
      <div class="w-full lg:w-[25%] px-[15px]">
        <CatalogFilter
          @apply-filters="(properties) => (filters = properties)"
        />
      </div>
      <div class="w-full lg:w-[75%] px-[15px] mb-[30px] lg:mb-0">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
          <template v-for="(product, index) in data" :key="index">
            <ProductCard v-bind="product" />
          </template>
        </div>
      </div>
    </div>
  </Container>
</template>
