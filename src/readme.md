# Frontend Space

* Среда разработки сложных веб-приложений на основе Frontend Heaven.

## Установка

1. `install` [NodeJS](https://nodejs.org/ru/)
2. `git clone`
3. `npm install`

## Использование
**Development**

`npm run start`

* Непрерывная сборка приложения (HMR включен)
* Приложение обслуживается по `http://localhost:1488` && create .env APP_PORT=1337

`npm run start:dev`

* Тестовая сборка проекта без оптимизации
* Minify: false
* Sourcemap: true
* Contenthash: false

**Production**

`npm run start:prod`

* Финальная сборка приложения с оптимизацией
* Minify: true
* Sourcemap: false
* Contenthash: true

**Linting**

`npm run lint`
`npm run lint:fix`

`npm run lint:styles`
`npm run lint:styles:fix`

`npm run lint:scripts`
`npm run lint:scripts:fix`

**Testing**

`npm run test`

## Стек
* [npm](https://docs.npmjs.com) - Менеджер пакетов.

* [React](https://ru.reactjs.org/) - JavaScript-библиотека для создания пользовательских интерфейсов.
* [Redux](https://redux.js.org/) - Контейнер предсказуемого состояния для JS-приложений.
* [Axios](https://axios-http.com/docs/intro) - HTTP-клиент на основе Promise для браузера и node.js.

* [Babel](https://github.com/babel/babel) - Компилятор для написания JavaScript следующего поколения.
* [Webpack](https://github.com/webpack/webpack) - Сборщик статических модулей.
* [TypeScript](https://github.com/Microsoft/TypeScript) - JavaScript с синтаксисом для типов.

* [Jest](https://jestjs.io/ru/) - Фреймворк для тестирования.
* [React Testing Library](https://testing-library.com/docs/) - Решение для тестирования компонентов React.

* [Sass](https://github.com/sass/sass) - Расширение CSS, добавляющее вложенные правила, переменные, примеси, наследование селекторов и многое другое.
* [PostCSS](https://github.com/postcss/postcss) - Инструмент для преобразования стилей.

* [ESLint](https://github.com/eslint/eslint) - Инструмент для выявления проблем, обнаруженных в коде JS/ES/TS.
* [Prettier](https://github.com/prettier/prettier) - Форматировщик кода.
* [Stylelint](https://github.com/stylelint/stylelint) - Линтер, помогает избежать ошибоки и обеспечить соблюдение соглашений в стилях.
