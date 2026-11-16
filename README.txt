EXPERIMENT 8 - BOOK MANAGEMENT REST API

1. Open this folder in VS Code.
2. Open Terminal in VS Code.
3. Run: npm install
4. Run: npm start
5. The server runs at http://localhost:3000

Test the API using Postman:

GET    http://localhost:3000/books
POST   http://localhost:3000/books
PUT    http://localhost:3000/books/1
DELETE http://localhost:3000/books/1

For POST and PUT, choose Body > raw > JSON in Postman.

Example JSON:
{
  "title": "The Alchemist",
  "author": "Paulo Coelho"
}

Note: This beginner version stores books in an array. The data resets when the server is restarted.
