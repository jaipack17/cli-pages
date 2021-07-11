/*
 close the book
*/

const pages = require("cli-pages");

let book = new pages.Book([
    {
        title: "Amazing!",
        content: "hello! this is an example that shows you the parameters when using the Book class!",
        footer: "Thanks!"
    },
    {
        title: "Disgusting!",
        content: "not great!",
        footer: "Nope!"
    }
])

book.open() // opens the book.

setTimeout(function(){
    book.close() // closes the book after 5 seconds 
}, 5000)