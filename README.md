# MercadoLibre Frontend Challenge

## Instalación

Necesitarás tener [Docker](https://docs.docker.com/get-docker/)
y [Docker-Compose](https://docs.docker.com/compose/install/) instalados en tu PC

Clonar el [repositorio](https://github.com/Pakvothe/meli-challenge).

```bash
git clone https://github.com/Pakvothe/meli-challenge.git
```

## Ejecutar la App con Docker

Una vez clonado, abrir el directorio raiz y ejecutar `cd api` para entrar al directorio del back. Crear un archivo .env con la siguiente variable: `PORT=3001`.

Realizar lo mismo para el directorio client: desde la carpeta raiz ejecutar `cd client`, crear un .env y poner la siguiente variable: `REACT_APP_SERVER_URL=http://localhost:3001`.

Luego en la carpeta raíz del repositorio, ejecutar los siguientes comandos:

> En distribuciones Linux es probable que tengas que usar "sudo" antes de los comandos

```bash
docker-compose up --build
```

Luego de terminar la instalación del contenedor la aplicación estará disponible en:

Frontend:

> http://localhost:3000/

Backend:

> http://localhost:3001/

## Ejecutar la App sin Docker

Una vez clonado, abrir el directorio raiz y ejecutar `cd api` para entrar al directorio del back. Crear un archivo .env con la siguiente variable: `PORT=3001`.

Luego ejecutar `yarn` y una vez que termine, `yarn start` para iniciar el servidor.

Realizar lo mismo para el directorio client: desde la carpeta raiz ejecutar `cd client`, crear un .env y poner la siguiente variable: `REACT_APP_SERVER_URL=http://localhost:3001`. Luego ejecutar `yarn` y una vez que termine, `yarn start` para iniciar la aplicación.

Frontend:

> http://localhost:3000/

Backend:

> http://localhost:3001/

## Ejecutar los test

En el directorio ./client ejecutar los siguientes comandos:

```bash
yarn
yarn test
```

## Detener la App ( Docker )

Al terminar de usar la app ejecutar el siguiente comando para detener Docker:

```bash
docker-compose down
```

## Contacto

fr.dv.ortiz@gmail.com
