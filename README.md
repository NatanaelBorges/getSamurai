<div id="top"></div>
<h1  align="center">
<img src="https://res.cloudinary.com/duugdpulf/image/upload/v1654126179/oie_8dRz7JEMBeLh_xde3sx.png"  alt="GetSamurai">
</h1>

<p align="center">
  <strong>
    Get Samurai 🥋
  </strong>
</p>

<p align="center">
Get Samurai is a free, open-source framework intended to help developers and tech lovers build websites and apps quickly, securely, and scalable.
</p>
<p align="center">
It combines some of the most used technologies on the market in a single project, creating a whole new web of knowledge and several possibilities to improve your learning.
</p>

<br>

<h4 align="center"> 🚧 Get Samurai 🚀 Under construction... 🚧 </h4>

<br>

<p align="center">
  <a href="https://github.com/NatanaelBorges/getSamurai/blob/main/LICENSE">
 <img alt="GitHub" src="https://img.shields.io/github/license/NatanaelBorges/getSamurai" alt="Get Samurai is released under the MIT license.">
  </a>
<a href="https://github.com/NatanaelBorges/getSamurai/blob/main/CHANGELOG.md">
 <img alt="package.json version" src="https://img.shields.io/github/package-json/v/NatanaelBorges/getSamurai">
</a
  <a href="https://github.com/NatanaelBorges/getSamurai/blob/main/CONTRIBUTION-pt_BR.md">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  </a>
<a href="https://github.com/NatanaelBorges/getSamurai/commits/main">
   <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/NatanaelBorges/getSamurai">
  </a>  
</p>

<p align="center">
 <a href="#-about-the-project">About</a> •
 <a href="#%EF%B8%8F-why">Why</a> •
 <a href="#%EF%B8%8F-get-started-with-get-samurai-locally-in-5-minutes">Start in 5 minutes</a> •
 <a href="#-technologies">Technologies</a> •
  <a href="#-release-notes">Release Notes</a> •
  <a href="#-code-of-conduct">Code of Conduct</a> •  
 <a href="#-contributing">Contributing</a> •
 <a href="#license">license</a>
</p>

English 🇺🇸 | [Português 🇧🇷](./README-pt_BR.md)

## 🔖 About the project

The project aims to connect those who need it, with those who know how to do it, that is, the idea is to connect any type of service with the end user.

  The idea of the project is quite simple:

_“Share knowledge in the form of a service app, providing a simple way to learn”._

Get Samurai was developed with 3 key principles:

- 🧪 **Well Tested**
  - Each module is extensively tested to >95% coverage.
- 👁 **Well typed**
  - First class support for Typescript included.
- 📄 **Well documented**
  - Complete reference and installation documentation.

The project was developed with a focus on learning. All of its content is fictional.

<p align="right">(<a href="#top"> back to the top </a>)</p>

## Give a star!⭐

If you liked the project, or Get Samurai helped you in any way, please give it a star, it helps a lot to keep the content updated and thus enabling the creation of new projects 😉

<p align="right">(<a href="#top"> back to the top </a>)</p>

## 🤷‍♂️ Why?

This project is part of my personal portfolio, so I would be happy if you could give me some feedback on the project, code, framework, or anything you can report that could make me a better developer!

E-mail: [natanael.dr.borges@gmail.com](mailto:natanael.dr.borges@gmail.com)

