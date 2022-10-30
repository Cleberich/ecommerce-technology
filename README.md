# My Shop (eCommerce con login y perfil de administración)

Este proyecto se creo con React js, para dar estilos se utilizo la libreria de Bootstrap 5, para el login con google se utilizo la libreria Auth0, para las alertas SweetAlert2 y para gestionar la base de datos utilizamos Firebase.

## Ejecutar local
```bash
$ git clone https://github.com/Cleberich/ecommerce-technology.git
$ cd ecommerce-technology
$ npm install
```

### Antes de ejecutar el comando npm start

Debemos crear un archivo .env y configurar las variables de entorno.

```bash
Ejemplo:
REACT_APP_apiKey="Ingresa tu apiKey de firebase",
REACT_APP_authDomain="Ingresa tu authDomain de firebase",
REACT_APP_projectId="Ingresa tu projectId de firebase",
REACT_APP_storageBucket="Ingresa tu storageBucket de firebase",
REACT_APP_messagingSenderId="Ingresa tu messagingSenderId de firebase",
REACT_APP_appId="Ingresa tu appId de firebase"

REACT_APP_AUTH0_DOMAIN="ingresa tus domain de auth0",
REACT_APP_AUTH0_CLIENT_ID="ingresa tus client_id de auth0"
```

### Dependencias importantes antes de ejecutar

- [Firebase](https://firebase.com)
- [Auth0](https://auth0.com/)

### Auth0 instalación

Iniciamos sesion en nuestra cuenta, vamos al apartado de applications / applications / create application / seleccionamos simple page applications / elegimos la libreria que queremos usar, en este caso react / setting / copiamos las credenciales y las agregamos al archivo .env

En applications URL agregamos https:localhost:3000 

### Listo para ejecutar el comando npm start

#Aplicacion de prueba

- [Visitar](https://ecommercemyshop.netlify.app/)
