<script setup lang="ts">
import { Divider } from 'shared/ui/divider';
import {
  Facebook,
  Instagram,
  Linkedin,
  Pinterest,
  SocialLinksGroup,
  Twitter,
} from 'shared/ui/icons';
import { ShokuninWorldMap } from 'shared/ui/images';
import {
  TypographyText,
  TypographyTitle,
  TypographyTitleLabel,
} from 'shared/ui/typography';
import { Container } from 'shared/ui/utils';

const address = 'Heinrichstrasse 267c / 3. Stock 8005 Zürich';
const addressHref = '';
const email = 'dolcino@qodeinteractive.com';
const emailHref = '';
const phone = '+88(0) 101 0000 000';
const phoneHref = '';

const titleLabel = ' eat what you love ';
const title = ' Dolcino pastries ';
const text =
  ' 1926. - Year of beggining. There are many variations of passa ges of Lorem Ipsum avai lable, but the majority suffered alter. ';

const mapPointLink = '';
</script>

<template>
  <footer class="inline-block w-full bg-black">
    <div class="w-full pt-[75px] pb-[60px] px-[10.3%]">
      <div class="grid grid-row-3 lg:grid-cols-3 gap-40">
        <div
          class="flex h-full w-full items-center justify-center text-center lg:text-start lg:justify-start"
        >
          <div>
            <TypographyTitle :level="5" class="text-white mb-[21px]">
              Contact
            </TypographyTitle>
            <template v-if="address">
              <TypographyText type="link" class="text-gray" :href="addressHref">
                {{ address }}
              </TypographyText>
            </template>
            <template v-if="email">
              <TypographyText type="regular" class="text-gray mb-0">
                Email:
                <TypographyText type="link" class="text-gray" :href="emailHref">
                  {{ email }}
                </TypographyText>
              </TypographyText>
            </template>
            <template v-if="phone">
              <TypographyText type="regular" class="text-gray mb-0">
                Phone:
                <TypographyText type="link" class="text-gray" :href="phoneHref">
                  {{ phone }}
                </TypographyText>
              </TypographyText>
            </template>
          </div>
        </div>
        <div class="flex h-full w-full items-center justify-start">
          <div class="w-full">
            <div class="w-full text-center">
              <div class="w-full mb-[45px]">
                <template v-if="titleLabel">
                  <TypographyTitleLabel class="text-[30px]">{{
                    titleLabel
                  }}</TypographyTitleLabel>
                </template>
                <template v-if="title">
                  <TypographyTitle :level="4" class="text-white">{{
                    title
                  }}</TypographyTitle>
                </template>
                <template v-if="text">
                  <Divider />
                  <TypographyText type="regular" class="text-gray">
                    {{ text }}
                  </TypographyText>
                </template>
              </div>
            </div>
            <SocialLinksGroup>
              <Facebook class="mr-[24px]" />
              <Twitter class="mr-[24px]" />
              <Instagram class="mr-[24px]" />
              <Linkedin class="mr-[24px]" />
              <Pinterest />
            </SocialLinksGroup>
          </div>
        </div>
        <div
          class="flex h-full w-full items-center justify-center lg:justify-end"
        >
          <a class="cursor-pointer" :href="mapPointLink">
            <img :src="ShokuninWorldMap" alt="Map" />
          </a>
        </div>
      </div>
    </div>
    <div class="h-[60px] border border-t-primary">
      <Container class="h-full">
        <div class="h-full w-full flex items-center justify-center">
          <TypographyText type="regular" class="text-gray text-[17px]">
            © 2024 Qode Interactive, All Rights Reserved
          </TypographyText>
        </div>
      </Container>
    </div>
  </footer>
</template>
