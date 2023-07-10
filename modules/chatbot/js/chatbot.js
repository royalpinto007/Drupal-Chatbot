(function () {
	const chatlog = document.getElementById("chatlog");
	const userInput = document.getElementById("user-input");
	const sendBtn = document.getElementById("send-btn");
	const chatbotIcon = document.getElementById("chatbot-icon");
	const chatWindow = document.getElementById("chat-window");

	chatbotIcon.addEventListener("click", (event) => {
		event.stopPropagation();
		if (chatWindow.style.display === "none") {
			chatWindow.style.display = "block";
			chatbotIcon.style.display = "none";
		} else {
			chatWindow.style.display = "none";
			chatbotIcon.style.display = 'block';
		}
	});

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
		const messageElement = document.createElement("div");
		messageElement.classList.add(className);
		messageElement.innerText = message;
		chatlog.appendChild(messageElement);
		chatlog.scrollTop = chatlog.scrollHeight;
	}
})();

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
chatbotContainer.addEventListener("mousemove", drag);
chatbotContainer.addEventListener("mouseup", stopDragging);
