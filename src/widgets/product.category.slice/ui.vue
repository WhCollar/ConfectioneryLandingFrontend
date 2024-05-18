<script setup lang="ts">
import { ProductCard } from 'features/product.card';
import { ProductsResponse } from 'entities/queries';
import {
  Truffle6,
  Truffle5,
  Truffle4,
  Truffle3,
  Truffle2,
  Truffle1,
} from 'shared/ui/images';

defineProps<{
  products?: ProductsResponse[];
}>();

const staticProducts: ProductsResponse[] = [
  {
    id: '1',
    images: [Truffle1],
    name: 'COCONUT TRUFFLE',
    categoryIds: [],
    description: 'Chocobar, Cupcakes, Truffles',
    price: 10,
  },
  {
    id: '2',
    images: [Truffle2],
    name: 'PEANUT TRUFFLE',
    categoryIds: [],
    description: 'Chocobar, Cupcakes, Truffles',
    price: 10,
  },
  {
    id: '3',
    images: [Truffle3],
    name: 'S’MORES TRUFFLE',
    categoryIds: [],
    description: 'Chocobar, Cupcakes, Truffles',
    price: 10,
  },
  {
    id: '4',
    images: [Truffle4],
    name: 'ALMOND TRUFFLE',
    categoryIds: [],
    description: 'Chocobar, Cupcakes, Truffles',
    price: 10,
  },
  {
    id: '5',
    images: [Truffle5],
    name: 'CINNAMON TRUFFLE',
    categoryIds: [],
    description: 'Chocobar, Cupcakes, Truffles',
    price: 10,
  },
  {
    id: '6',
    images: [Truffle6],
    name: 'SEA SALT TRUFFLE',
    categoryIds: [],
    description: 'Chocobar, Cupcakes, Truffles',
    price: 10,
  },
];
</script>

<template>
  <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <template v-for="(product, index) in products" :key="index">
      <ProductCard v-bind="product" />
    </template>
  </div>
</template>
