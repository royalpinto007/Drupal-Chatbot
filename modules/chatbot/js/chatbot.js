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
			chatbotIcon.style.display = "block";
		}
	});

	function sendMessage() {
		const userMessage = userInput.value;
		if (userMessage) {
			appendMessage(userMessage, "user-message");
			userInput.value = "";
		}
	}

	// Open AI
	// Comment out the above sendMessage function and 
	// uncomment the below sendMessage function to use Open AI
	// async function sendMessage() {
	// 	const userMessage = userInput.value;
	// 	if (userMessage) {
	// 		appendMessage(userMessage, "user-message");
	// 		userInput.value = "";

	// 		const response = await fetch(
	// 			"https://api.openai.com/v1/chat/completions",
	// 			{
	// 				method: "POST",
	// 				headers: {
	// 					Authorization:
	// 						"Bearer API_KEY_HERE",
	// 					"Content-Type": "application/json",
	// 				},
	// 				body: JSON.stringify({
	// 					model: "gpt-3.5-turbo",
	// 					messages: [
	// 						{
	// 							role: "system",
	// 							content:
	// 								"You can start the conversation with a system message.",
	// 						},
	// 						{
	// 							role: "user",
	// 							content: userMessage,
	// 						},
	// 					],
	// 					max_tokens: 50,
	// 					temperature: 0.7,
	// 					n: 1,
	// 				}),
	// 			}
	// 		);

	// 		// if (response.status === 429) {
	// 		// 	// If rate limit exceeded, retry after a delay
	// 		// 	const retryAfter = parseInt(response.headers.get("Retry-After"));
	// 		// 	await new Promise((resolve) => setTimeout(resolve, retryAfter * 1000));
	// 		// 	sendMessage(); // Retry the API request
	// 		// 	return;
	// 		// }

	// 		console.log(response);

	// 		const data = await response.json();
	// 		console.log(data); 

	// 		const aiMessage =
	// 			data.choices && data.choices.length > 0
	// 				? data.choices[0].message.content.trim()
	// 				: "";
	// 		console.log(aiMessage);

	// 		appendMessage(aiMessage, "ai-message");
	// 	}
	// }

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
		messageElement.classList.add("bot-message");
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
