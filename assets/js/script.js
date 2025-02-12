function sendMessage() {
    let input = document.getElementById("messageInput");
    let messageBox = document.querySelector(".chat-box");

    if (input.value.trim() !== "") {
        let newMessage = document.createElement("div");
        newMessage.classList.add("message", "sent");
        newMessage.innerText = input.value;
        messageBox.appendChild(newMessage);
        input.value = "";
    }
}

function submitFeedback() {
    let rating = document.getElementById("rating").value;
    let feedbackText = document.getElementById("feedbackText").value;
    let reviewsList = document.getElementById("reviewsList");

    if (feedbackText.trim() === "") {
        alert("Please enter your feedback.");
        return;
    }

    let reviewItem = document.createElement("li");
    reviewItem.classList.add("list-group-item");
    reviewItem.innerHTML = `<strong>⭐️ Rating: ${rating}</strong><br>${feedbackText}`;
    
    reviewsList.appendChild(reviewItem);

    // Clear the form
    document.getElementById("feedbackForm").reset();
}


function logout() {
    alert("Logging out...");
    // Redirect to login page (replace 'login.html' with your actual login page)
    window.location.href = "login.html";
}

