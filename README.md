## Установка
```
// Копирование репозитория
git clone http://gitlab.nordclan/frontendspb/webpack/vue-2-app.git

// Установка зависимостей
npm install

// Установка прекоммитов
npm run prepare
```

## Команды
Запуск разработки.
```
npm run start
```

Запуск билда.
```
npm run build
```
## Precommit
```
npx stylelint ./src --fix

npx eslint ./src --fix
```
## Инструменты

1. Framework: Vue.js 3 (+ Vuex, Vue Router),
2. Linters: ESLint (+ Prettier), Stylelint, Husky.
3. Compilers: Babel, TypeScript.
4. CSS-preprocessor: SCSS.
5. CSS-postprocessor: PostCSS.
6. Bundler: Webpack 5.
