// Define a list of books
var books = ["The Great Gatsby", "To Kill a Mockingbird", "1984", "The Catcher in the Rye", "The Hobbit"];

// Print the list of books
console.log("List of Books:");
for (var i = 0; i < books.length; i++) {
    console.log((i + 1) + ". " + books[i]);
}

# Define a list of books
books = ["The Great Gatsby", "To Kill a Mockingbird", "1984", "The Catcher in the Rye", "The Hobbit"]

# Print the list of books
print("List of Books:")
for i, book in enumerate(books, start=1):
    print(f"{i}. {book}")


    class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author

# Creating instances of the Book class
book1 = Book(title="The Great Gatsby", author="F. Scott Fitzgerald")
book2 = Book(title="To Kill a Mockingbird", author="Harper Lee")
book3 = Book(title="1984", author="George Orwell")

# Printing book details
print("Book 1:")
print(f"Title: {book1.title}")
print(f"Author: {book1.author}")

print("\nBook 2:")
print(f"Title: {book2.title}")
print(f"Author: {book2.author}")

print("\nBook 3:")
print(f"Title: {book3.title}")
print(f"Author: {book3.author}")

// Define a Book object
function Book(title, author) {
    this.title = title;
    this.author = author;
}

// Create instances of the Book object
var book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
var book2 = new Book("To Kill a Mockingbird", "Harper Lee");
var book3 = new Book("1984", "George Orwell");

// Log book details to the console
console.log("Book 1:");
console.log("Title: " + book1.title);
console.log("Author: " + book1.author);

console.log("\nBook 2:");
console.log("Title: " + book2.title);
console.log("Author: " + book2.author);

console.log("\nBook 3:");
console.log("Title: " + book3.title);
console.log("Author: " + book3.author);

// Define a Book object
function Book(title, author) {
    this.title = title;
    this.author = author;
}

// Create instances of the Book object
var book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
var book2 = new Book("To Kill a Mockingbird", "Harper Lee");
var book3 = new Book("1984", "George Orwell");

// Log book details to the console
console.log("Book 1:");
console.log("Title: " + book1.title);
console.log("Author: " + book1.author);

console.log("\nBook 2:");
console.log("Title: " + book2.title);
console.log("Author: " + book2.author);

console.log("\nBook 3:");
console.log("Title: " + book3.title);
console.log("Author: " + book3.author);
// Define a User object
function User(username, email) {
    this.username = username;
    this.email = email;
}

// Define a Book object
function Book(title, author) {
    this.title = title;
    this.author = author;
}

// Create instances of the User and Book objects
var newUser = new User("john_doe", "john@example.com");

// Create instances of the Book object
var book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
var book2 = new Book("To Kill a Mockingbird", "Harper Lee");
var book3 = new Book("1984", "George Orwell");

// Log user details to the console
console.log("New User:");
console.log("Username: " + newUser.username);
console.log("Email: " + newUser.email);

// Log book details to the console
console.log("\nBook 1:");
console.log("Title: " + book1.title);
console.log("Author: " + book1.author);

console.log("\nBook 2:");
console.log("Title: " + book2.title);
console.log("Author: " + book2.author);

console.log("\nBook 3:");
console.log("Title: " + book3.title);
console.log("Author: " + book3.author);

// Sample book data (for demonstration purposes)
var books = [
    { title: "Book 1", author: "Author 1", isbn: "1234567890" },
    { title: "Book 2", author: "Author 2", isbn: "2345678901" },
    { title: "Book 3", author: "Author 1", isbn: "3456789012" },
    // Add more books as needed
];

// Simulated asynchronous function to search for books by title
function searchByTitle(title) {
    return new Promise(function (resolve, reject) {
        // Simulate searching for books
        setTimeout(function () {
            var matchingBooks = books.filter(function (b) {
                // Case-insensitive search
                return b.title.toLowerCase().includes(title.toLowerCase());
            });

            if (matchingBooks.length > 0) {
                resolve(matchingBooks); // Books found, resolve with the book data
            } else {
                reject(new Error("No books found for the title")); // No books found, reject with an error
            }
        }, 1000); // Simulating a delay of 1 second
    });
}

// Usage example
var titleToSearch = "Book 1";

searchByTitle(titleToSearch)
    .then(function (books) {
        console.log("Books found by title:", books);
    })
    .catch(function (error) {
        console.error("Error searching by title:", error.message);
    });

    // Sample book data (for demonstration purposes)
var books = [
    { title: "Book 1", author: "Author 1", isbn: "1234567890" },
    { title: "Book 2", author: "Author 2", isbn: "2345678901" },
    { title: "Book 3", author: "Author 1", isbn: "3456789012" },
    // Add more books as needed
];

// Simulated asynchronous function to search for books by author
function searchByAuthor(author) {
    return new Promise(function (resolve, reject) {
        // Simulate searching for books
        setTimeout(function () {
            var matchingBooks = books.filter(function (b) {
                return b.author === author;
            });

            if (matchingBooks.length > 0) {
                resolve(matchingBooks); // Books found, resolve with the book data
            } else {
                reject(new Error("No books found for the author")); // No books found, reject with an error
            }
        }, 1000); // Simulating a delay of 1 second
    });
}

// Usage example
var authorToSearch = "Author 1";

searchByAuthor(authorToSearch)
    .then(function (books) {
        console.log("Books found by author:", books);
    })
    .catch(function (error) {
        console.error("Error searching by author:", error.message);
    });
