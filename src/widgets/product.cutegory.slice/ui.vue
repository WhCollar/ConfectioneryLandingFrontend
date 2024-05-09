<script setup lang="ts">
import { ProductCard, ProductCardProps } from 'features/product.card';
import {
  Truffle6,
  Truffle5,
  Truffle4,
  Truffle3,
  Truffle2,
  Truffle1,
} from 'shared/ui/images';

const products: ProductCardProps[] = [
  {
    id: 1,
    imgUrl: Truffle1,
    title: 'COCONUT TRUFFLE',
    description: 'Chocobar, Cupcakes, Truffles',
    price: 10,
  },
  {
    id: 2,
    imgUrl: Truffle2,
    title: 'PEANUT TRUFFLE',
    description: 'Chocobar, Cupcakes, Truffles',
    price: 10,
  },
  {
    id: 3,
    imgUrl: Truffle3,
    title: 'S’MORES TRUFFLE',
    description: 'Chocobar, Cupcakes, Truffles',
    price: 10,
  },
  {
    id: 4,
    imgUrl: Truffle4,
    title: 'ALMOND TRUFFLE',
    description: 'Chocobar, Cupcakes, Truffles',
    price: 10,
  },
  {
    id: 5,
    imgUrl: Truffle5,
    title: 'CINNAMON TRUFFLE',
    description: 'Chocobar, Cupcakes, Truffles',
    price: 10,
  },
  {
    id: 6,
    imgUrl: Truffle6,
    title: 'SEA SALT TRUFFLE',
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
