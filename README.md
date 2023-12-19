<p align="center"><img src="https://laravel.com/assets/img/components/logo-laravel.svg" width="400"></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/d/total.svg" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/v/stable.svg" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/license.svg" alt="License"></a>
</p>


## Установка

##### Установка зависимостей
```
composer install
```

##### Создать .env и изменить его согласно локальному окружению
```
cp .env.example .env
```
Для продакшена `APP_ENV=production`

Для разработки\тестирования `APP_ENV=local`

##### Сгенерировать ключ проекта
```
php artisan key:generate
```


##### Создать симлинк папки public на папку storage
```
php artisan storage:link
```

##### Выполнить миграции
```
php artisan migrate:fresh --seed
```

## Frontend
```
cd frontend
```
```
npm install
```
```
cp .env.example .env
```
another commands at [here](/frontend/README.md):
