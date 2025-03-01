/* script.js */
const API_URL = "https://bsgy6i7zs9.execute-api.eu-north-1.amazonaws.com/prod";

// Function to fetch and display messages
async function fetchMessages() {
    let response = await fetch(API_URL);
    let messages = await response.json();
    document.getElementById("messages").innerHTML = messages.map(msg => `<p>${msg.message}</p>`).join("");
}

// Function to send a new message
async function sendMessage() {
    let message = document.getElementById("messageInput").value;
    await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify({ message }),
        headers: { "Content-Type": "application/json" }
    });
    fetchMessages();  // Refresh messages
}

// Attach sendMessage to button
document.getElementById("sendMessageButton").addEventListener("click", sendMessage);

// Fetch messages when page loads
fetchMessages();


document.getElementById("heartButton").addEventListener("click", function () {
    for (let i = 0; i < 30; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 2 + 2) + "s";
        document.getElementById("heartContainer").appendChild(heart);
        setTimeout(() => heart.remove(), 3000);
    }
});
