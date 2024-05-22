<script setup lang="ts">
import { CategoryProductSliceSection } from 'widgets/category.product.slice.section';
import { MainCarousel } from 'widgets/main.carousel';
import { MenuSection } from 'widgets/menu.section';
import { ProductSetPrices } from 'widgets/product.set.prices';
import { RequestFrom } from 'features/request.form';
import { SectionWithIntroduction } from 'entities/structure';
import {
  H1Img1,
  H1Parallax_1_1,
  H1Parallax_2_1,
  H1Parallax_4,
  H1Parallax_3,
  H1Parallax_6_1,
  Port1_1,
  Port1_2,
  Port1_3,
  Port1_4,
  Port1_5,
  Port1_6,
  Port1_7,
} from 'shared/ui/images';
import { MasonryGrid } from 'shared/ui/masonry.grid';
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
        titleLabel: 'мы знаем это',
        title: 'ДЕЛО В ЛЮДЯХ',
        text: 'Спасибо, что выбрали нашу кондитерскую; наслаждайтесь нашими сладостями, приготовленными с любовью и вниманием к деталям, делитесь радостью с близкими и создавайте незабываемые моменты вместе с нашими изысканными лакомствами!',
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
            Если на Небесах нет шоколада, <br />
            Я не иду.
          </TypographyTitleLabel>
        </div>
      </Parallax>
    </section>
    <CategoryProductSliceSection />
    <section class="w-full">
      <div>
        <MenuSection
          :image-url="H1Parallax_4"
          title="НАСТОЯЩЕЕ НАСЛАЖДЕНИЕ"
          :menu-items="[
            {
              title: 'КОКОСОВЫЙ ТРЮФЕЛЬ',
              composition:
                'Шоколад, Сливки, Кокос, Масло, Пудра, Ваниль, Кокосовое',
              price: 300,
            },
            {
              title: 'МИНДАЛЬНЫЙ КУБИК',
              composition:
                'Миндаль, Сахар, Яйца, Масло, Шоколад, Сливки, Ваниль',
              price: 2100,
            },
            {
              title: 'ТОРТ С ВИСКИ-КРЕМОМ',
              composition:
                'Мука, Яйца, Ваниль, Сливки, Масло, Виски, Глазурь, Орехи',
              price: 1550,
            },
            {
              title: 'КРЕМ-БРЮЛЕ',
              composition: 'Сливки, Молоко, Сахар, Желтки, Ваниль, Карамель',
              price: 1850,
            },
          ]"
        />
      </div>
    </section>
    <SectionWithIntroduction
      :style="{ backgroundImage: `url('${H1Parallax_3}')` }"
      :introduction-props="{
        titleLabel: 'наслаждайся каждым кусочком',
        title: 'НАШИ ЦЕНЫ',
        text: 'Наши наборы созданы с любовью и вниманием к деталям, чтобы подарить вам и вашим близким радость и наслаждение. В каждом наборе вы найдете разнообразие изысканных лакомств, приготовленных из лучших ингредиентов.',
      }"
    >
      <template #content>
        <ProductSetPrices />
      </template>
    </SectionWithIntroduction>
    <MasonryGrid
      :items="[
        {
          id: 0,
          imgUrl: Port1_1,
          title: 'Cream tart',
          description: 'Wedding Cakes',
        },
        {
          id: 1,
          imgUrl: Port1_2,
          title: 'Fruit cakes',
          description: 'Wedding Cakes',
        },
        {
          id: 3,
          imgUrl: Port1_4,
          title: 'Berry Pie',
          description: 'Wedding Cakes',
        },
        {
          id: 2,
          imgUrl: Port1_3,
          title: 'Pear Cake',
          description: 'Wedding Cakes',
        },
        {
          id: 4,
          imgUrl: Port1_5,
          title: 'Tiramisu',
          description: 'Wedding Cakes',
        },
        {
          id: 5,
          imgUrl: Port1_6,
          title: 'Peach Pie',
          description: 'Wedding Cakes',
        },
        {
          id: 6,
          imgUrl: Port1_7,
          title: 'Choco Roll',
          description: 'Wedding Cakes',
        },
      ]"
    />
    <SectionWithIntroduction
      :style="{ backgroundImage: `url('${H1Parallax_6_1}')` }"
      :introduction-props="{
        titleLabel: 'приди или оставь записку',
        title: 'МЫ РАДЫ ОБЩАТЬСЯ',
        text: 'Мы всегда рады услышать ваше мнение и предложения! Пожалуйста, заполните форму ниже, и мы свяжемся с вами в ближайшее время.',
      }"
    >
      <template #content>
        <div class="w-full px-[30px]">
          <RequestFrom />
        </div>
      </template>
    </SectionWithIntroduction>
  </div>
</template>
