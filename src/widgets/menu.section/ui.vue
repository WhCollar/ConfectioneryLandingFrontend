<script setup lang="ts">
import { Divider } from 'shared/ui/divider';
import { Parallax } from 'shared/ui/parallax';
import { TextDelimiterDots } from 'shared/ui/text.delimiter.dots';
import { TypographyText, TypographyTitle } from 'shared/ui/typography';
import { Container } from 'shared/ui/utils';

defineProps<{
  imageUrl: string;
  title: string;
  menuItems: { title: string; composition: string; price: number }[];
}>();
</script>

<template>
  <Parallax class="bg-[50%_0px]" :imageUrl="imageUrl">
    <Container class="py-[128px]">
      <div class="w-full md:w-[75%] lg:w-[66%] xl:w-[41%] p-[15px]">
        <TypographyTitle :level="3">{{ title }}</TypographyTitle>
        <Divider class="mt-[30px]" divider-start marker-start />
        <div class="my-[30px]">
          <template v-for="(menuItem, index) in menuItems" :key="index">
            <div class="mb-[28px]">
              <TypographyTitle :level="5">{{ menuItem.title }}</TypographyTitle>
              <div class="relative">
                <div class="table-cell w-[1%] whitespace-nowrap">
                  <TypographyText class="text-[24px] leading-[1.4em]">
                    {{ menuItem.composition }}
                  </TypographyText>
                </div>
                <TextDelimiterDots class="w-[98%]" />
                <div class="table-cell w-[1%] whitespace-nowrap">
                  ₽{{ menuItem.price }}
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </Container>
  </Parallax>
</template>