Connect with me on [LinkedIn](https://www.linkedin.com/in/natanael-borges-b9a40576/) .

Also, you can use this project however you like, whether it's for studying, making improvements or earning money from it!

It's free!😍

<p align="right">(<a href="#top"> back to the top </a>)</p>

## 🏃‍♂️ Get started with Get Samurai _locally_ in 5 minutes
  
These instructions will provide you with a copy of the complete project so you will be able to run it on your local machine.

### Prerequisite

To have a better experience and get the most out of the project, we have some prerequisites:

- We recommend that you have basic knowledge of programming logic;
- We recommend that you have basic knowledge in Javascript, Html and CSS;
- Before starting, you will need to have the following tools installed on your machine:

The project can be built with **npm** or **yarn**, so choose one of the approaches below if you don't have one installed on your system.

- **Npm** is distributed with Node.js, which means that when you download Node.js, npm is automatically installed on your computer. [Download Node.js](https://nodejs.org/en/download/)

- **Yarn** is a package manager created by the Facebook team, and seems to be faster than npm in general. [Download Yarn](https://yarnpkg.com/en/docs/install)*

*Unfortunately yarn doesn't come with Node.js installed, so you'll need to download it separately.

Also, it's good to have an editor to work with code, it can be your preference, an example of an editor is [VSCode](https://code.visualstudio.com/)

<p align="right">(<a href="#top"> voltar ao topo </a>)</p>

## 💾 Technologies

In the construction of the project, the following technologies/tools were used:

#### **Backend (server)**  ([NodeJS](https://nodejs.org/en/)  +  [TypeScript](https://www.typescriptlang.org/))

- **[Express](https://expressjs.com/)**
- **[TypeORM](https://typeorm.io/)**
- **[Husky](https://www.npmjs.com/package/husky)**
- **[Jest.js](https://jestjs.io/)**
- **[ESLint](https://eslint.org/)**
- **[Prettier](https://prettier.io/)**  
- **[TS-node](https://typestrong.org/ts-node/)**
- **[MySQL](https://www.mysql.com/)**

> To learn more, see the file [package.json](https://github.com/NatanaelBorges/getSamurai/blob/main/sources/server/package.json)

### Initial Settings

Now that you have Node.js and a code editor installed on your machine, we can start installing the dependencies contained in the `package.json` files that are located in the root of the repository (for managing commits), in the directory from the **server**, in the **website** directory and in the **mobile** directory. To install the dependencies, just open the terminal in the desired directory and type the commands:

```bash
# Clone the repository
$ git clone https://github.com/NatanaelBorges/getSamurai.git

# Access the project folder
$ cd getSamurai

# Installing commitlint dependencies:
$ cd ./getSamurai
$ npm install
# or
$ yarn

# Installing server dependencies:
$ cd ./sources/server
$ npm install
# or
$ yarn

# Installing website dependencies:
$ cd ./sources/website
$ npm install
# or
$ yarn

# Installing the mobile dependencies:
$ cd ./sources/mobile
$ npm install
# or
$ yarn
```

See the **`package.json`** files from [commitlint](https://github.com/NatanaelBorges/getSamurai/blob/main/package.json),  [server](https://github.com/NatanaelBorges/getSamurai/blob/main/sources/server/package.json),  [website](https://github.com/NatanaelBorges/getSamurai/blob/main/sources/website/package.json)  e  [mobile](https://github.com/NatanaelBorges/getSamurai/blob/main/sources/mobile/package.json).

#### 🔧 Using the Server

```bash
# Opening the terminal in the server directory:
$ cd ./sources/server

# Running the application in development mode:
$ npm dev
# or
$ yarn dev
```

> See the **scripts {}** part of the file [package.json](https://github.com/NatanaelBorges/getSamurai/blob/main/sources/server/package.json)  to find out which scripts are available.

Your server is now running at `http://localhost:3000`. Open the `server` directory in your code editor and let the fun begin. Also, you can get more information by referring to the [README.md](https://github.com/NatanaelBorges/getSamurai/blob/main/sources/server/README.md) of the server.

#### 💻 Utilizando o Website

```bash
# Opening the terminal in the server directory:
$ cd ./sources/website

# Running the application in development mode:
$ npm dev
# or
$ yarn dev
```

> See the **scripts {}** part of the file [package.json](https://github.com/NatanaelBorges/getSamurai/blob/main/sources/website/package.json) to find out which scripts are available.

Your site is now running on `http://localhost:3100`. Open the `website` directory in the code editor and let the fun begin. Save your changes and the browser will update in real time. You can also get more information by consulting the file [README.md](https://github.com/NatanaelBorges/getSamurai/blob/main/sources/website/README.md) on the website

#### Observation

If you are using Linux Bash for Windows, [see this guide](<https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash>- shell/) or use `node` at the command prompt.

<p align="right">(<a href="#top"> back to the top </a>)</p>

## 🚢 Release notes

Want to know what we've shipped recently? Check out our [changelog](./CHANGELOG.md) for key highlights, performance improvements, new features and notable bug fixes.

<p align="right">(<a href="#top"> back to the top </a>)</p>

## ❗ Code of conduct

We are dedicated to building a welcoming, diverse and safe study community. We expect all participants to comply with our [**Code of Conduct**](https://github.com/NatanaelBorges/getSamurai/blob/main/code-of-conduct.md) . Please read it. Please follow it. We work hard to build each other up and create amazing things together.💪💜

<p align="right">(<a href="#top"> back to the top </a>)</p>

## 🤝 Contributing

This project is for study purposes, but we want to keep evolving to, in a way, try to improve people's knowledge. You can submit as many PR's as you like, we'll be happy to review and accept them!

All kinds of contributions are most welcome and appreciated!

- ⭐️ Star in the project;
- 🐛 Find and report issues;
- 📥 Submit PRs to help resolve issues or add features.

Check out our **[Contribution Guide](https://github.com/NatanaelBorges/getSamurai/blob/main/CONTRIBUTION.md)** before making a pull request and stay on top of how to contribute and help to grow our study community even more.

<p align="right">(<a href="#top"> back to the top </a>)</p>

## 📝License

This project is under [MIT license](https://github.com/NatanaelBorges/getSamurai/blob/main/LICENSE) .

## 🧡 Thanks

We thank everyone who somehow makes the project better every day and very special, thus helping us to bring knowledge to many people in a practical, fast and pleasant way.

Made with ❤️ by _**Natanael Borges**_ 👋🏽

<p align="right">(<a href="#top"> back to the top </a>)</p>
