<script setup lang="ts">
import { computed } from 'vue';
import { TypographyText, TypographyTitle } from 'shared/ui/typography';
import { MasonryGridItem } from './model';

const props = defineProps<{
  items: MasonryGridItem[];
  loading?: boolean;
}>();

const itemsComputed = computed(() => {
  if (!props.items) return [];
  let chunks: MasonryGridItem[][] = [[], [], [], []];

  let chunkIndex = 0;
  for (let item of props.items) {
    if (chunkIndex > 3) chunkIndex = 0;
    chunks[chunkIndex].push(item);
    chunkIndex++;
  }

  return chunks;
});
</script>

<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[5px]"
    @click="() => console.log(itemsComputed)"
  >
    <template v-if="loading">
      <div class="grid gap-8" v-for="i in 4" :key="i">
        <div class="animate-pulse" v-for="j in 2" :key="j">
          <div
            class="max-w-full mb-2 rounded-3xl bg-gray-200"
            :class="(j + i) % 2 == 0 ? 'h-64' : 'h-32'"
          ></div>
          <div class="h-5 max-w-full rounded-3xl bg-gray-200"></div>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="grid gap-[5px]" v-for="(chunk, i) in itemsComputed" :key="i">
        <div v-for="(item, j) in chunk" :key="j">
          <a class="relative cursor-pointer">
            <div class="h-full w-full overflow-hidden">
              <img
                class="w-full h-full scale-[1.06] transition-transform duration-[.8s] ease-out target:scale-[1]"
                :src="item.imgUrl"
                :alt="item.title"
              />
            </div>
            <div
              class="w-full h-full flex flex-col justify-end px-[50px] pb-[26px] text-sm text-zinc-700 absolute top-0 opacity-0 transition-opacity duration-[.2s] hover:opacity-100"
            >
              <div class="w-full p-[23px] bg-white text-center">
                <div
                  class="border border-primary pt-[35px] pb-[30px] px-[10px]"
                >
                  <TypographyTitle :level="5">
                    {{ item.title }}
                  </TypographyTitle>
                  <TypographyText>
                    {{ item.description }}
                  </TypographyText>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </template>
  </div>
</template>
