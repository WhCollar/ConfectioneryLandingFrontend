<script setup lang="ts">
import {
  TypographyLink,
  TypographyText,
  TypographyTitleLabel,
} from 'shared/ui/typography';
import { ProductSetCardProps } from './model';

defineProps<ProductSetCardProps>();
</script>

<template>
  <div
    class="w-full md:w-[50%] lg:w-[33%] xl:w-[25%] relative float-none align-middle inline-block px-[15px] mb-[30px]"
  >
    <div class="border" :class="active ? 'border-primary' : 'border-gray'">
      <ul>
        <li class="pt-[17px] pb-[8px]">
          <TypographyTitleLabel
            class="block relative pt-[43px] before:content-[''] before:h-[1px] before:w-[38px] before:absolute before:bottom-0 before:left-0 after:content-[''] after:h-[1px] after:w-[38px] after:absolute after:bottom-0 after:right-0"
            :class="
              active
                ? 'after:bg-primary before:bg-primary'
                : 'after:bg-gray before:bg-gray'
            "
          >
            {{ title }}
          </TypographyTitleLabel>
        </li>
        <li>
          <TypographyText class="text-[50px] font-light">
            ₽{{ price }}
          </TypographyText>
        </li>
        <li class="pt-[29px] bp-[1px] px-[15px]">
          <ul>
            <template v-for="(itemName, index) in composition" :key="index">
              <li class="py-[7px]">
                <TypographyText>
                  {{ itemName }}
                </TypographyText>
              </li>
            </template>
          </ul>
        </li>
        <li class="pt-[28px] pb-[51px] px-[15px]">
          <TypographyLink active> Подробнее </TypographyLink>
        </li>
      </ul>
    </div>
  </div>
</template>
