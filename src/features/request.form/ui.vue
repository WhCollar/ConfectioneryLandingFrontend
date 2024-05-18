<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/yup';
import { useForm } from 'vee-validate';
import { object, string } from 'yup';
import { useRequestFormSend } from 'entities/queries';
import { SecondaryButton } from 'shared/ui/buttons';
import { PhoneInput, TextInput, TextAreaInput } from 'shared/ui/inputs';

const inputWrapperClasses = 'mb-[13px]';

const { mutate } = useRequestFormSend();

const { handleSubmit, resetForm } = useForm({
  validationSchema: toTypedSchema(
    object({
      firstName: string().required('Обязательное поле'),
      secondName: string().required('Обязательное поле'),
      phone: string()
        .phone('Неверно введён номер телефона')
        .required('Обязательное поле'),
      message: string().required('Обязательное поле'),
    }),
  ),
});

const onSubmit = handleSubmit((values) => {
  console.log(values);
  mutate({ command: values });
  resetForm();
});
</script>

<template>
  <Form @submit="onSubmit">
    <div class="mb-8 grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
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
      <PhoneInput
        :input-wrapper-class="inputWrapperClasses"
        name="phone"
        placeholder="Телефон"
      />
    </div>
    <div class="mb-8">
      <TextAreaInput
        :input-wrapper-class="inputWrapperClasses"
        name="message"
        placeholder="Сообщение"
      />
    </div>
    <div class="flex justify-center">
      <SecondaryButton :input-wrapper-class="inputWrapperClasses" type="submit">
        Оставить заявку
      </SecondaryButton>
    </div>
  </Form>
</template>
