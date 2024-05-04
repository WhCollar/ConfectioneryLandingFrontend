<script setup lang="ts">
import { HeaderMenu } from 'features/header.menu';

const headerConfig = [
  {
    text: 'Главная',
    routerName: '',
  },
  {
    text: '',
    routerName: '',
  },
  {
    text: '',
    routerName: '',
  },
  {
    text: '',
    routerName: '',
  },
];
</script>

<template>
  <header>
    header
    <HeaderMenu />
  </header>
</template>
