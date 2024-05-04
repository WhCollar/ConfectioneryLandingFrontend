<script setup lang="ts">
import Footer from 'widgets/footer.vue';
import Header from 'widgets/header.vue';
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<style>
body {
  font-family: 'Josefin Sans', sans-serif;
}
</style>
