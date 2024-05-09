<script setup lang="ts">
import { computed } from 'vue';
import { useCartStore } from 'entities/cart';
import { TypographyLink, TypographyText } from 'shared/ui/typography';
import { ProductCardProps } from './model';

const props = defineProps<ProductCardProps>();

const cartStore = useCartStore();
const isAddedToCart = computed(() => cartStore.isAlreadyAddedToCart(props.id));
</script>

<template>
  <div class="text-center">
    <div class="relative">
      <img :src="imgUrl" :alt="title" />
      <div
        class="absolute top-0 left-0 z-[150] w-full h-full bg-product-card-hover-placeholder opacity-0 transition-opacity duration-[.2s] ease-out hover:opacity-100"
      >
        <div class="w-full h-full flex justify-center items-center">
          <template v-if="isAddedToCart">
            <TypographyLink active>View cart</TypographyLink>
          </template>
          <template v-else>
            <TypographyLink active>Add to cart</TypographyLink>
          </template>
        </div>
      </div>
    </div>
    <div>
      <TypographyLink class="font-semibold text-[18px]" hide-underline>{{
        title
      }}</TypographyLink>
    </div>
    <div>
      <TypographyText class="text-[24px] leading-[1.4em]">
        {{ description }}
      </TypographyText>
    </div>
    <div>
      <TypographyText class="text-[24px] leading-[1.4em]">
        ₽{{ price }}
      </TypographyText>
    </div>
  </div>
</template>
