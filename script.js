document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        sendMessage();
    }
});

function sendMessage() {
    var userInput = document.getElementById('user-input');
    var message = userInput.value;
    
    if (message.trim() !== '') {
        var chatLog = document.getElementById('chat-log');
        var messageElement = document.createElement('p');
        messageElement.innerText = message;
        chatLog.appendChild(messageElement);
        
        userInput.value = '';
    }
}
