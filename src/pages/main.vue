<script setup lang="ts">
import { Section } from 'entities/structure';
import { GhostButton, PrimaryButton, SecondaryButton } from 'shared/ui/buttons';
import { TypographyLink } from 'shared/ui/typography';
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
    <template #content>
      <TypographyLink>Home</TypographyLink>
      <div class="w-full flex justify-between">
        <GhostButton>Shop now</GhostButton>
        <PrimaryButton>Discover</PrimaryButton>
        <SecondaryButton>Submit</SecondaryButton>
      </div>
    </template>
  </Section>
</template>
