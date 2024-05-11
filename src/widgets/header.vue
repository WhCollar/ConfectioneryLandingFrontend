<script setup lang="ts">
import { useRouter } from 'vue-router';
import { HeaderMenu, MenuItem } from 'features/header.menu';
import { RouterEnum } from 'shared/model/router';
import { TypographyTitle } from 'shared/ui/typography';
import { Container } from 'shared/ui/utils';

const router = useRouter();

const headerConfig: MenuItem[] = [
  {
    text: 'Главная',
    routeName: RouterEnum.Main,
  },
  {
    text: 'Портфолио',
    routeName: RouterEnum.Portfolio,
  },
  {
    text: 'Каталог',
    routeName: RouterEnum.Catalog,
  },
  {
    text: 'Связяться с нами',
    routeName: RouterEnum.ContactUs,
  },
];
</script>

<template>
  <header class="relative inline-block align-middle w-full z-[110]">
    <div class="hidden lg:block w-full px-[90px]">
      <div class="relative h-[130px] align-baseline">
        <div class="float-left h-full flex items-center">
          <a
            class="relative inline-block align-top"
            @click="router.push({ name: RouterEnum.Main })"
          >
            <TypographyTitle> LOGO </TypographyTitle>
          </a>
        </div>
        <div class="float-right h-full align-baseline">
          <HeaderMenu :items="headerConfig" />
        </div>
      </div>
    </div>
    <Container class="lg:hidden max-md:px-10">
      <div class="relative h-[130px] align-baseline">
        <div class="float-left h-full flex items-center">
          <a class="relative inline-block align-top">
            <TypographyTitle> LOGO </TypographyTitle>
          </a>
        </div>
        <div class="float-right h-full align-baseline">
          <HeaderMenu :items="headerConfig" />
        </div>
      </div>
    </Container>
  </header>
</template>
