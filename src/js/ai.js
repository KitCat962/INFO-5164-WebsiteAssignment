import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";
import { GoogleGenerativeAI } from "@google/generative-ai";

let model = null
export async function getModel() {
    if (model) return model
    const snapshot = await getDoc(doc(db, `static/googlegemini`));
    const key = snapshot.get('key')
    model = new GoogleGenerativeAI(key).getGenerativeModel({ model: "gemini-1.5-flash" })
    return model
}

async function processMessage(message) {
    const model = await getModel()
    const { response } = await model.generateContent(message)
    console.log(response)
    return response.text()
}

export function bindAI(element) {
    const container = document.createElement('div')
    container.className = "ai container closed"


    const headerContainer = document.createElement('div')
    headerContainer.className = "flex row"
    const openCloseButton = document.createElement('button')
    openCloseButton.className = "tertiary"
    openCloseButton.textContent = ">"
    openCloseButton.style.fontWeight = "bold"
    headerContainer.appendChild(openCloseButton)
    const headerSpacer = document.createElement('div')
    headerSpacer.className = "spacer"
    headerContainer.appendChild(headerSpacer)

    container.appendChild(headerContainer)


    const messageContainer = document.createElement('div')
    messageContainer.className = "ai message_container"
    container.appendChild(messageContainer)


    const inputContainer = document.createElement('div')
    inputContainer.className = "flex row"

    const textBox = document.createElement('input')
    textBox.type = 'text'
    textBox.placeholder = 'Type something'
    textBox.className = 'spacer'
    inputContainer.appendChild(textBox)

    const submitButton = document.createElement('button')
    submitButton.textContent = 'Send'
    inputContainer.appendChild(submitButton)

    container.appendChild(inputContainer)


    function appendMessage(text, recieve) {
        const message = document.createElement('p')
        message.textContent = recieve ? "> " + text : text + " <"
        message.className = `ai message ${recieve ? 'recieve' : 'send'}`
        messageContainer.appendChild(message)
    }

    async function submit() {
        const message = textBox.value.trim()
        if (message.length === 0) return
        appendMessage(message, false)
        textBox.value = '...'
        textBox.disabled = true
        const response = await processMessage(message.toLowerCase())
        textBox.value = ''
        textBox.disabled = false
        appendMessage(response, true)
        textBox.focus()
    }

    openCloseButton.addEventListener('click', event => {
        const closed = container.className.includes('closed')
        container.className = "ai container " + (closed ? '' : 'closed');
        openCloseButton.textContent = closed?'v':'>'
    })
    submitButton.addEventListener('click', submit)
    textBox.addEventListener('keypress', event => {
        if (event.key == "Enter")
            submit()
    })


    // appendMessage('Hello World!', true)
    // appendMessage('a', false)
    // appendMessage('a', true)
    // appendMessage('who are you?', false)
    // appendMessage("I am a large language model, trained by Google. I'm a computer program designed to process information and respond to a wide range of prompts and questions. I don't have personal experiences, beliefs, or feelings. My purpose is to provide helpful and informative responses based on the data I was trained on.", true)

    appendMessage('Hello! I am a personal assistent here to aid in book recommendations. Tell me what genres you enjoy and I can recommend some books for you.', true)

    element.appendChild(container)
}