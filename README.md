# vue3-fsd-template

Шаблон для быстрого создания простых проектов с настроенным github action для произведения загрузки на VPS.

### Для работы должын быть созданы и заполены следующие secret's репозитория:
- HOST - публичный адрес
- SSH_USER - имя пользователя
- SSH_KEY - пирватный ключ для доступа к VPS по SSH


### В шаблоне установлены следующие пакеты:
- Vite
- Vue
- VueRouter
- TanstackQuery
- Axios
- VeeValidate
- VeeValidate/yup
- Tailwindcss


Установлен EsLint и плагины для проверки на нарушение правил FSD, а также Prettier для форматирования кода с рекомендованными для Vue3 правилами.


## Project setup
```
yarn
```

### Compiles and hot-reloads for development
```
yarn dev
```

### Compiles and minifies for production
```
yarn build
```
