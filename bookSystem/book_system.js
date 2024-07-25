// Declare the books array
const books = [];

// Function to add a book to the list
function addBook() {
    // Retrieve values from input fields
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);

    // Check if all fields are filled correctly
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        // Create a book object
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };

        // Add the book to the books array
        books.push(book);

        // Display the updated list of books
        showBooks();

        // Clear the input fields
        clearInputs();
    } else {
        // Alert the user if the fields are not filled correctly
        alert('Please fill in all fields correctly.');
    }
}

// Function to display the list of books
function showBooks() {
    // Create HTML content for each book
    const booksDiv = books.map((book, index) => `
        <h1>Book Number: ${index + 1}</h1>
        <p><strong>Book Name: </strong>${book.name}</p>
        <p><strong>Author Name:</strong> ${book.authorName}</p>
        <p><strong>Book Description:</strong> ${book.bookDescription}</p>
        <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>
        <button onclick="deleteBook(${index})">Delete</button>`
    );

    // Display the books on the web page
    document.getElementById('books').innerHTML = booksDiv.join('');
}

// Function to delete a book from the list
function deleteBook(index) {
    // Remove the book from the array
    books.splice(index, 1);

    // Refresh the displayed list of books
    showBooks();
}

// Function to clear input fields
function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}
