const pages = require("cli-pages");

let _book = new pages.Book([
    {
        title: "Amazing!",
        content: "hello! this is an example that shows you the parameters when using the Book class!",
        footer: "Thanks!"
    }
])

//or

let book2 = new pages.Book()

book2.addPage({
    title: "some text",
    content: "some content",
    footer: "some footer"
})
