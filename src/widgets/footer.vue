<script setup lang="ts">
import { useContactInfoGet } from 'entities/queries';
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

const { data } = useContactInfoGet();
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
              Контакты
            </TypographyTitle>
            <template v-if="data?.address">
              <TypographyText
                type="link"
                class="text-gray"
                :href="data?.mapLink"
              >
                {{ data?.address }}
              </TypographyText>
            </template>
            <template v-if="data?.email">
              <TypographyText type="regular" class="text-gray mb-0">
                Email:
                <TypographyText
                  type="link"
                  class="text-gray"
                  :href="`mailto:${data?.email}`"
                >
                  {{ data?.email }}
                </TypographyText>
              </TypographyText>
            </template>
            <template v-if="data?.phone">
              <TypographyText type="regular" class="text-gray mb-0">
                Phone:
                <TypographyText
                  type="link"
                  class="text-gray"
                  :href="`tel:${data?.phone}`"
                >
                  {{ data?.phone }}
                </TypographyText>
              </TypographyText>
            </template>
          </div>
        </div>
        <div class="flex h-full w-full items-center justify-start">
          <div class="w-full">
            <div class="w-full text-center">
              <div class="w-full mb-[45px]">
                <template v-if="data?.titleLabel">
                  <TypographyTitleLabel class="text-[30px]">{{
                    data?.titleLabel
                  }}</TypographyTitleLabel>
                </template>
                <template v-if="data?.title">
                  <TypographyTitle :level="4" class="text-white">{{
                    data.title
                  }}</TypographyTitle>
                </template>
                <template v-if="data?.text">
                  <Divider />
                  <TypographyText type="regular" class="text-gray">
                    {{ data?.text }}
                  </TypographyText>
                </template>
              </div>
            </div>
            <SocialLinksGroup>
              <template v-if="data?.facebookLink">
                <Facebook class="mr-[24px]" :href="data?.facebookLink" />
              </template>
              <template v-if="data?.twitterLink">
                <Twitter class="mr-[24px]" :href="data?.twitterLink" />
              </template>
              <template v-if="data?.instagramLink">
                <Instagram :href="data?.instagramLink" />
              </template>
            </SocialLinksGroup>
            <SocialLinksGroup>
              <template v-if="data?.linkedInLink">
                <Linkedin class="mr-[24px]" :href="data?.linkedInLink" />
              </template>
              <template v-if="data?.pinterestLink">
                <Pinterest :href="data?.pinterestLink" />
              </template>
            </SocialLinksGroup>
          </div>
        </div>
        <div
          class="flex h-full w-full items-center justify-center lg:justify-end"
        >
          <a class="cursor-pointer" :href="data?.mapLink">
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
