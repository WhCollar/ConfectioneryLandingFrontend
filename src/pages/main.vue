<script setup lang="ts">
import { Carousel, Slide } from 'vue3-carousel';
import { Introduction } from '@/entities/structure';
import { Section } from 'entities/structure';
import { GhostButton, PrimaryButton, SecondaryButton } from 'shared/ui/buttons';
import { H1Slide1, H1Slide2, H1Slide3, H1Slide4 } from 'shared/ui/images';
import { TypographyLink } from 'shared/ui/typography';

const sliderItems = [
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
  <div class="mt-[-130px] z-[100]">
    <div class="w-[100wh] h-[100hv]">
      <Carousel>
        <Slide v-for="(slide, index) in sliderItems" :index="index">
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
                  />
                  <div class="h-[20px]"></div>
                  <div class="flex justify-center items-center">
                    <PrimaryButton class="mr-[20px]">Discover</PrimaryButton>
                    <GhostButton>Shop now</GhostButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </Carousel>
    </div>
    <Section
      :introduction-props="{
        titleLabel: 'we know that',
        title: 'Main page',
        text:
          'Lorem ipsum dolor sit amet, ea has tollit nominavi, ei ius choro\n' +
          '          affert graeco. Vim nulla epicuri defini bas et, eam in facer errem\n' +
          '          nominavi.',
      }"
    >
      <template #content>
        <TypographyLink>Home</TypographyLink>
        <div class="w-full flex-col justify-between">
          <SecondaryButton>Submit</SecondaryButton>
        </div>
      </template>
    </Section>
  </div>
</template>
