# Prueba tecnica Infocasas
Para poder ejecutar el proyecto se debera seguir los siguientes pasos.

## Requerimientos

El proyecto se debera ejecutar en un entorno WAMP
- clonar el proyecto dentro de la carpeta www

## Base de datos

- Creamos una base de datos local llamada db_api
## Proyecto API

El proyecto requiere (PHP 8.0.1 +) para funcionar.

- Cambiamos el nombre del archivo .env.example a .env

Instalando las dependencias en el servidor, nos ubicamos en la carpeta /api y ejecutamos lo siguiente
```sh
composer install
php artisan key:generate
php artisan migrate
php artisan db:seed
php artisan serve --port=8000
```

el proyecto deberia ejecutarse en el puerto 8000

## Proyecto Cliente
El proyecto usa la version de react 18, ejecutamos los siguientes comandos:
```sh
npm install
npm run start
```
