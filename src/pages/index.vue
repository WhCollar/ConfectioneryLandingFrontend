<script setup lang="ts">
import Footer from 'widgets/footer.vue';
import Header from 'widgets/header.vue';
import { Splashscreen } from 'shared/ui/splashscreen';
</script>

<template>
  <Splashscreen />
  <Header />
  <RouterView />
  <Footer />
</template>
