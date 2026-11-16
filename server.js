const express = require("express");
const app = express();

app.use(express.json());

let books = [
    { id: 1, title: "The Alchemist", author: "Paulo Coelho" },
    { id: 2, title: "Wings of Fire", author: "A.P.J. Abdul Kalam" }
];

// Get all books
app.get("/books", function (req, res) {
    res.json(books);
});

// Add a new book
app.post("/books", function (req, res) {
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author
    };

    books.push(newBook);
    res.status(201).json(newBook);
});

// Update a book
app.put("/books/:id", function (req, res) {
    const book = books.find(function (item) {
        return item.id === Number(req.params.id);
    });

    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }

    book.title = req.body.title || book.title;
    book.author = req.body.author || book.author;

    res.json(book);
});

// Delete a book
app.delete("/books/:id", function (req, res) {
    const bookId = Number(req.params.id);
    const oldLength = books.length;

    books = books.filter(function (item) {
        return item.id !== bookId;
    });

    if (books.length === oldLength) {
        return res.status(404).json({ message: "Book not found" });
    }

    res.json({ message: "Book deleted successfully" });
});

app.listen(3000, function () {
    console.log("Book API is running at http://localhost:3000");
});
