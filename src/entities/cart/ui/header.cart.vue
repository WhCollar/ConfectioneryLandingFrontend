<script setup lang="ts">
import { useRouter } from 'vue-router';
import { RouterEnum } from '@/shared/model/router';
import { CartIcon } from 'shared/ui/icons';
import { useCartStore } from '../model';

const router = useRouter();
const cartStore = useCartStore();
</script>

<template>
  <a
    class="relative table-cell align-middle leading-[1]"
    @click="router.push({ name: RouterEnum.Cart })"
  >
    <div class="relative">
      <span class="relative inline-block align-top leading-[1]">
        <CartIcon />
      </span>
      <span
        class="absolute cart-count-position text-[22px] text-primary font-cormorant italic"
      >
        {{ cartStore.count }}
      </span>
    </div>
  </a>
</template>

<style scoped>
.cart-count-position {
  left: calc(100% + 3px);
  bottom: -4px;
}
</style>
