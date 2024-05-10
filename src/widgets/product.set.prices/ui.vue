<script setup lang="ts">
import {
  TypographyTitleLabel,
  TypographyText,
  TypographyLink,
} from 'shared/ui/typography';
import { ProductSetCard } from './model';

const sets: ProductSetCard[] = [
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
    price: 119,
    composition: [
      'Lorem ipsum dolor sit amet',
      'Contrary to popular beli',
      'Lorem ipsum dolor sit amet',
      'Dolor sit ipsum lorem',
    ],
  },
  {
    id: 2,
    title: 'delights',
    price: 119,
    composition: [
      'Lorem ipsum dolor sit amet',
      'Contrary to popular beli',
      'Lorem ipsum dolor sit amet',
    ],
  },
  {
    id: 3,
    title: 'deluxe',
    price: 119,
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
        <div
          class="w-[25%] relative float-none align-middle inline-block px-[15px] mb-[30px]"
        >
          <div class="border border-gray">
            <ul>
              <li class="pt-[17px] pb-[8px]">
                <TypographyTitleLabel
                  class="block relative pt-[43px] before:bg-gray before:content-[''] before:h-[1px] before:w-[38px] before:absolute before:bottom-0 before:left-0 after:bg-gray after:content-[''] after:h-[1px] after:w-[38px] after:absolute after:bottom-0 after:right-0"
                >
                  {{ set.title }}
                </TypographyTitleLabel>
              </li>
              <li>
                <TypographyText class="text-[50px] font-light">
                  ₽{{ set.price }}
                </TypographyText>
              </li>
              <li class="pt-[29px] bp-[1px] px-[15px]">
                <ul>
                  <template
                    v-for="(itemName, index) in set.composition"
                    :key="index"
                  >
                    <li class="py-[7px]">
                      <TypographyText>
                        {{ itemName }}
                      </TypographyText>
                    </li>
                  </template>
                </ul>
              </li>
              <li class="pt-[28px] pb-[51px] px-[15px]">
                <TypographyLink active> Read more </TypographyLink>
              </li>
            </ul>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
