
  <br />
  <p align="center">
<a href="https://www.npmjs.com/package/cli-pages"><img style="left:70" src="https://raw.githubusercontent.com/jaipack17/cli-pagees/main/assets/cli_pages-removebg-preview%20(1).png" width="606" alt="logo" /></a>
  </p>
<br/>
  <p>
<div align="center">
    <a href="https://www.npmjs.com/package/cli-pages"><img src="https://img.shields.io/npm/v/cli-pages.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/cli-pages"><img src="https://img.shields.io/npm/dt/cli-pages.svg?maxAge=3600" alt="NPM downloads" /></a>
</div>
  </p>

## About

[cli-pages](https://www.npmjs.com/package/ruxe) is used to easily create pages for your command line interfaces and apps in no time! It has all the features you possibly need!
<br/><br/>
  <p align="center">
    <img style="left:70" src="https://raw.githubusercontent.com/jaipack17/cli-pagees/main/assets/ezgif.com-gif-maker%20(1).gif" width="806" alt="logo" />
  </p>

## Installation

```sh-session
npm install cli-pages
```
## Example Usage

<br/>

**Creation**
```js
const { Book } = require("cli-pages");

let pages = new Book([
    {
        title: "Welcome to my app!",
        content: "This app does a lot of stuff! It can help you build a rocket!",
        footer: "Hope you enjoy!"
    },
    {
        title: "This is Amazing!",
        content: "epic!",
        footer: "Hope you understood!"
    },
    {
        title: "Thank you!",
        content: "Thank you for using my app! I really appreciate it!",
        footer: "<3"
    }
]);

/*

OR

let pages = new Book();

pages.addPage({
    title: "Welcome to my app!",
    content: "This app does a lot of stuff! It can help you build a rocket!",
    footer: "Hope you enjoy!"
});

...

*/
```

**Displaying the pages in the terminal**
```
const { Book } = require("cli-pages");

let pages = new Book([
    {
        title: "Welcome to my app!",
        content: "This app does a lot of stuff! It can help you build a rocket!",
        footer: "Hope you enjoy!"
    },
    {
        title: "This is Amazing!",
        content: "epic!",
        footer: "Hope you understood!"
    },
    {
        title: "Thank you!",
        content: "Thank you for using my app! I really appreciate it!",
        footer: "<3"
    }
]);

pages.open(); // displays the pages in the terminal

setTimeout(function(){
   pages.close(); // ends the page session and stops displaying the code after 60 seconds.
}, 60000)
```

#### **Examples on how to edit, remove pages, get number of pages, set custom configurations can be found [here](https://github.com/jaipack17/cli-pages/tree/main/examples)**

## 🤝 Contribution

For contributing to this project, fork the repository [here](https://github.com/jaipack17/cli-pages), make the changes and open a pull request! Pull requests will be reviewed before being merged.

## 🐛 Bugs

Found a bug? Having an issue with the package? Open a new issue [here](https://github.com/jaipack17/cli-pages/issues)!

