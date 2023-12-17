<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/AndresDiagoM/my-store">
    <img src="https://raw.githubusercontent.com/angular/angular/main/aio/src/assets/images/logos/angular/angular.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">MyStore</h3>

  <p align="center">
    A simple store with Angular
    <br />
    Angular version: 15.2.6 
    <br />
    <a href=""><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://andresdiagom.github.io/my-store/">View Demo</a>
    ·
    <a href="">Report Bug</a>
    ·
    <a href="">Request Feature</a>
  </p>
</div>


<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://github.com/AndresDiagoM/my-store)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

MyStore is a simple store with Angular. It uses the [FakeStoreAPI](https://fakestoreapi.com/) to get the products and show them in the store. You can add products to the cart and see the total price of the products in the cart. You can also see the details of the products and add them to the cart from there.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Online Deploy on GitHub Pages

Using this command: `ng build --output-path docs --base-href /my-store/`, you can deploy the project on GitHub Pages. You can visit the online version of this project on [GitHub Pages](https://andresdiagom.github.io/my-store/).

## Online Deploy on Netlify

We need to specify the github branch to deploy, the folder where netlify is gonna find the files to so the deploy after runnig the `ng build` command,  in this case the directory is `dist/my-store`. 

To deploy the project on Netlify, you need to create a `netlify.toml` file, so the app can do the redirections correctly when using angular router. You can see the `netlify.toml` file in this project. You can also see the [Netlify documentation](https://docs.netlify.com/configure-builds/get-started/#basic-build-settings) to learn more about the `netlify.toml` file.

Hosting URL - Course 4 - routing: https://curso-4-angular-router--helpful-daffodil-3a4caa.netlify.app/home


## Online Deploy on Firebase

The deploy on Firebase requires to install the Firebase CLI. You can install it using this command: `npm install -g firebase-tools`. Then, you need to login to Firebase using this command: `firebase login`. Finally, you can deploy the project using this command: `firebase deploy`.

When you use `firebase init`, you will have a `firebase.json` file. You need to change the `public` property to `dist/my-store` to deploy the project after you run tne `ng build` or `npm run build` command. You can see the `firebase.json` file in this project.

Hosting URL - Course 1 - Introduccion: https://angular-platzi-381b5.web.app

Hosting URL - Course 3 - APIs: https://angular-platzi-curso3.web.app

Hosting URL - Course 4 - Forms: https://curso-4-angular-router-65e46.web.app

To use firestore, you need to use the `ng add @angular/fire` command. Then, you need to configure the `environment.ts` file with your Firebase configuration. Finally, you need to import the `AngularFireModule` and the `AngularFirestoreModule` in the `app.module.ts` file. You can see the `environment.ts` file and the `app.module.ts` file in this project.

### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [![Angular.io][Angular.io]][Angular-url]
* [![Angular-Cli][Angular-Cli]][Angular-Cli-url]
* [![fakestoreapi][fakestoreapi]][fakestoreapi.com]
* [![firebase][firebase]][firebase-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To use MyStore, follow these steps:

1. Clone this repository
2. Install the dependencies
3. Run the application
4. Navigate to `http://localhost:4200/`
5. Enjoy!

### Prerequisites

To use this project, you need to have `node` and `npm` installed on your machine. To install them, follow these steps:

1. Download the [Node.js installer](https://nodejs.org/en/download/).
2. Run the installer (the `.msi` file you downloaded in the previous step.)
3. Follow the prompts in the installer (Accept the license agreement, click the NEXT button a bunch of times and accept the default installation settings).
4. Restart your computer. You won’t be able to run Node.js until you restart your computer.
5. Test Node. To see if Node is installed, open the Windows Command Prompt, Powershell or a similar command line tool, and type `node -v`. This should print a version number, so you’ll see something like this `v0.10.35`.
6. Test NPM. To see if NPM is installed, type `npm -v` in Terminal. This should print NPM’s version number so you’ll see something like this `1.4.28`.
7. If you need to update `npm`, you can make it using `npm install npm -g`. You can also update Node using `npm install node -g`. This will also update `npm` to the latest version.


### Installation

_Follow the steps:._

1. Clone the repo
   ```sh
   git clone https://github.com/AndresDiagoM/my-store
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run the application
   ```sh
    ng serve
    ```
4. Navigate to `http://localhost:4200/`


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

1. Navigate to `http://localhost:4200/`


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

React is [MIT licensed](./LICENSE).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Andres Felipe Diago - [@your_twitter](https://twitter.com/your_username) - email@example.com

Project Link: [https://github.com/AndresDiagoM/my-store](https://github.com/AndresDiagoM/my-store)

<p align="right">(<a href="#readme-top">back to top</a>)</p>





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/AndresDiagoM/my-store/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/nicolaschicaiza/pet_location/tree/develop
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/AndresDiagoM/my-store
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/AndresDiagoM/my-store/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/andres-felipe-diago-matta/
[product-screenshot]: src/assets/images/screenshot.png


[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/

[Angular-Cli]: https://img.shields.io/badge/Angular_CLI-000000?style=for-the-badge&logo=angularjs&logoColor=white
[Angular-Cli-url]: https://cli.angular.io/

[fakestoreapi]: https://img.shields.io/badge/FakeStoreAPI-000000?style=for-the-badge&logo=api&logoColor=white
[fakestoreapi.com]: https://fakestoreapi.com/


[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 

[firebase]: https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black
[firebase-url]: https://firebase.google.com/