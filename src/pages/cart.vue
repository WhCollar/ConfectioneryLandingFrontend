<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useCartStore } from 'entities/cart';
import { RouterEnum } from 'shared/model/router';
import { SecondaryButton } from 'shared/ui/buttons';
import { ShotTitle } from 'shared/ui/images';
import { NumberInput } from 'shared/ui/inputs';
import {
  TypographyTitle,
  TypographyText,
  TypographyLink,
} from 'shared/ui/typography';
import { Container } from 'shared/ui/utils';

const router = useRouter();
const cartStore = useCartStore();
</script>

<template>
  <section
    class="h-[300px] bg-fixed bg-[50%_0] bg-no-repeat gap-[20px]"
    :style="{ backgroundImage: `url('${ShotTitle}')` }"
  >
    <Container class="h-full flex flex-col justify-center px-[30px]">
      <TypographyTitle :level="2"> Корзина </TypographyTitle>
    </Container>
  </section>
  <section class="py-[135px]">
    <Container class="px-[15px]">
      <template v-if="cartStore.asArray.length < 1">
        <div class="w-full flex flex-col items-center justify-center">
          <TypographyTitle :level="5" class="mb-[64px]">
            <span> В корзине нет элементов </span>
          </TypographyTitle>
          <TypographyLink
            active
            hide-underline
            @click="router.push({ name: RouterEnum.Catalog })"
          >
            Перейти в каталог
          </TypographyLink>
        </div>
      </template>
      <template v-else>
        <table class="info-table">
          <thead>
            <tr>
              <th></th>
              <th class="hidden sm:block"></th>
              <th>Название</th>
              <th class="hidden sm:block">Цена</th>
              <th>Количество</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="item in cartStore.asArray" :key="item.id">
              <tr>
                <td class="text-center w-[40px]">
                  <a class="remove-button" @click="cartStore.remove(item.id)">
                    ×
                  </a>
                </td>

                <td class="hidden sm:block w-[86px] pr-25px">
                  <a
                    @click="
                      router.push({
                        name: RouterEnum.Product,
                        params: { id: item.id },
                      })
                    "
                  >
                    <img :src="item.image" />
                  </a>
                </td>

                <td>
                  <a
                    class="block sm:hidden"
                    @click="
                      router.push({
                        name: RouterEnum.Product,
                        params: { id: item.id },
                      })
                    "
                  >
                    <img :src="item.image" />
                  </a>
                  <TypographyText
                    type="link"
                    @click="
                      router.push({
                        name: RouterEnum.Product,
                        params: { id: item.id },
                      })
                    "
                  >
                    {{ item.name }}
                  </TypographyText>
                  <span class="block sm:hidden"> ₽{{ item.price }} </span>
                </td>

                <td class="hidden sm:table-cell">₽{{ item.price }}</td>

                <td>
                  <NumberInput
                    :value="item.count"
                    :min="0"
                    :max="100"
                    @update:value="
                      (value) => value && cartStore.changeCount(item.id, value)
                    "
                  />
                </td>
              </tr>
            </template>
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td>Итого:</td>
              <td>₽{{ cartStore.totalCost }}</td>
            </tr>
          </tfoot>
        </table>
        <SecondaryButton @click="router.push({ name: RouterEnum.CreateOrder })">
          Оформить заказ
        </SecondaryButton>
      </template>
    </Container>
  </section>
</template>

<!--<style scoped lang="scss">
.remove-button {
  @apply cursor-pointer;
}

.cart-table {
  @apply w-full;
  @apply align-middle;
  @apply border-collapse;
  @apply mb-[35px];
}

.cart-table tr {
  @apply border-b;
  @apply border-gray;
}

.cart-table thead tr th {
  @apply text-black;
  @apply py-[10px];
  @apply text-[18px];
  @apply leading-[1.33em];
  @apply font-medium;
  @apply uppercase;
  @apply tracking-[.06em];
  @apply text-left;
}

.cart-table tbody tr td {
  @apply py-[25px];
  @apply align-middle;
  @apply text-[24px];
  @apply leading-[1.42em];
}

.cart-table tfoot tr td {
  @apply py-[25px];
  @apply align-middle;
  @apply text-[24px];
  @apply leading-[1.42em];
}
</style>-->
