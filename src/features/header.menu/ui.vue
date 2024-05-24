<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { HeaderCart } from 'entities/cart';
import { useContactInfoGet } from 'entities/queries';
import { Introduction } from 'entities/structure';
import { Drawer } from 'shared/ui/drawer';
import {
  SearchIcon,
  MenuIcon,
  Linkedin,
  Instagram,
  SocialLinksGroup,
  Facebook,
  Pinterest,
  Twitter,
} from 'shared/ui/icons';
import { TypographyLink } from 'shared/ui/typography';
import { MenuItem } from './model';

defineProps<{
  items?: MenuItem[];
}>();

const router = useRouter();
const route = useRoute();
const { data } = useContactInfoGet();

const desktopDrawer = ref(false);
const mobileDrawer = ref(false);

watch(
  () => route.name,
  () => {
    desktopDrawer.value = false;
    mobileDrawer.value = false;
  },
);
</script>

<template>
  <div class="relative h-full inline-block align-middle">
    <div class="hidden lg:inline-block h-full align-middle">
      <nav class="relative h-full inline-block align-middle">
        <ul class="relative h-full inline-block align-middle text-left">
          <template v-for="(item, index) of items" :key="index">
            <li
              class="relative h-full flex items-center align-baseline float-left"
            >
              <TypographyLink
                :active="route.name === item.routeName"
                @click="router.push({ name: item.routeName })"
              >
                {{ item.text }}
              </TypographyLink>
            </li>
          </template>
        </ul>
      </nav>
      <a
        v-show="false"
        class="relative align-middle inline-block text-[15px] leading-[1] mx-[20px] cursor-pointer"
      >
        <SearchIcon />
      </a>
      <div
        class="relative align-middle inline-block text-[15px] leading-[1] mr-[32px] ml-[12px] cursor-pointer"
      >
        <HeaderCart />
      </div>
      <a
        class="relative align-middle inline-block text-[15px] leading-[1] ml-[7px] cursor-pointer"
        @click="desktopDrawer = true"
      >
        <MenuIcon />
      </a>
      <Drawer v-model:show="desktopDrawer">
        <template #content>
          <div class="h-full flex items-center justify-center">
            <div>
              <Introduction
                title-label="Шедевр"
                title="Вметсе"
                text="Следите за нашими новинками и акциями! Подписывайтесь на нас в соцсетях и наслаждайтесь сладкими моментами вместе с нами!"
              />
              <div class="h-[20px]"></div>
              <SocialLinksGroup>
                <Facebook
                  v-if="data?.facebookLink"
                  class="mr-[24px]"
                  :href="data?.facebookLink"
                />
                <Twitter
                  v-if="data?.twitterLink"
                  class="mr-[24px]"
                  :href="data?.twitterLink"
                />
                <Instagram
                  v-if="data?.instagramLink"
                  class="mr-[24px]"
                  :href="data?.instagramLink"
                />
                <Linkedin
                  v-if="data?.linkedInLink"
                  class="mr-[24px]"
                  :href="data?.linkedInLink"
                />
                <Pinterest
                  v-if="data?.pinterestLink"
                  :href="data?.pinterestLink"
                />
              </SocialLinksGroup>
            </div>
          </div>
        </template>
      </Drawer>
    </div>
    <div class="lg:hidden h-full flex items-center align-middle">
      <div
        class="relative align-middle inline-block text-[15px] leading-[1] mr-[32px] ml-[12px] cursor-pointer"
      >
        <HeaderCart />
      </div>
      <a
        class="relative align-middle inline-block text-[15px] leading-[1] cursor-pointer"
        @click="mobileDrawer = true"
      >
        <MenuIcon />
      </a>
      <Drawer v-model:show="mobileDrawer">
        <template #content>
          <nav class="text-center">
            <ul class="">
              <template v-for="(item, index) of items" :key="index">
                <li class="relative h-[42px] flex items-center">
                  <TypographyLink
                    :active="route.name === item.routeName"
                    @click="router.push({ name: item.routeName })"
                  >
                    {{ item.text }}
                  </TypographyLink>
                </li>
              </template>
            </ul>
          </nav>
        </template>
      </Drawer>
    </div>
  </div>
</template>
