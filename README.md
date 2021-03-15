[![Youtube][youtube-shield]][youtube-url]
[![Facebook][facebook-shield]][facebook-url]
[![Instagram][instagram-shield]][instagram-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/learnwithsumit/nodejs-basic-bangla">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Advanced Crash Course on Next.js with Programming Hero Community Members</h3>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Initial Setup](#initial-setup)
- [Linting Setup](#linting-setup)
  - [Install Dev Dependencies](#install-dev-dependencies)
  - [Setup Linting Configuration file manually](#setup-linting-configuration-file-manually)
  - [Linting Shortcut Setup with bash script](#linting-shortcut-setup-with-bash-script)
- [VS Code Editor Setup](#vs-code-editor-setup)
  - [Extensions](#extensions)
  - [Settings](#settings)
- [Contact](#contact)

<!-- Initial Setup -->

## Initial Setup

Please follow the below instructions to do initial setup:

1. Make sure you have the latest node.js installed in your machine.

2. install yarn
   ```sh
   npm i -g yarn
   ```
3. install nodemon
   ```sh
   yarn add nodemon
   ```
4. clone the repository
   ```sh
   git clone https://github.com/learnwithsumit/nextjs-crash-course-with-heroes.git
   ```
5. setup & start the dummy api server
   ```sh
   cd apiServer
   yarn # equivalent to npm install
   nodemon index.js
   ```
   api server will be running in port 5000 and can be accessed with http://localhost:5000. You will have 2 routes available in the server -
   1. /posts
   2. /posts/:id
6. setup & start the next js server
   ```sh
   cd ../next-intro #go one level up into the root directory and cd into next js project folder
   yarn
   npm run dev # start next.js project in development mode
   ```
   next js server will be running in port 3000 and can be accessed with http://localhost:3000. You will have 3 routes available in the server -
   1. /
   2. /posts/posts
   3. /posts/:id

<!-- LINTING SETUP -->

## Linting Setup

In order to lint and format your Next.js project automatically according to popular airbnb style guide, I recommend you to follow the instructions below.

### Install Dev Dependencies

```sh
yarn add -D prettier
yarn add -D babel-eslint
npx install-peerdeps --dev eslint-config-airbnb
yarn add -D eslint-config-prettier eslint-plugin-prettier
```

### Setup Linting Configuration file manually

Create a `.eslintrc.json` file in the project root and enter the below contents:

```json
{
  "extends": [
    "airbnb",
    "airbnb/hooks",
    "eslint:recommended",
    "prettier",
    "plugin:jsx-a11y/recommended"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 8
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "jest": true
  },
  "rules": {
    "react/react-in-jsx-scope": 0,
    "indent": 0,
    "linebreak-style": 0,
    "react-hooks/rules-of-hooks": "error",
    "no-console": 0,
    "react/state-in-constructor": 0,
    "react/prop-types": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".js", ".jsx"]
      }
    ],
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 100,
        "tabWidth": 4,
        "semi": true
      }
    ]
  },
  "plugins": ["prettier", "react", "react-hooks"]
}
```

### Linting Shortcut Setup with bash script

1. Windows users, make sure you have Git bash installed in your machine so that we can run bash scripts. Mac & Linux users do not need to install Git bash because it's already available there.

2. Windows users, edit this file '/C/Program Files/Git/etc/profile.d/aliases.sh'. Mac/Linux users need to edit this file '{$HOME}/.zshrc' file

3. If you want to add a shortcut for Next.js project linting with all the linting steps I described above, you can setup an alias in the above aliases.sh (windows) or .zshrc(Mac or Linux) file.

   ```sh
   alias lint-nextjs="exec 3<&1;bash <&3 <(curl https://raw.githubusercontent.com/sumitsaha/linting/master/nextjs-eslint-prettier.sh 2> /dev/null)"
   ```

4. Now open your bash terminal and go to any Next.js project folder. For example in our case cd into the next-intro' folder and then enter the below command

   ```sh
    lint-nextjs
   ```

   This will pull necessary command from my repository and install into your machine accordingly. Enter 'y' to any prompt that you receive. You will see it will automatically do all the steps that I described into the above linting setup section.

<!-- EDITOR SETUP -->

## VS Code Editor Setup

In order to follow along the tutorial series, I recommend you to use Visual Studio Code Editor and install & apply the below extensions and settings.

### Extensions

Install the below extensions:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Settings

Go to your Visual Stuido Code `settings.json` file and add the below settings there:

```json
// config related to code formatting
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.formatOnSave": true,
"[javascript]": {
  "editor.formatOnSave": false,
  "editor.defaultFormatter": null
},
"editor.codeActionsOnSave": {
"source.fixAll.eslint": true,
"source.organizeImports": true
},
"eslint.alwaysShowStatus": true
```

<!-- CONTACT -->

## Contact

Sumit Saha - [sumit@learnwithsumit.com](mailto:sumit@learnwithsumit.com)

Project Link: [https://github.com/learnwithsumit/nextjs-crash-course-with-heroes](https://github.com/learnwithsumit/nextjs-crash-course-with-heroes)

Youtube Channel: [https://youtube.com/LearnwithSumit](https://youtube.com/LearnwithSumit)

<!-- MARKDOWN LINKS & IMAGES -->

[youtube-shield]: https://img.shields.io/badge/-Youtube-black.svg?style=flat-square&logo=youtube&color=555&logoColor=white
[youtube-url]: https://youtube.com/LearnwithSumit
[facebook-shield]: https://img.shields.io/badge/-Facebook-black.svg?style=flat-square&logo=facebook&color=555&logoColor=white
[facebook-url]: https://facebook.com/letslearnwithsumit
[instagram-shield]: https://img.shields.io/badge/-Instagram-black.svg?style=flat-square&logo=instagram&color=555&logoColor=white
[instagram-url]: https://instagram.com/learnwithsumit
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/company/learnwithsumit
