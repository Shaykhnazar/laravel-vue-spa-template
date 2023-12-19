<p align="center"><img src="https://laravel.com/assets/img/components/logo-laravel.svg" width="400"></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/d/total.svg" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/v/stable.svg" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/license.svg" alt="License"></a>
</p>


## Installation

### Backend

##### Installing dependencies
```
composer install
```

##### Create .env and change it according to local environment
```
cp .env.example .env
```
For production `APP_ENV=production`

For development\testing `APP_ENV=local`

##### Сгенерировать ключ проекта
```
php artisan key:generate
```


##### Create a symlink of the public folder to the storage folder
```
php artisan storage:link
```

##### Run migrations
```
php artisan migrate:fresh --seed
```

#### Testing on local development (You can run it after setup!! [Frontend](#frontend))
```
php artisan serve
```

### Frontend
```
cd frontend
```
```
npm install
```
```
cp .env.example .env
```
another commands at [here](frontend%2FREADME.md):
