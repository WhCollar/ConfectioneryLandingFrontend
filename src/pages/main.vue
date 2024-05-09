<script setup lang="ts">
import { MainCarousel } from 'widgets/main.carousel';
import { SectionWithIntroduction } from 'entities/structure';
import { H1Img1, H1Parallax_1_1, H1Parallax_2_1 } from 'shared/ui/images';
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
      <div
        class="bg-[50%_297px] bg-fixed bg-no-repeat"
        :style="{ backgroundImage: `url('${H1Parallax_2_1}')` }"
      >
        <div class="py-[156px] text-center">
          <TypographyTitleLabel class="text-[90px] leading-[100px]">
            If there's no chocolate in Heaven, <br />
            I'm not going.
          </TypographyTitleLabel>
        </div>
      </div>
    </section>
  </div>
</template>
