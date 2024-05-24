<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useCartStore } from 'entities/cart';
import { ProductsResponse } from 'entities/queries';
import { RouterEnum } from '@/shared/model/router';
import { TypographyLink, TypographyText } from 'shared/ui/typography';

const props = defineProps<ProductsResponse>();

const router = useRouter();
const cartStore = useCartStore();
const isAddedToCart = ref(cartStore.isAlreadyAddedToCart(props.id));

const addToCart = () => {
  cartStore.add(props.id, {
    name: props.name,
    image: props.images.at(0),
    price: props.price,
  });

  isAddedToCart.value = true;
};
</script>

<template>
  <div class="text-center">
    <div class="relative mb-[20px]">
      <img class="w-full" :src="images && images[0]" :alt="name" />
      <div
        class="absolute top-0 left-0 z-[150] w-full h-full bg-product-card-hover-placeholder opacity-0 transition-opacity duration-[.2s] ease-out hover:opacity-100"
      >
        <div class="w-full h-full flex justify-center items-center">
          <template v-if="isAddedToCart">
            <TypographyLink
              active
              @click="router.push({ name: RouterEnum.Cart })"
            >
              Перейти в корзину
            </TypographyLink>
          </template>
          <template v-else>
            <TypographyLink active @click="addToCart">
              Добавить в корзину
            </TypographyLink>
          </template>
        </div>
      </div>
    </div>
    <div>
      <TypographyLink
        class="font-semibold text-[18px]"
        hide-underline
        @click="router.push({ name: RouterEnum.Product, params: { id } })"
      >
        {{ name }}
      </TypographyLink>
    </div>
    <div>
      <TypographyText class="text-[24px] leading-[1.4em]">
        {{ kilocalorie }} ккал.
      </TypographyText>
    </div>
    <div>
      <TypographyText class="text-[24px] leading-[1.4em]">
        ₽{{ price }}
      </TypographyText>
    </div>
  </div>
</template>
