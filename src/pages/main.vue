<script setup lang="ts">
import { Section } from 'entities/structure';
</script>

<template>
  <Section
    :introduction-props="{
      titleLabel: 'we know that',
      title: 'Main page',
      text:
        'Lorem ipsum dolor sit amet, ea has tollit nominavi, ei ius choro\n' +
        '          affert graeco. Vim nulla epicuri defini bas et, eam in facer errem\n' +
        '          nominavi.',
    }"
  >
    <template #content> some content </template>
  </Section>
</template>
