<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/yup';
import { useForm } from 'vee-validate';
import { computed } from 'vue';
import { object, string } from 'yup';
import { useCommentCreate } from 'entities/queries';
import { SecondaryButton } from 'shared/ui/buttons';
import { PhoneInput, TextInput, TextAreaInput } from 'shared/ui/inputs';

const inputWrapperClasses = 'mb-[13px]';

const props = defineProps<{
  productId?: string;
}>();

const { mutate } = useCommentCreate();

const { handleSubmit, resetForm } = useForm({
  validationSchema: toTypedSchema(
    object({
      firstName: string().required('Обязательное поле'),
      secondName: string().required('Обязательное поле'),
      email: string()
        .email('Неверно введён адрес электронной почты')
        .required('Обязательное поле'),
      text: string().required('Обязательное поле'),
    }),
  ),
});

const onSubmit = handleSubmit((values) => {
  console.log(values);
  if (props.productId) mutate({ productId: props.productId, command: values });
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
        name="email"
        placeholder="Электронная почта"
      />
    </div>
    <div class="mb-8">
      <TextAreaInput
        :input-wrapper-class="inputWrapperClasses"
        name="text"
        placeholder="Сообщение"
      />
    </div>
    <div>
      <SecondaryButton :input-wrapper-class="inputWrapperClasses" type="submit">
        Оставить комментарий
      </SecondaryButton>
    </div>
  </Form>
</template>
