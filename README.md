  <br />
  <p align="center">
<a href="https://www.npmjs.com/package/cli-pages"><img style="left:70" src="https://raw.githubusercontent.com/jaipack17/cli-pages/main/assets/clipageslogo%20(1).png" width="606" alt="logo" /></a>
  </p>
<br/>
  <p>
<div align="center">
    <a href="https://www.npmjs.com/package/cli-pages"><img src="https://img.shields.io/npm/v/cli-pages.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/cli-pages"><img src="https://img.shields.io/npm/dt/cli-pages.svg?maxAge=3600" alt="NPM downloads" /></a>
    <a href="https://www.codefactor.io/repository/github/jaipack17/cli-pages"><img src="https://www.codefactor.io/repository/github/jaipack17/cli-pages/badge" alt="CodeFactor" /></a>
    <a href="https://github.com/jaipack17/cli-pages/blob/main/CONTRIBUTING.md"><img src="https://img.shields.io/badge/github-contribute-black" alt="contribute" /></a>
    <a href="https://www.github.com/jaipack17/cli-pages/issues"><img src="https://img.shields.io/badge/issues-bugs-red" alt="issues" /></a>
    <a href="https://github.com/jaipack17/cli-pages#documentation"><img src="https://img.shields.io/badge/docs-view-%23blue" alt="docs" /></a>
</div>
  </p>

<hr/>

### Contents

