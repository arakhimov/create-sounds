## create-sounds

#### учебный проект Result.School Владилена Минина

### Версия 0.0.1

Интернет-магазин музыкальных инструментов.

В проекте реализованы Frontend и Backend части приложения.
Взаимодействие между ними осуществляеся при помощи REST API.

#### Backend

Для хранения данных использовалась облачная база данных MongoDB Atlas Cloud Database.

С помощью Express добавлены все routes, необходимые приложению для работы по REST API.

Для реализации функционала создания аккаунта и входа в него использовались Json Web Token.

#### Frontend

Для хранения состояния используется state-management Redux.

Для межсетевых запросов используется axios.

Выполнены GET, POST, DELETE, PATCH запросы.

Для маршрутизации используется React-router-dom.

Страницы, доступные только авторизованным пользователям используют Private Routes.

Реализованы:

- Поиск товара по его названию
- Категории товаров
- Сортировка товаров (по стоимости)
- Отдельная страница товара
- Корзина с итоговой стоимостью + возможность удаления товара из корзины
- Админ панель с возможностью добавления товаров на сайт (форма добавления / редактирования товара; таблица всех товаров)
- Страница регистрации и входа

Использовались технологии: JS, CSS, HTML, React, Redux, NodeJS, Express, MongoDB, GIT.

### Для запуска проекта необходимо:

- git clone git@github.com:arakhimov/create-sounds.git
- npm install
- cd server
- npm start
- cd client
- npm start
