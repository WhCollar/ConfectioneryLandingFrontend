<script setup lang="ts">
import { Divider } from 'shared/ui/divider';
import { ShotTitle } from 'shared/ui/images';
import { TextDelimiterDots } from 'shared/ui/text.delimiter.dots';
import { TypographyTitle, TypographyText } from 'shared/ui/typography';
import { Container } from 'shared/ui/utils';

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
            <TypographyTitle :level="3"> WE ARE OPEN </TypographyTitle>
            <Divider divider-start marker-start />
            <TypographyText>
              Lorem ipsum dolor sit amet, ne nulla quidam causae qui, dicam
              mandamus est ad. Qui officiis gloriatur id. Vivendo verterem
              definitionem id nam, altera nostrud quaestio has ut, ea facilis
              ocurreret per. Euripidis pertinacia ullamcorper ne ius, has tale.
            </TypographyText>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-2 text-primary text-[26px]">
            <div class="max-lg:mb-[15px]">
              <span class="flex items-center">
                <span class="icon_house mr-[5px]"></span>
                <TypographyText type="link">
                  Friedrichstrase 123, 10117 Berlin
                </TypographyText>
              </span>
            </div>
            <div class="max-lg:mb-[15px]">
              <span class="flex items-center">
                <span class="icon_mail mr-[5px]"></span>
                <TypographyText type="link">
                  dolcino@qodeinteractive.com
                </TypographyText>
              </span>
            </div>
            <div class="max-lg:mb-[15px]">
              <span class="flex items-center">
                <span class="icon_phone mr-[5px]"></span>
                <TypographyText type="link"> 99411 - 7253931 </TypographyText>
              </span>
            </div>
            <div class="max-lg:mb-[15px]">
              <span class="flex items-center">
                <span class="icon_laptop mr-[5px]"></span>
                <TypographyText type="link">
                  dolcino@qodeinteractive.com
                </TypographyText>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>
