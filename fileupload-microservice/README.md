# Microservicio de Autenticación.

## ¿Cómo funciona?

### Requisitos.

Se debe tener nodejs instalado en la maquina, para más información [NodeJS](https://nodejs.org/en/)

Purtos a utilizar: 3000

Ingresar al archivo .env ubicado en la carpeta principal, indicar los valores correspondietes a cada clave...

MULTER_DISK_STORAGE= Se establece en true si se desea almacenar los archivos en el disco, se deja vacío si se desea almacenar los archivos en memora temporal.

MULTER_DISK_DEST= En caso de que la opción anterior sea true, en este espacio se establece el nombre de la carpeta donde se almacenará. (ej: archivos, cargados, nuevos)

MULTER_EXT_ACCEPTED= En este espacio se establcen las extensiones de archivos permitidos. (ej: pdf,img,jpg)


### Ejecución

Ejecutar el siguiente comando en la raiz de la carpeta

npm install

npm run start

## ¿Cómo utilizar el microservicio?

Documentación rutas:


## Acerca de la aplicación.

Se realizó una aplicación que permitiera el manejo básico de carga de archivos, se contruyeron rutas para la carga, obtención y eliminación del archivo.

Se utilizó multer para el control de carga de archivos.
Se utilizó NestJs como framework de NodeJs.


## Autor

Luis Hamburger Meza.
Desarrollador de software.
