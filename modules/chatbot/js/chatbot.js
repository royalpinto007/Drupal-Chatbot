document.addEventListener("DOMContentLoaded", function () {
	const chatlog = document.getElementById("chatlog");
	const userInput = document.getElementById("user-input");
	const sendBtn = document.getElementById("send-btn");

	function sendMessage() {
		const userMessage = userInput.value;
		if (userMessage) {
			appendMessage(userMessage, "user-message");
			
			userInput.value = "";
		}
	}

	sendBtn.addEventListener("click", sendMessage);

	userInput.addEventListener("keydown", function (event) {
		if (event.keyCode === 13) {
			event.preventDefault();
			sendMessage();
		}
	});

	function appendMessage(message, className) {
		const messageElement = document.createElement("p");
		messageElement.classList.add(className);
		messageElement.textContent = message;
		chatlog.appendChild(messageElement);
		chatlog.scrollTop = chatlog.scrollHeight;
	}
});

// to move the chatbot wherever the user wants
const chatbotContainer = document.getElementById("chatbotContainer");

let isDragging = false;
let dragStartX;
let dragStartY;
let chatbotStartX;
let chatbotStartY;

function startDragging(event) {
	isDragging = true;
	dragStartX = event.clientX;
	dragStartY = event.clientY;
	chatbotStartX = chatbotContainer.offsetLeft;
	chatbotStartY = chatbotContainer.offsetTop;
}

function drag(event) {
	if (isDragging) {
		const dragX = event.clientX - dragStartX;
		const dragY = event.clientY - dragStartY;
		const newLeft = chatbotStartX + dragX;
		const newTop = chatbotStartY + dragY;
		chatbotContainer.style.left = newLeft + "px";
		chatbotContainer.style.top = newTop + "px";
	}
}

function stopDragging() {
	isDragging = false;
}

// Attach event listeners for dragging
chatbotContainer.addEventListener("mousedown", startDragging);
document.addEventListener("mousemove", drag);
document.addEventListener("mouseup", stopDragging);
