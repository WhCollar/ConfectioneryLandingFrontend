<script setup lang="ts">
import { useContactInfoGet } from 'entities/queries';
import { Divider } from 'shared/ui/divider';
import { ShotTitle } from 'shared/ui/images';
import { TextDelimiterDots } from 'shared/ui/text.delimiter.dots';
import { TypographyTitle, TypographyText } from 'shared/ui/typography';
import { Container } from 'shared/ui/utils';

const { data } = useContactInfoGet();

const workSchedule: { weekDay: string; timespan: string }[] = [
  {
    weekDay: 'Понедельник',
    timespan: '09:00 - 21:00',
  },
  {
    weekDay: 'Вторник',
    timespan: '09:00 - 21:00',
  },
  {
    weekDay: 'Среда',
    timespan: '09:00 - 21:00',
  },
  {
    weekDay: 'Четверг',
    timespan: '09:00 - 21:00',
  },
  {
    weekDay: 'Пятница',
    timespan: '09:00 - 21:00',
  },
  {
    weekDay: 'Суббота',
    timespan: '10:00 - 21:00',
  },
  {
    weekDay: 'Воскресене',
    timespan: '12:00 - 19:00',
  },
];
</script>

<template>
  <section
    class="h-[300px] bg-fixed bg-[50%_0] bg-no-repeat gap-[20px]"
    :style="{ backgroundImage: `url('${ShotTitle}')` }"
  >
    <Container class="h-full flex flex-col justify-center">
      <TypographyTitle :level="2"> Связаться с нами </TypographyTitle>
    </Container>
  </section>
  <section class="py-[70px]">
    <Container>
      <div class="flex max-lg:flex-col">
        <div class="w-full lg:w-[33%] px-[15px] max-lg:mb-[30px]">
          <div class="p-[15px] border border-primary">
            <div class="py-[65px] px-[45px] border border-primary">
              <template v-for="(item, index) in workSchedule" :key="index">
                <div>
                  <div class="table-cell w-[1%] whitespace-nowrap">
                    <TypographyText class="text-[24px] leading-[1.4em]">
                      {{ item.weekDay }}
                    </TypographyText>
                  </div>
                  <TextDelimiterDots class="w-[98%]" />
                  <div class="table-cell w-[1%] whitespace-nowrap">
                    <TypographyText class="text-[24px] leading-[1.4em]">
                      {{ item.timespan }}
                    </TypographyText>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-[67%] px-[15px]">
          <div class="mb-[30px]">
            <TypographyTitle :level="3"> Мы открыты </TypographyTitle>
            <Divider divider-start marker-start />
            <TypographyText>
              {{ data?.contactPageText }}
            </TypographyText>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-2 text-primary text-[26px]">
            <div class="max-lg:mb-[15px]">
              <span class="flex items-center">
                <span class="icon_house mr-[5px]"></span>
                <TypographyText type="link">
                  {{ data?.address }}
                </TypographyText>
              </span>
            </div>
            <div class="max-lg:mb-[15px]">
              <span class="flex items-center">
                <span class="icon_mail mr-[5px]"></span>
                <TypographyText type="link" :href="`mailto:${data?.email}`">
                  {{ data?.email }}
                </TypographyText>
              </span>
            </div>
            <div class="max-lg:mb-[15px]">
              <span class="flex items-center">
                <span class="icon_phone mr-[5px]"></span>
                <TypographyText type="link" :href="`tel:${data?.phone}`">
                  {{ data?.phone }}
                </TypographyText>
              </span>
            </div>
            <div class="max-lg:mb-[15px]">
              <span class="flex items-center">
                <span class="icon_laptop mr-[5px]"></span>
                <TypographyText type="link" :href="`mailto:${data?.email}`">
                  {{ data?.email }}
                </TypographyText>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>
