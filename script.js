function sendMessage() {
    var userInput = document.getElementById("userInput").value;
    if (userInput.trim() === "") return;

    var chatlogs = document.getElementById("chatlogs");
    var userMessage = "<div><strong>You:</strong> " + userInput + "</div>";
    chatlogs.innerHTML += userMessage;

    document.getElementById("userInput").value = ""; // Clear input field

    // Simulate chatbot response
    setTimeout(function() {
        var botMessage = getBotResponse(userInput);
        chatlogs.innerHTML += "<div><strong>Bot:</strong> " + botMessage + "</div>";
        chatlogs.scrollTop = chatlogs.scrollHeight; // Scroll to bottom
    }, 1000);
}

function getBotResponse(userInput) {
    // Add basic logic for responses
    if (userInput.toLowerCase().includes("hello")) {
        return "Hi there! How can I help you today?";
    } else if (userInput.toLowerCase().includes("how are you")) {
        return "I'm doing well, thank you for asking!";
    } else {
        return "I'm sorry, I don't understand that. Can you ask something else?";
    }
}
