<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/yup';
import { useForm } from 'vee-validate';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { object, string } from 'yup';
import { useCartStore } from 'entities/cart';
import { useOrderCreate, useReceiptTypes } from 'entities/queries';
import { RouterEnum } from 'shared/model/router';
import { SecondaryButton } from 'shared/ui/buttons';
import { PhoneInput, TextInput, TextAreaInput, Select } from 'shared/ui/inputs';
import { TypographyTitle } from 'shared/ui/typography';

const inputWrapperClasses = 'mb-[8px]';

const router = useRouter();
const cartStore = useCartStore();
const { data: receiptTypes } = useReceiptTypes();
const receiptTypeOptions = computed(() =>
  receiptTypes.value?.map((type) => ({ value: type.id, label: type.name })),
);

const { mutate } = useOrderCreate();

const { handleSubmit, resetForm } = useForm({
  validationSchema: toTypedSchema(
    object({
      firstName: string().required('Обязательное поле'),
      secondName: string().required('Обязательное поле'),
      receiptTypeId: string().required('Не указан тип получения заказа'),
      address: string(),
      phone: string()
        .phone('Неверно введён номер телефона')
        .required('Обязательное поле'),
      email: string().email('Неверно введён адрес электронной почты'),
      notes: string(),
    }),
  ),
});

const onSubmit = handleSubmit((values) => {
  if (cartStore.asArray.length < 1) return;
  const request = {
    ...values,
    productIds: cartStore.asArray.map((item) => item.id),
  };
  mutate({ command: request });
  resetForm();
  cartStore.clear();
  router.push({ name: RouterEnum.Main });
});
</script>

<template>
  <Form @submit="onSubmit">
    <div class="mb-8 grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
      <div>
        <div class="mb-8 grid grid-cols-1 lg:grid-cols-2 gap-[8px]">
          <TextInput
            :input-wrapper-class="inputWrapperClasses"
            name="firstName"
            placeholder="Имя"
          />
          <TextInput
            :input-wrapper-class="inputWrapperClasses"
            name="secondName"
            placeholder="Фамилия"
          />
        </div>
        <div class="mb-8">
          <Select
            :input-wrapper-class="inputWrapperClasses"
            :options="receiptTypeOptions"
            name="receiptTypeId"
            placeholder="Выберите тип получения заказа"
          />
        </div>
        <div class="mb-8">
          <TextInput
            :input-wrapper-class="inputWrapperClasses"
            name="address"
            placeholder="Адрес доставки"
          />
        </div>
        <div class="mb-8">
          <PhoneInput
            :input-wrapper-class="inputWrapperClasses"
            name="phone"
            placeholder="Телефон"
          />
        </div>
        <div class="mb-8">
          <PhoneInput
            :input-wrapper-class="inputWrapperClasses"
            name="email"
            placeholder="Электронная почта"
          />
        </div>
      </div>
      <div>
        <div class="mb-8">
          <TextAreaInput
            :input-wrapper-class="inputWrapperClasses"
            name="notes"
            placeholder="Примечание к заказу"
          />
        </div>
      </div>
    </div>
    <div class="mb-8">
      <TypographyTitle class="mb-8" :level="3"> Ваш заказ </TypographyTitle>
      <table class="info-table">
        <thead>
          <tr>
            <th>Позиция заказа</th>
            <th>Стоимость</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="cartItem in cartStore.asArray" :key="cartItem.id">
            <tr>
              <td>{{ cartItem.name }} × {{ cartItem.count }}</td>
              <td>₽{{ cartItem.price }}</td>
            </tr>
          </template>
        </tbody>
        <tfoot>
          <tr>
            <td>Итого:</td>
            <td>₽{{ cartStore.totalCost }}</td>
          </tr>
        </tfoot>
      </table>
    </div>
    <div>
      <SecondaryButton :input-wrapper-class="inputWrapperClasses" type="submit">
        Разместить заказ
      </SecondaryButton>
    </div>
  </Form>
</template>
