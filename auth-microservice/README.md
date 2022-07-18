# Microservicio de Autenticación.

## ¿Cómo funciona?

### Requisitos.

Se debe tener nodejs instalado en la maquina, para más información [NodeJS](https://nodejs.org/en/)

Purtos a utilizar: 3000

Ingresar al archivo .env ubicado en la carpeta principal, indicar los valores correspondietes a cada clave...

MONGODB_CNN= Hace referencia a la clave de texto generada por mongo atlas para la conección a la base de datos, para más información [Mongo DB](https://www.mongodb.com/docs/guides/atlas/connection-string/).

JWT_SECRET_KEY= Clave unica de cada proyecto para la generación de Json Web Token.

JWT_EXPIRATION= Expiración de los Json Web Token generados, ej: 60, "2 days", "10h", "7d". Un valor número es interpretado como segundos.


### Ejecución

Ejecutar el siguiente comando en la raiz de la carpeta

npm install

npm run start

## ¿Cómo utilizar el microservicio?

Documentación rutas:


## Acerca de la aplicación.

Se realizó una aplicación que permitiera el manejo básico de usuarios, se contruyeron rutas para el registro e ingreso de usuarios, para la seguridad se retorna un Json Web Token, se creó una ruta para la validación del mismo; se maneja todo el tema en torno a la encriptación y desencriptación de datos sensibles.

Se utilizó una base de datos no relacional, Mongo Db - Mongo Atlas.
Se utilizó NestJs como framework de NodeJs.


## Autor

Luis Hamburger Meza.
Desarrollador de software.
