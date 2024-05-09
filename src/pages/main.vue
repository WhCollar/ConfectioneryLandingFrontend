<script setup lang="ts">
import { MainCarousel } from 'widgets/main.carousel';
import { Section } from 'entities/structure';
import { SecondaryButton } from 'shared/ui/buttons';
import { TypographyLink } from 'shared/ui/typography';
</script>

<template>
  <div class="mt-[-130px] z-[100]">
    <MainCarousel />
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
      <template #content>
        <TypographyLink>Home</TypographyLink>
        <div class="w-full flex-col justify-between">
          <SecondaryButton>Submit</SecondaryButton>
        </div>
      </template>
    </Section>
  </div>
</template>
