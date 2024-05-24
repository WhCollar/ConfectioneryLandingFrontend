import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

type ICartItemData = { name: string; image?: string; price?: number };

type CartItem = {
  count: number;
  data: ICartItemData;
};

type ArrayCartItem = Omit<CartItem, 'data'> & ICartItemData & { id: string };

export const useCartStore = defineStore(
  'cart',
  () => {
    const cart = ref<{ [key: string]: CartItem }>({});

    const count = computed(() => Object.keys(cart.value).length);

    const asArray = computed(() => {
      const items: ArrayCartItem[] = [];
      Object.entries(cart.value).forEach(([key, value]) =>
        items.push({
          id: key,
          ...value.data,
          count: value.count,
        }),
      );

      return items;
    });

    const totalCost = computed(() => {
      let cost = 0;

      asArray.value.forEach((item) => {
        if (!item.price) return;
        cost += item.price * item.count;
      });

      return cost;
    });

    function isAlreadyAddedToCart(id: string) {
      return !!cart.value[id];
    }

    function changeCount(id: string, count: number) {
      const item = cart.value[id];

      if (item) {
        item.count = count;
      }
    }

    function add(id: string, itemData: ICartItemData) {
      cart.value[id] = { count: 1, data: itemData };
    }

    function remove(id: string) {
      delete cart.value[id];
    }

    function clear() {
      cart.value = {};
    }

    return {
      cart,
      count,
      asArray,
      totalCost,
      isAlreadyAddedToCart,
      add,
      remove,
      changeCount,
      clear,
    };
  },
  {
    persist: true,
  },
);
