<script setup lang="ts">
import { CreateOrderForm } from 'features/create.order.form';
import { ShotTitle } from 'shared/ui/images';
import { TypographyTitle } from 'shared/ui/typography';
import { Container } from 'shared/ui/utils';
</script>

<template>
  <section
    class="h-[300px] bg-fixed bg-[50%_0] bg-no-repeat gap-[20px]"
    :style="{ backgroundImage: `url('${ShotTitle}')` }"
  >
    <Container class="h-full flex flex-col justify-center px-[30px]">
      <TypographyTitle :level="2"> Оформление заказа </TypographyTitle>
    </Container>
  </section>

  <section class="py-[135px]">
    <Container class="px-[15px]">
      <CreateOrderForm />
    </Container>
  </section>
</template>
