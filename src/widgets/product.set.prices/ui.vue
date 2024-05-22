<script setup lang="ts">
import { ProductSetCard, ProductSetCardProps } from 'entities/product.set.card';

const sets: ProductSetCardProps[] = [
  {
    id: 0,
    title: 'Стандартный',
    price: 119,
    composition: ['Шоколадный торт', 'Яблочный пирог', 'Морковный кекс'],
  },
  {
    id: 1,
    title: 'Горячие новинки',
    price: 179,
    composition: ['Торт с виски-кремом', 'Матча чизкейк', 'Лаванда и лимон'],
    active: true,
  },
  {
    id: 2,
    title: 'Удовольствие',
    price: 219,
    composition: ['Кокосовый трюфель', 'Малиновый мусс', 'Фисташковый макарон'],
  },
  {
    id: 3,
    title: 'Особенный',
    price: 279,
    composition: ['Тирамису', 'Павлова с ягодами', 'Шоколадный фондан'],
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
