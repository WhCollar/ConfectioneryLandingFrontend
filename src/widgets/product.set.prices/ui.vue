<script setup lang="ts">
import { ProductSetCard, ProductSetCardProps } from 'entities/product.set.card';

const sets: ProductSetCardProps[] = [
  {
    id: 0,
    title: 'standard',
    price: 119,
    composition: [
      'Lorem ipsum dolor sit amet',
      'Contrary to popular beli',
      'Lorem ipsum dolor sit amet',
    ],
  },
  {
    id: 1,
    title: 'hot new',
    price: 179,
    composition: [
      'Lorem ipsum dolor sit amet',
      'Contrary to popular beli',
      'Lorem ipsum dolor sit amet',
      'Dolor sit ipsum lorem',
    ],
    active: true,
  },
  {
    id: 2,
    title: 'delights',
    price: 219,
    composition: [
      'Lorem ipsum dolor sit amet',
      'Contrary to popular beli',
      'Lorem ipsum dolor sit amet',
    ],
  },
  {
    id: 3,
    title: 'deluxe',
    price: 279,
    composition: [
      'Lorem ipsum dolor sit amet',
      'Contrary to popular beli',
      'Lorem ipsum dolor sit amet',
    ],
  },
];
</script>

<template>
  <div class="w-full inline-block align-middle text-center leading-[31px]">
    <div class="align-baseline">
      <template v-for="(set, index) in sets" :key="index">
        <ProductSetCard v-bind="set" />
      </template>
    </div>
  </div>
</template>
