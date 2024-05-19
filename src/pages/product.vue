<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { CreateCommentForm } from 'features/create.comment.form';
import { useCommentByProductGet, useProductGet } from 'entities/queries';
import { SecondaryButton } from 'shared/ui/buttons';
import { ShotTitle } from 'shared/ui/images';
import { TypographyTitle, TypographyText } from 'shared/ui/typography';
import { Container } from 'shared/ui/utils';

const route = useRoute();
const id = computed(() => route.params.id.toString());
const { data: product } = useProductGet(id);
const { data: comments } = useCommentByProductGet(id);

const currentTab = ref(0);
</script>

<template>
  <section
    class="h-[300px] bg-fixed bg-[50%_0] bg-no-repeat gap-[20px]"
    :style="{ backgroundImage: `url('${ShotTitle}')` }"
  >
    <Container class="h-full flex flex-col justify-center px-[30px]">
      <TypographyTitle :level="2"> Магазин </TypographyTitle>
    </Container>
  </section>
  <section class="py-[70px]">
    <Container class="px-[15px]">
      <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
        <div class="w-full">
          <img
            :src="product?.images && product?.images[0]"
            :alt="product?.name"
          />
        </div>
        <div class="w-full">
          <div class="mb-[30px]">
            <TypographyTitle :level="3">
              {{ product?.name }}
            </TypographyTitle>
            <TypographyText class="text-[32px]">
              ₽{{ product?.price }}
            </TypographyText>
          </div>
          <div class="mb-[30px]">
            <TypographyText>
              {{ product?.description }}
            </TypographyText>
          </div>
          <div class="mb-[30px]">
            <SecondaryButton> Добавить в корзину </SecondaryButton>
          </div>
          <TypographyText>
            Килокалории: {{ product?.kilocalorie }}
          </TypographyText>
          <TypographyText> Вес: {{ product?.weight }} г. </TypographyText>
        </div>
      </div>
    </Container>
  </section>
  <section class="py-[70px]">
    <Container class="px-[15px]">
      <div class="md:flex mb-[30px]">
        <div
          class="cursor-pointer py-[10px] pr-[30px] border-gray border-b hover:text-primary hover:border-primary"
          :class="{ ['border-primary']: currentTab == 0 }"
          @click="currentTab = 0"
        >
          <TypographyTitle class="text-inherit" :level="6">
            Описание
          </TypographyTitle>
        </div>
        <div
          class="cursor-pointer py-[10px] pr-[30px] border-gray border-b hover:text-primary hover:border-primary"
          :class="{ ['border-primary']: currentTab == 1 }"
          @click="currentTab = 1"
        >
          <TypographyTitle class="text-inherit" :level="6">
            Дополнительная информация
          </TypographyTitle>
        </div>
        <div
          class="cursor-pointer py-[10px] pr-[30px] border-gray border-b hover:text-primary hover:border-primary"
          :class="{ ['border-primary']: currentTab == 2 }"
          @click="currentTab = 2"
        >
          <TypographyTitle class="text-inherit" :level="6">
            Комментарии
          </TypographyTitle>
        </div>
      </div>
      <div>
        <template v-if="currentTab == 0">
          <div>
            <TypographyText>
              {{ product?.description }}
            </TypographyText>
          </div>
        </template>
        <template v-else-if="currentTab == 1">
          <div>
            <table class="text-left">
              <tr>
                <th class="pr-8">
                  <TypographyText> Килокалории: </TypographyText>
                </th>
                <td>
                  <TypographyText>
                    {{ product?.kilocalorie }} ккал.
                  </TypographyText>
                </td>
              </tr>
              <tr>
                <th><TypographyText> Вес: </TypographyText></th>
                <td>
                  <TypographyText> {{ product?.weight }} г. </TypographyText>
                </td>
              </tr>
              <tr>
                <th>
                  <TypographyText> Размеры: </TypographyText>
                </th>
                <td>
                  <TypographyText>
                    {{ product?.width }} × {{ product?.height }} ×
                    {{ product?.depth }} см.
                  </TypographyText>
                </td>
              </tr>
            </table>
          </div>
        </template>
        <template v-else-if="currentTab == 2">
          <div class="mb-[30px]">
            <CreateCommentForm :product-id="id" />
          </div>
          <div>
            <template v-for="(comment, index) in comments" :key="index">
              <div class="border-b border-gray p-[15px]">
                <div class="flex items-center mb-[20px]">
                  <TypographyTitle class="mr-[20px]" :level="5">
                    {{ `${comment?.firstName} ${comment?.secondName} ` }}
                  </TypographyTitle>
                  <TypographyText>
                    {{ new Date(comment?.createdAt).toDateString() }}
                  </TypographyText>
                </div>
                <TypographyText>
                  {{ comment?.text }}
                </TypographyText>
              </div>
            </template>
          </div>
        </template>
      </div>
    </Container>
  </section>
</template>