* [About](#about)
* [Installation](#installation)
* [Example Usage](#example-usage)
  * [Creation](#creation)
  * [Creation ~ 2](#or)
  * [Diplaying the Pages in The Terminal](#displaying-the-pages-in-the-terminal)
  * [All Examples](#examples-on-how-to-edit-remove-pages-get-number-of-pages-set-custom-configurations-can-be-found-here)
* [Documentation](#documentation)
  * [Initializing](#initializing)
  * [Add page](#addpage)
  * [Remove page](#removepage)
  * [Edit page](#editpage)
  * [Has page](#haspage)
  * [Book size](#size)
  * [Display book](#open)
  * [Close book](#close)
  * [Set close key](#setclosekey)
* [Contribution](#-contribution)
* [Bugs](#-bugs) 

## About

[cli-pages](https://www.npmjs.com/package/ruxe) is used to easily create pages for your command line interfaces and apps in no time! Want to create tutorials, policies, terms of service and more for your cli apps? cli-pages is perfect for you! It has all the features you possibly need! pages can be toggled by using custom words like 'n' or 'next' and 'p' or 'previous' or any other custom word. Custom words for exiting the book can also be set using `.setCloseKey()` function available in the 'Book' class.
<br/><br/>
  <p align="center">
    <img style="left:70" src="https://raw.githubusercontent.com/jaipack17/cli-pages/main/assets/ezgif.com-gif-maker%20(4).gif" width="806" alt="logo" />
  </p>

## Installation

```sh-session
npm install cli-pages
```
## Example Usage

<br/>

## Creation
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
```
### OR
```js
let pages = new Book();

pages.addPage({
    title: "Welcome to my app!",
    content: "This app does a lot of stuff! It can help you build a rocket!",
    footer: "Hope you enjoy!"
});
...

```

### Displaying the pages in the terminal
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

pages.open(); // displays the pages in the terminal

setTimeout(function(){
   pages.close(); // ends the page session and stops displaying the code after 60 seconds.
}, 60000)
```

### **Examples on how to edit, remove pages, get number of pages, set custom configurations can be found [here](https://github.com/jaipack17/cli-pages/tree/main/examples)**

## **Documentation**

Pages are created by using the `'Book'` class that is included in this package.

### Initializing

```js
const { Book } = require("cli-pages"); // importing the class from the package

let pages = new Book(); // creating our pages
```

### `.addPage()`

```js
const { Book } = require("cli-pages"); 

let pages = new Book([
   {
      title: "hello!",
      content: "cli-pages is the best!",
      footer: "Thanks!"
   }
]);
```
There is an alternative to the above code! Use the `.addPage()` function

Parameters: 
* type: object
* structure: { title: string, content: any, footer: string | undefined }

```js
const { Book } = require("cli-pages"); 

let pages = new Book();

pages.addPage({
  title: "hello!",
  content: "cli-pages is the best!",
  footer: "Thanks!"
});
```

### `.removePage()`

Parameters: 
* type: number
* structure: page-number: number

```js
const { Book } = require("cli-pages"); 

let pages = new Book();

pages.addPage({
  title: "hello!",
  content: "cli-pages is the best!",
  footer: "Thanks!"
});

pages.addPage({
  title: "sup!",
  content: "cli-pages is the worst!",
  footer: "Nope!"
});

pages.removePage(2); // removes the 2nd page [titled 'sup!']
```

### `.editPage()`

Parameters: 
* type: number, object
* structure: page-number, { title: string, content: any, footer: string | undefined }

```js
const { Book } = require("cli-pages"); 

let pages = new Book();

pages.addPage({
  title: "hello!",
  content: "cli-pages is the best!",
  footer: "Thanks!"
});

pages.addPage({
  title: "sup!",
  content: "cli-pages is the worst!",
  footer: "Nope!"
});

pages.editPage(1, { content: "this is the new content!" }); // edits content of the 1st page
```
### `.hasPage()`

Parameters: 
* type: number
* structure: page-number: number

```js
const { Book } = require("cli-pages"); 

let pages = new Book();

pages.addPage({
  title: "hello!",
  content: "cli-pages is the best!",
  footer: "Thanks!"
});

pages.addPage({
  title: "sup!",
  content: "cli-pages is the worst!",
  footer: "Nope!"
});

pages.hasPage(2); // returns true
pages.hasPage(6); // returns false
```
### `.size()`

Parameters: none

```js
const { Book } = require("cli-pages"); 

let pages = new Book();

pages.addPage({
  title: "hello!",
  content: "cli-pages is the best!",
  footer: "Thanks!"
});

pages.addPage({
  title: "sup!",
  content: "cli-pages is the worst!",
  footer: "Nope!"
});

console.log(pages.size()); // prints 2
```
### `.open()`

Parameters: none

```js
const { Book } = require("cli-pages"); 

let pages = new Book();

pages.addPage({
  title: "hello!",
  content: "cli-pages is the best!",
  footer: "Thanks!"
});

pages.addPage({
  title: "sup!",
  content: "cli-pages is the worst!",
  footer: "Nope!"
});

pages.open(); // displays the book in the console
```
### `.close()`

Parameters: none

```js
const { Book } = require("cli-pages"); 

let pages = new Book();

pages.addPage({
  title: "hello!",
  content: "cli-pages is the best!",
  footer: "Thanks!"
});

pages.addPage({
  title: "sup!",
  content: "cli-pages is the worst!",
  footer: "Nope!"
});

pages.open(); // displays the book in the console

setTimeout(function(){
   pages.close(); // used to close the book. here it closes after 60 seconds of use
}, 60000)
```

### `.setCloseKey()`

Parameters: 
* type: string
* structure: key: string

```js
const { Book } = require("cli-pages"); 

let pages = new Book();

pages.addPage({
  title: "hello!",
  content: "cli-pages is the best!",
  footer: "Thanks!"
});

pages.addPage({
  title: "sup!",
  content: "cli-pages is the worst!",
  footer: "Nope!"
});

pages.setCloseKey("exit"); // 'exit' here will be used to close the book on prompt
```


## 🤝 Contribution

For contributing to this project, fork the repository [here](https://github.com/jaipack17/cli-pages), make the changes and open a pull request! Pull requests will be reviewed before being merged.

### Format

Your pull request must contain the following information in detail - 

* Explain the pull request and the need for it to be merged in not more than 30 words
* What did you add/edit?

### Review

All pull requests are reviewed thoroughly. Pull requests that pass the review are merged and then closed while the pull requests that fail the review are not merged and are closed.

## 🐛 Bugs

Found a bug? Having an issue with the package? Open a new issue [here](https://github.com/jaipack17/cli-pages/issues)!

