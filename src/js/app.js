import { signOut } from "firebase/auth"
import { auth, db } from "./firebase"
import { collection, doc, getDoc, onSnapshot } from "firebase/firestore"
import { addBook, addBookChangeListener, getBooks, removeBook, setBookStatus } from "./api"

const statuses = [
    "Reading",
    "Completed",
    "Want to Read",
    "Dropped"
]

const p_user = document.getElementById('p_user')
const btn_logout = document.getElementById('btn_logout')
btn_logout.addEventListener('click', event => signOut(auth))

const form_addbook = document.getElementById('form_addbook')
const text_bookname = document.getElementById('text_bookname')
const text_bookauthor = document.getElementById('text_bookauthor')
const select_genres = document.getElementById('select_genres')
const div_rating = document.getElementById('div_rating')
const range_rating = document.getElementById('range_rating')
const text_url = document.getElementById('text_url')

const div_bookcontainer = document.getElementById('div_bookcontainer')

auth.onAuthStateChanged(user => {
    if (!user)
        window.location = "/"
    else {
        p_user.textContent = `Logged in as ${user.displayName}`
        addBookChangeListener(renderBooks)
        getDoc(doc(db, 'static', 'genres'))
            .then(snapshot => {
                const genres = snapshot.get('genres')
                console.log(genres)
                for (let genre of genres) {
                    const option = document.createElement('option')
                    option.value = genre
                    option.label = genre
                    select_genres.appendChild(option)
                }
            })
            .catch(err => console.log(err))
    }
})

formatRating(div_rating, parseInt(range_rating.value))
range_rating.addEventListener('input', function () {
    formatRating(div_rating, parseInt(this.value))
})
form_addbook.addEventListener('submit', function (event) {
    event.preventDefault()
    text_bookname.setCustomValidity('')
    text_bookauthor.setCustomValidity('')
    select_genres.setCustomValidity('')
    const errors = {}
    const name = text_bookname.value.trim()
    if (name.length === 0) {
        errors.text_bookname = ['empty']
    }
    const author = text_bookauthor.value.trim()
    if (author.length === 0) {
        errors.text_bookauthor = ['empty']
    }
    // Converts the HTMLCollection to a normal array
    const genres = [...select_genres.selectedOptions].map(option => option.value)
    if (genres.length === 0) {
        errors.select_genres = ['empty']
    }
    const rating = parseInt(range_rating.value)
    const url = text_url.value.trim()

    if (Object.keys(errors).length !== 0) {
        if (errors.text_bookname)
            text_bookname.setCustomValidity('Name cannot be empty')
        if (errors.text_bookauthor)
            text_bookauthor.setCustomValidity('Author cannot be empty')
        if (errors.select_genres)
            select_genres.setCustomValidity('Must select at least one genre')
        return
    }

    addBook(name, author, genres, rating, url)
        .then(() => form_addbook.reset())
        .catch()
});

function renderBooks(books) {
    console.log(books)
    div_bookcontainer.innerHTML = ""
    // I wish I had JSX or something right about now
    for (let book of books) {
        console.log(book)
        const bookContainer = document.createElement('div')
        bookContainer.className = 'box flex row gap-md'

        {
            const container = document.createElement('div')
            container.className = "flex column gap-sm"

            const bookName = document.createElement('p')
            bookName.textContent = book.name
            container.appendChild(bookName)

            const bookAuthor = document.createElement('p')
            bookAuthor.textContent = book.author
            container.appendChild(bookAuthor)

            const bookGenres = document.createElement('p')
            bookGenres.textContent = book.genres.join(', ')
            container.appendChild(bookGenres)

            bookContainer.appendChild(container)
        }
        {
            const container = document.createElement('div')
            container.className = "flex column gap-sm"

            const bookRating = document.createElement('div')
            bookRating.className = 'rating_display'
            formatRating(bookRating, book.rating)
            container.appendChild(bookRating)

            if (book.url) {
                const bookURL = document.createElement('a')
                bookURL.textContent = bookURL.href = book.url
                container.appendChild(bookURL)
            }

            bookContainer.appendChild(container)
        }
        {
            const container = document.createElement('div')
            container.className = "flex column gap-md"

            const statusSelect = document.createElement('select')
            for (let status of statuses) {
                const option = document.createElement('option')
                option.selected = status === book.status
                option.label = status
                option.value = status
                statusSelect.appendChild(option)
            }
            statusSelect.addEventListener('change', event => setBookStatus(book.id, event.target.value))
            container.appendChild(statusSelect)


            const removeBookButton = document.createElement('button')
            removeBookButton.textContent = "Delete Book"
            removeBookButton.addEventListener('click', async event => {
                const result = confirm(`Are you sure you want to delete "${book.name}"?`)
                if (result)
                    removeBook(book.id)
            })
            container.appendChild(removeBookButton)

            bookContainer.appendChild(container)
        }

        div_bookcontainer.appendChild(bookContainer)
    }
}

function formatRating(element, rating) {
    const parsedRating = Math.min(5, Math.max(0, rating))
    element.innerHTML = ""
    for (let i = 0; i < 5; i++) {
        const p = document.createElement('p')
        p.textContent = i < parsedRating ? "★" : "☆"
        element.appendChild(p)
    }
    // return "★".repeat(parsedRating)+"☆".repeat(5-parsedRating)
}