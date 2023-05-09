const { io } = require("socket.io-client");


const socket = io("https://kyrun.netlify.apphttps://backend-team6.onrender.com/");
socket.on('connect', () =>{
    displayMessage(`You connected with id: ${socket.id}`)
})



form.addEventListener('submit', e => {
    e.preventDefault()
    const message = messageInput.value
    const room = roomInput.value

    if (message === "") return displayMessage(message)
    socket.emit('send-message', message, room)
    messageInput.value = ""
})

joinRoom.addEventListener('click', () => {
    const room = roomInput.value
    socket.emit('join-room', room, message =>{
        displayMessage(message)
    })
})

