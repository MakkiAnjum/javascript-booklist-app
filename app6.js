class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    AddBookToList(book){
        const list = document.getElementById('book-form');
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class='delete'>X</a></td>
        `;

        list.appendChild(row);
    }

    showAlert(message, className){

    }
}

document.querySelector('#book-form').addEventListener('submit', function(e){

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    const book = new Book(title, author, isbn);

    const ui = new UI();
    ui.addBookToList(book);

    e.preventDefault();
});