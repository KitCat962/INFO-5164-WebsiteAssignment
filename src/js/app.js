import { signOut } from "firebase/auth"
import { auth, db } from "./firebase"
import { doc, getDoc } from "firebase/firestore"

const p_user = document.getElementById('p_user')
auth.onAuthStateChanged(user => {
    if (!user)
        window.location = "/"
    else
        p_user.textContent = `Logged in as ${user.displayName}`
})

const btn_logout = document.getElementById('btn_logout')
btn_logout.addEventListener('click', event => {
    signOut(auth)
})

function formatRating(element, rating) {
    const parsedRating = Math.min(5, Math.max(0, rating))
    element.innerHTML = ""
    for(let i=0;i<5;i++){
        const p = document.createElement('p')
        p.textContent = i<parsedRating?"★":"☆"
        element.appendChild(p)
    }
    // return "★".repeat(parsedRating)+"☆".repeat(5-parsedRating)
}

const form_addbook = document.getElementById('form_addbook')
const text_bookname = document.getElementById('text_bookname')
const text_bookauthor = document.getElementById('text_bookauthor')
const select_genres = document.getElementById('select_genres')
const div_rating = document.getElementById('div_rating')
const range_rating = document.getElementById('range_rating')
const text_url = document.getElementById('text_url')
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
    
formatRating(div_rating, parseInt(range_rating.value))
range_rating.addEventListener('input', function(){
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
    const genres = select_genres.selectedOptions
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


});




const book = {
    name: '',
    author: '',
    genres: [''],
    rating: 10,
    url: ''
}