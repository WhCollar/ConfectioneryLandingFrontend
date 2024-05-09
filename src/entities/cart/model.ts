import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

type CartItemInfo = { count: number };

export const useCartStore = defineStore('cart', () => {
  const cart = ref(new Map());

  const count = computed(() => cart.value.size);

  function isAlreadyAddedToCart(id: number) {}

  function changeCount() {}

  function add() {}

  function remove() {}

  return {
    count,
    isAlreadyAddedToCart,
    add,
    remove,
    changeCount,
  };
});
