const pages = require("cli-pages");

let book = new pages.Book([
    {
        title: "Amazing!",
        content: "hello! this is an example that shows you the parameters when using the Book class!",
        footer: "Thanks!"
    }
])

book.hasPage(1) // true [argument - page number, the page with that page number exists]
book.hasPage(5) // false [argument - page number, the page with that page number does not exist]