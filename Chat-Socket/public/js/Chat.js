const SocketIO = io();

function ClickBtn() {
    SocketIO.emit('chat', {
        message: document.getElementById('msg').value,
        user: document.getElementById('user').value
    });
}

SocketIO.on('chat', function (data) {
    console.log(data);
    document.getElementById('tags').innerHTML += `<span class="tag is-info">${data.user}: ${data.message}</span>`;
})