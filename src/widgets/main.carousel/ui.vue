<script setup lang="ts">
import { useRouter } from 'vue-router';
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';
import {
  CarouselItemResponse,
  useMainPageCarouselItems,
} from 'entities/queries';
import { Introduction } from 'entities/structure';
import { RouterEnum } from '@/shared/model/router';
import { GhostButton, PrimaryButton } from 'shared/ui/buttons';
import { H1Slide1, H1Slide2, H1Slide3, H1Slide4 } from 'shared/ui/images';

const router = useRouter();

const { data } = useMainPageCarouselItems();

const sliderItems: CarouselItemResponse[] = [
  {
    image: H1Slide1,
    secondTitle: 'Sweet bites for you',
    title: 'tasteful',
    description:
      'It’s always good time for sweets! Made with care and prepared with love, our sweets are all you might need to make every day special. Find your favorite now.',
    productId: '0',
  },
  {
    image: H1Slide2,
    secondTitle: '',
    title: '',
    description: '',
    productId: '1',
  },
  {
    image: H1Slide3,
    secondTitle: '',
    title: '',
    description: '',
    productId: '2',
  },
  {
    image: H1Slide4,
    secondTitle: '',
    title: '',
    description: '',
    productId: '4',
  },
];
</script>

<template>
  <Carousel class="pb-[50px]" wrap-around>
    <Slide v-for="(slide, index) in data" :key="index">
      <div
        class="h-[100vh] w-[100vw] bg-left-top bg-no-repeat bg-cover"
        :style="{ backgroundImage: `url('${slide.image}')` }"
      >
        <div class="h-full grid grid-cols-1 lg:grid-cols-2">
          <div class="hidden lg:block"></div>
          <div class="flex justify-center lg:justify-start items-center">
            <div class="w-[500px] lg:w-[780px]">
              <Introduction
                :title-label="slide.secondTitle"
                :title="slide.title"
                :text="slide.description"
                :description-class="'hidden lg:block'"
              />
              <div class="h-[20px]"></div>
              <div class="flex max-lg:flex-col justify-center items-center">
                <PrimaryButton
                  class="max-lg:mb-[20px] lg:mr-[20px]"
                  @click="router.push({ name: RouterEnum.Catalog })"
                >
                  Каталог
                </PrimaryButton>
                <GhostButton
                  @click="
                    router.push({
                      name: RouterEnum.Catalog,
                      params: { id: slide.productId },
                    })
                  "
                >
                  Заказать
                </GhostButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<style lang="scss">
.carousel__next {
  @apply mr-[32px];
}

.carousel__prev {
  @apply ml-[32px];
}

.carousel__icon {
  @apply text-primary;
  @apply transition-transform;
  @apply duration-[.2s];
  @apply hover:text-primary;
  @apply hover:scale-[2];
}

.carousel__pagination {
  @apply mt-[-70px];
}

.carousel__pagination-item {
  @apply mx-[12px];
}

.carousel__pagination-button::after {
  @apply w-[12px];
  @apply h-[12px];
  @apply rotate-45;
  @apply border;
  @apply border-primary;
  @apply bg-transparent;
  @apply transition-colors;
  @apply duration-[.2s];
  @apply hover:bg-primary;
}

.carousel__pagination-button--active::after {
  @apply bg-primary;
}
</style>
