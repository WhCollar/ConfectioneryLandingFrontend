<script setup lang="ts">
import { MainCarousel } from 'widgets/main.carousel';
import { MenuSection } from 'widgets/menu.section';
import { ProductCategorySlice } from 'widgets/product.category.slice';
import { ProductSetPrices } from 'widgets/product.set.prices';
import { SectionWithIntroduction } from 'entities/structure';
import {
  H1Img1,
  H1Parallax_1_1,
  H1Parallax_2_1,
  H1Parallax_4,
  H1Parallax_3,
} from 'shared/ui/images';
import { Parallax } from 'shared/ui/parallax';
import { TypographyTitleLabel } from 'shared/ui/typography';
</script>

<template>
  <div class="mt-[-130px] z-[100]">
    <MainCarousel />
    <SectionWithIntroduction
      class="bg-center"
      :style="{ backgroundImage: `url('${H1Parallax_1_1}')` }"
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
        <div class="w-full flex justify-center">
          <img :src="H1Img1" alt="autograph" />
        </div>
      </template>
    </SectionWithIntroduction>
    <section class="w-full">
      <Parallax :imageUrl="H1Parallax_2_1">
        <div class="py-[156px] text-center">
          <TypographyTitleLabel class="text-[90px] leading-[100px]">
            If there's no chocolate in Heaven, <br />
            I'm not going.
          </TypographyTitleLabel>
        </div>
      </Parallax>
    </section>
    <SectionWithIntroduction
      :introduction-props="{
        titleLabel: ' we know that ',
        title: ' truffle is art ',
        text: 'Lorem ipsum dolor sit amet, ea has tollit nominavi, ei ius choro affert graeco. Vim nulla epicuri defini bas et, eam in facer errem nominavi. ',
      }"
    >
      <template #content>
        <ProductCategorySlice />
      </template>
    </SectionWithIntroduction>
    <SectionWithIntroduction
      :style="{ backgroundImage: `url('${H1Parallax_3}')` }"
      :introduction-props="{
        titleLabel: 'enjoy each bite ',
        title: 'OUR PRICES',
        text: 'Lorem ipsum dolor sit amet, ea has tollit nominavi, ei ius choro affert graeco. Vim nulla epicuri defini bas et, eam in facer errem nominavi.',
      }"
    >
      <template #content>
        <ProductSetPrices />
      </template>
    </SectionWithIntroduction>
    <section class="w-full">
      <div>
        <MenuSection
          :image-url="H1Parallax_4"
          title="A TRUE DELIGHT"
          :menu-items="[
            {
              title: 'COCONUT TRUFFLE',
              composition: 'Cream, cockies, biscuites, hazelnut',
              price: 9,
            },
            {
              title: 'ALMOND CUBE',
              composition: 'Almond, cockies, biscuites, cream',
              price: 12,
            },
            {
              title: 'WHISKEY CREAM CAKE',
              composition: 'Whiskey, cream, cockies, biscuites',
              price: 26,
            },
            {
              title: 'CRÈME BRÛLÉE',
              composition: 'Caramel, cream, cockies, almond',
              price: 11,
            },
          ]"
        />
      </div>
    </section>
    <SectionWithIntroduction
      :introduction-props="{
        titleLabel: 'come or leave a note',
        title: 'WE ARE SOCIAL',
        text: 'Lorem ipsum dolor sit amet, ea has tollit nominavi, ei ius choro affert graeco. Vim nulla epicuri defini bas et, eam in facer errem nominavi.',
      }"
    >
      <template #content> Request form </template>
    </SectionWithIntroduction>
  </div>
</template>
