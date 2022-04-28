const bookList = document.querySelector("#list")
const showPanel = document.querySelector("#show-panel")


document.addEventListener("DOMContentLoaded", function() {
    getBooks()
});

function getBooks () {
    fetch("http://localhost:3000/books")
    .then(r => r.json())
    .then(bookArray => appendBooks(bookArray) )
}

function appendBooks (bookArray) {
 
    bookArray.forEach(book => {
        const bookLi = document.createElement("li")
        bookLi.innerText = book.title
        bookLi.addEventListener("click", () => {
            bookDetails(book)
        })
        
        
        bookList.append(bookLi)
    })
}

function bookDetails(book){
    console.log(book)
 
    const bookDiv = document.createElement("div")
    const bookImg = document.createElement("img")
    const bookH1 = document.createElement("h1")
    const bookH2 = document.createElement("h2")
    const bookP = document.createElement("p")
    const bookUl = document.createElement("ul")
    const bookLikeHeader = document.createElement("h3")

    bookImg.src = book.img_url
    bookH1.innerText = book.title
    bookH2.innerText = book.subtitle
    bookP.innerText = book.description
    bookLikeHeader.innerText = "People Who Liked the book"

    bookUl.append(bookLikeHeader)
    bookDiv.append(bookImg)
    showPanel.append(bookDiv)
}