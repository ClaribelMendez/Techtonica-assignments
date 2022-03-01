const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require("path")
const app = express();
const port = 3000;

app.get('/book', (req, res) => { res.sendFile(path.join(__dirname, '/new-book.html')); });

app.get('/books', (req, res) => {
    res.json(books);
});

// Where we will keep books
let books = [
    {"isbn":"978-0-06-250834-8",
    "title":"The Tibetan Book Of Living And Dying",
    "author":"Sogyal Rinpoche",
    "publishedDate":"1994",
    "publisher":"Harper Collins",
    "numberOfPages":"446"
    },

    {"isbn":"978-0-34-537974-0",
    "title":"Between Heaven And Earth",
    "author":"Harriet Beinfield, L.Ac",
    "publishedDate":"1992",
    "publisher":"Ballantine Books",
    "numberOfPages":"431"
    },

    {"isbn":"978-0-345-40987-4",
    "title":"Women Who Run With Wolves",
    "author":"Clarissa Pinkola Estes, Ph.D.",
    "publishedDate":"1992",
    "publisher":"Ballantine Books",
    "numberOfPages":"584"},
];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/book', (req, res) => {
    const book = req.body;

    // Output the book to the console for debugging
    console.log(book);
    books.push(book);

    res.send('Book is added to the database');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
