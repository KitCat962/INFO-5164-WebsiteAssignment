import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query, updateDoc, where } from "firebase/firestore";
import { auth, db } from "./firebase";

export async function addBook(name, author, genres, rating, url) {
    if (!auth.currentUser) return null
    try {
        const result = await addDoc(collection(db, `users/${auth.currentUser.uid}/books`), {
            name,
            author,
            genres,
            rating,
            url: url ? url : null,
            status: "Reading"
        })
        return result.id
    } catch {
        return null
    }
}
export async function removeBook(id) {
    if (!auth.currentUser) return null
    await deleteDoc(doc(db, `users/${auth.currentUser.uid}/books`, id))
}
export async function getBooks() {
    if (!auth.currentUser) return []
    const snapshot = await getDocs(collection(db, `users/${auth.currentUser.uid}/books`))
    return formatCollectionData(snapshot)
}
export async function getBooksByGenre(genre) {
    if (!auth.currentUser) return []
    const snapshot = await getDocs(query(
        collection(db, `users/${auth.currentUser.uid}/books`),
        where("genre", "array-contains", genre)
    ))
    return formatCollectionData(snapshot)
}
export async function setBookStatus(id, status) {
    if (!auth.currentUser) return false
    await updateDoc(doc(db, `users/${auth.currentUser.uid}/books`, id), {
        status: status
    })
    return true
}
export function addBookChangeListener(fn) {
    if (!auth.currentUser) throw 'No authenticated user'
    onSnapshot(collection(db, `users/${auth.currentUser.uid}/books`), snapshot => fn(formatCollectionData(snapshot)))
}
function formatCollectionData(snapshot) {
    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))
}