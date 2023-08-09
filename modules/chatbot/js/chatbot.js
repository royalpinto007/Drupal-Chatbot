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
	const predefinedResponses = {
		hi: "Hello, how can I assist you with Drupal today?",
		hello: "Hi there, how can I help you with your Drupal-related questions?",
		"what is drupal":
			"Drupal is a powerful open-source content management system (CMS) that allows you to build and manage websites and web applications.",
		"how to install drupal":
			"To install Drupal, you need a web server, a database, and PHP. You can follow the installation guide on the Drupal website for detailed steps.",
		"drupal themes":
			"Drupal themes allow you to change the appearance of your website. You can find and install themes from the Drupal theme repository.",
		"drupal modules":
			"Drupal modules are add-ons that enhance the functionality of your website. You can search for and install modules to add new features.",
		"how to create content":
			"To create content in Drupal, log in to the admin panel, navigate to 'Content', and click 'Add content'. Choose the content type and fill in the details.",
		"user roles and permissions":
			"In Drupal, you can define user roles and assign different permissions to each role. This controls what users can do on your site.",
		"how to update drupal":
			"Regularly updating Drupal core and contributed modules is important for security and performance. Backup your site and follow the update instructions.",
		"drupal security best practices":
			"Some security best practices include keeping Drupal and modules up-to-date, using strong passwords, and configuring proper permissions.",
		"how to optimize performance":
			"To optimize Drupal's performance, you can use caching, enable a Content Delivery Network (CDN), and optimize your server's settings.",
		"how to troubleshoot errors":
			"When troubleshooting errors, check the error logs, disable recently installed modules, and review recent changes to identify the issue.",
		"drupal community":
			"The Drupal community is a supportive network of developers, designers, and users. You can engage through forums, events, and online discussions.",
		"how to contribute to drupal":
			"You can contribute to Drupal by writing documentation, submitting patches, testing modules, and participating in community discussions.",
		// Add more predefined responses here
	};

	function sendMessage() {
		const userMessage = userInput.value.toLowerCase().trim();
		if (userMessage) {
			appendMessage(userMessage, "user-message");

			if (predefinedResponses.hasOwnProperty(userMessage)) {
				const botResponse = predefinedResponses[userMessage];
				appendMessage(botResponse, "bot-message");
			} else {
				// Handle cases where there's no predefined response
				const botResponse =
					"I'm sorry, I don't have a predefined response for that question. How can I assist you?";
				appendMessage(botResponse, "bot-message");
			}

			userInput.value = "";
		}
	}

	// async function registerServiceWorker() {
	//   try {
	//     if ("serviceWorker" in navigator) {
	//       const registration = await navigator.serviceWorker.register("/sw.js");

	//       registration.addEventListener("updatefound", () => {
	//         // If updatefound is fired, it means that there's
	//         // a new service worker being installed.
	//         const installingWorker = registration.installing;
	//         console.log("A new service worker is being installed:", installingWorker);

	//         // You can listen for changes to the installing service worker's
	//         // state via installingWorker.onstatechange
	//       });

	//       console.log("Service worker registered successfully.");
	//     } else {
	//       console.error("Service workers are not supported.");
	//     }
	//   } catch (error) {
	//     console.error(`Service worker registration failed: ${error}`);
	//   }
	// }

	// registerServiceWorker();

	// function sendMessage() {
	//   const userMessage = userInput.value;
	//   callChatGptApi();
	//   // if (userMessage) {
	//   // 	appendMessage(userMessage, "user-message");
	//   // 	userInput.value = "";
	//   // }
	// }
	// async function getAccessToken() {
	//   const resp = await fetch("https://chat.openai.com/api/auth/session");
	//   if (resp.status === 403) {
	//     throw new Error("CLOUDFLARE");
	//   }
	//   if (resp.status === 429) {
	//     throw new Error("RATE_LIMIT");
	//   }
	//   const data = await resp.json().catch(() => ({}));
	//   if (!data.accessToken) {
	//     throw new Error("UNAUTHORIZED");
	//   }
	//   // console.log('accessToken', data.accessToken)
	//   return data.accessToken;
	// }

	// async function callChatGptApi(tabId, query, accessToken, messageId) {
	//   try {
	//     const Token = await getAccessToken();
	//     console.log(Token);
	//     //   const resp = await fetch('https://chat.openai.com/backend-api/conversation',{
	//     // 	method:'POST',
	//     // 	headers:{
	//     // 		'Content-Type':'application/json',
	//     // 		"Authorization":`Bearer ${getAccessToken}`
	//     // 	},
	//     // 	body:JSON.stringify({
	//     // 	  action: "next",
	//     // 	  messages: [
	//     // 		{
	//     // 		  id: messageId,
	//     // 		  role: "user",
	//     // 		  content: {
	//     // 			content_type: "text",
	//     // 			parts: [query]
	//     // 		  }
	//     // 		}
	//     // 	  ],
	//     // 	  model: "text-davinci-002-render",
	//     // 	  parent_message_id: "7d837bee-5775-42e7-9bac-65a1bf7620b5"
	//     // 	})
	//     //   })
	//     //   if(resp.status === 429){
	//     // 	throw new Error('RATE_LIMIT')
	//     //   }
	//     // //   streamAsyncIterable(resp.body, tabId, accessToken)
	//     // console.log(rest.body)
	//   } catch (e) {
	//     console.log(e);
	//   }
	// }

	// async function streamAsyncIterable(stream, tabId, accessToken) {
	//   const reader = stream.getReader();
	//   let chunks = "";
	//   try {
	//     while (true) {
	//       const { done, value } = await reader.read();
	//       if (done) {
	//         return chunks;
	//       }
	//       const str = new TextDecoder("utf-8").decode(value, { stream: true });
	//       if (chat_gpt_generation === "STOP") {
	//         reader.releaseLock();
	//         stream.cancel();
	//         return;
	//       }
	//       await new Promise((resolve, reject) => {
	//         setTimeout(() => {
	//           chrome.tabs.sendMessage(
	//             tabId,
	//             {
	//               type: "chat-gpt-api-response",
	//               data: {
	//                 text: str,
	//                 accessToken: accessToken,
	//               },
	//             },
	//             function () {
	//               // we are accessing the last error here to avoid the error message being thrown
	//               // you can read more about it here: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/lastError
	//               const err = chrome.runtime.lastError;
	//             }
	//           );
	//           resolve("done");
	//         }, 100);
	//       });
	//       chunks = chunks + str;
	//     }
	//   } finally {
	//     reader.releaseLock();
	//   }
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
		messageElement.classList.add(className, "message");
		messageElement.innerText = message;
		messageElement.style.marginBottom = "5px";
		const lineBreakElement = document.createElement("br");
		chatlog.appendChild(messageElement);
		chatlog.appendChild(lineBreakElement); // Add the line break
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
