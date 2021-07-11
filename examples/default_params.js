/*

pages = [
    {
        title: string,
        content: any,
        footer: string | undefined
    },
    {
        title: string,
        content: any,
        footer: string | undefined
    },
    ...
]

*/

const pages = require("cli-pages");

let book = new pages.Book([
    {
        title: "Amazing!",
        content: "hello! this is an example that shows you the parameters when using the Book class!",
        footer: "Thanks!"
    }
])

