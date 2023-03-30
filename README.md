# ROIBACK - Technical challenge

## Background
El objetivo es "reinventar" uno de nuestros productos principales (Módulo de
fidelización). En la industria de hostelería un módulo de fidelización es una sección de
la web que permite a los usuario registrarse y autenticarse para obtener descuentos y
ventajas. En este caso existen dos tipos de perfiles (Particulares y Agencias).

## Descripción del test
El objetivo de este desafío front end consiste en implementar un simple pero efectivo
componente web que permita a los usuarios dar de alta una nueva cuenta eligiendo un
tipo de perfil. Como mínimo los usuarios deberán poder elegir con qué tipo de perfil se
van a registrar (Particular o Agencia). Al completar los campos que pertenecen a dicho
perfil el componente mostrará un mensaje saludando al usuario y mostrando los
descuentos y ventajas que le pertencen.

## Requisitos del componente
● Debe obtener los datos de la pantalla inicial (Textos y formularios) vía una
petición AJAX antes de ser renderizado.\
● Cuando el usuario elige el tipo de perfil, el componente debe obtener
los campos del formulario via AJAX que pertenecen a dicho perfil.\
● Cuando el usuario ha completado todos los campos correctamente, se debe
mostrar la pantalla de bienvenida.


Adjuntamos el enlace a un Mockup orientativo sobre el funcionamiento del
componente.

https://projects.invisionapp.com/share/2A11K1YEDJE7#/screens

Para este desafío se debe entregar un repositorio GIT con el componente web
utilizando React.

Si es más cómodo para ti. las respuestas de las peticiones AJAX pueden estar
mockeadas.

## ¿Qué estamos buscando?
Un componente javascript bien estructurado.

HTML 5 limpio y legible.

Estilos de CSS limpios y legibles (puedes usar cualquier preprocesador de estilos).

En Roiback damos mucha importancia al trabajo en equipo por lo que valoramos las
buenas prácticas de desarrollo como docstring, testing, lint, etc..

No dude en experimentar, la clave es mostrar sus ideas y conocimientos en el
desarrollo frontend.

<br />
<br />
<br />

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

<br />
<br />
<br />

## Mock backend server

Install JSON Server 

```
yarn add -g json-server
```

Create a `db.json` file with some data

```json
{
  "profiles": [
    { "id": 1, "title": "guest", "text": "A hotel Guest" },
    { "id": 2, "title": "agency", "text": "A travel agency" }
  ],
  "forms": [
    { "id": 1, "title": "Hotel guest", "profileId": 1, "fields": [
      { "id": 1, "label": "Name", "placeholder": "Enter your name", "required": true },
      { "id": 2, "label": "Last Name", "placeholder": "Enter your last name", "required": true },
      { "id": 3, "label": "Email", "placeholder": "Enter your email", "required": true }  
    ]},
    { "id": 2, "title": "Travel agency", "profileId": 2, "fields": [
      { "id": 4, "label": "Company Name", "placeholder": "Enter your company name", "required": true },
      { "id": 5, "label": "Agency Id Code", "placeholder": "Enter Agency Id Code", "required": true },
      { "id": 6, "label": "Email", "placeholder": "Enter your email", "required": true }
    ]}
  ]
}
```

Start JSON Server

```bash
json-server --watch src/db/db.json --port 3004
```

Now if you go to [http://localhost:3000/posts/1](http://localhost:3000/posts/1), you'll get

```json
{ "id": 1, "title": "json-server", "author": "typicode" }
```

For more info visit: https://github.com/typicode/json-server

<br />
<br />
<br />

## Environment file

Create an environment file `.env` with the following entries: 

```
REACT_APP_API_URL: uri of the backend server
```