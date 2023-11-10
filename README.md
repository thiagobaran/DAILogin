<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/thiagobaran/DAILogin">
    <img src="https://miro.medium.com/v2/resize:fit:3804/1*Pjml9-K_nkQxa0YrGZusNw.gif" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">App de LogIn</h3>

  <p align="center">
    Santino Arana y Thiago Baranczuk
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Tabla de contenidos</summary>
  <ol>
    <li>
      <a href="#Sobre-el-proyecto">Sobre el proyecto</a>
      <ul>
        <li><a href="#Creado-con">Creado con</a></li>
      </ul>
    </li>
    <li>
      <a href="#Para-comenzar">Para comenzar</a>
      <ul>
        <li><a href="#Instalacion">Instalacion</a></li>
      </ul>
    </li>
    <li><a href="#Reconocimientos">Reconocimientos</a></li>
    <li><a href="#Creadores">Creadores</a></li>
    <li><a href="#contacto">Contacto</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Sobre el proyecto


Este es el README del proyecto "DAILOGIN," una aplicación de inicio de sesión y registro desarrollada con React Native y Node.js. A continuación, encontrarás toda la información necesaria para comprender, configurar y ejecutar este proyecto.

<p align="right">(<a href="#readme-top">Volver</a>)</p>



### Creado con

* ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
* ![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
* ![MicrosoftSQLServer](https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white)
* ![Expo](https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37)
* ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

<p align="right">(<a href="#readme-top">Volver</a>)</p>



<!-- GETTING STARTED -->
## Para comenzar

Asegúrate de seguir estos pasos para configurar el proyecto correctamente

### Instalacion

Clonar el Repositorio: Clona este repositorio en tu máquina local usando el siguiente comando:
```bash
git clone https://github.com/tuusuario/LoginRN.git
```
Instalar Dependencias:

Para la aplicación React Native (frontend), navega a la carpeta client y ejecuta:
```bash
cd client
npm install
```
Para el servidor Node.js (backend), navega a la carpeta server y ejecuta:
```bash
cd server
npm install
```
Configurar la Base de Datos:
Configura tu base de datos SQL Server y actualiza la configuración en el archivo dbconfig.js dentro de la carpeta server. Debes proporcionar la información de conexión necesaria.
Variables de Entorno:

Crea un archivo .env en la carpeta server y define las variables de entorno siguientes:

Sigue estos pasos para ejecutar la aplicación:
Servidor (Node.js)

Desde la carpeta server, ejecuta el servidor Node.js:
```bash
cd server
npm start
```

El servidor se ejecutará en el puerto 5000.

Cliente (React Native)

Desde la carpeta client, inicia la aplicación React Native:
``` bash
cd client
npm start
```

Sigue las instrucciones proporcionadas por Expo CLI para ejecutar la aplicación en un emulador o dispositivo físico.
env
Copy code
DB_USER=tu_usuario_de_base_de_datos
DB_PASSWORD=tu_contraseña_de_base_de_datos
DB_SERVER=nombre_de_servidor_de_base_de_datos
DB_DATABASE=nombre_de_base_de_datos

<p align="right">(<a href="#readme-top">Volver</a>)</p>

## Reconocimientos
* dotenv

* cors


## Creadores

Este proyecto fue desarrollado por Santino Arana y Thiago Baranczuk.

<p align="right">(<a href="#readme-top">Volver</a>)</p>


<!-- CONTACT -->
## Contacto

Si tienes alguna pregunta o comentario sobre este proyecto, no dudes en ponerte en contacto con nosotros a través de thiagobaranczuk@gmail.com .

Link del proyecto:https://github.com/thiagobaran/DAILogin

<p align="right">(<a href="#readme-top">Volver</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
