<script setup lang="ts">
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';
import { Introduction } from 'entities/structure';
import { GhostButton, PrimaryButton } from 'shared/ui/buttons';
import { H1Slide1, H1Slide2, H1Slide3, H1Slide4 } from 'shared/ui/images';
import { CarouselProduct } from './model';

const sliderItems: CarouselProduct[] = [
  {
    imgSrc: H1Slide1,
    titleLabel: 'Sweet bites for you',
    title: 'tasteful',
    text: 'It’s always good time for sweets! Made with care and prepared with love, our sweets are all you might need to make every day special. Find your favorite now.',
    productId: 0,
  },
  {
    imgSrc: H1Slide2,
    titleLabel: '',
    title: '',
    text: '',
    productId: 1,
  },
  {
    imgSrc: H1Slide3,
    titleLabel: '',
    title: '',
    text: '',
    productId: 2,
  },
  {
    imgSrc: H1Slide4,
    titleLabel: '',
    title: '',
    text: '',
    productId: 4,
  },
];
</script>

<template>
  <Carousel class="pb-[50px]" wrap-around>
    <Slide v-for="(slide, index) in sliderItems" :key="index">
      <div
        class="h-[100vh] w-[100vw] bg-left-top bg-no-repeat bg-cover"
        :style="{ backgroundImage: `url('${slide.imgSrc}')` }"
      >
        <div class="h-full grid grid-cols-1 lg:grid-cols-2">
          <div class="hidden lg:block"></div>
          <div class="flex justify-center lg:justify-start items-center">
            <div class="w-[500px] lg:w-[780px]">
              <Introduction
                :title-label="slide.titleLabel"
                :title="slide.title"
                :text="slide.text"
                :text-class="'hidden lg:block'"
              />
              <div class="h-[20px]"></div>
              <div class="flex max-lg:flex-col justify-center items-center">
                <PrimaryButton class="max-lg:mb-[20px] lg:mr-[20px]">
                  Discover
                </PrimaryButton>
                <GhostButton>Shop now</GhostButton>
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
