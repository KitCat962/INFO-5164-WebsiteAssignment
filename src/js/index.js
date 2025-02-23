
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";

auth.onAuthStateChanged(user => {
    console.log(user)
    if (user)
        // eslint-disable-next-line no-undef
        window.location = process.env.NODE_ENV === "production" ? `/INFO-5164-WebsiteAssignment/app` : '/app'
})

const googleAuth = new GoogleAuthProvider();

const btn_login = document.getElementById('btn_login')
const p_message = document.getElementById('p_message')
const p_message_class = p_message.className
btn_login.addEventListener('click', () => {
    signInWithPopup(auth, googleAuth)
        .then(result => {
            console.log(result)
            console.log(auth.currentUser)
            // window.location = "/app"
        })
        .catch(err => {
            console.log(err)
            p_message.className = p_message_class + " error"
            p_message.textContent = JSON.stringify(err)
        })
})