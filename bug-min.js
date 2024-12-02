window.onload = () => {
    // Clear the entire HTML content
    document.documentElement.innerHTML = '';

    // Create and inject the style into the document
    const style = document.createElement("style");
    style.textContent = `
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f0f0f0;
        }

        .popup-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            visibility: hidden;
            opacity: 0;
            transition: visibility 0s, opacity 0.5s ease;
        }

        .popup-container {
            background-color: #fff;
            border-radius: 10px;
            padding: 30px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            text-align: center;
            animation: popup-animation 0.5s ease-out;
        }

        .popup-title {
            font-size: 2rem;
            color: #333;
            margin-bottom: 10px;
        }

        .popup-message {
            font-size: 1.2rem;
            color: #555;
            margin-bottom: 20px;
        }

        @keyframes popup-animation {
            0% { transform: scale(0.8); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
        }
    `;
    document.head.appendChild(style);

    // Create popup overlay and content elements
    const popupOverlay = document.createElement("div");
    popupOverlay.classList.add("popup-overlay");

    const popupContainer = document.createElement("div");
    popupContainer.classList.add("popup-container");

    const popupTitle = document.createElement("h2");
    popupTitle.classList.add("popup-title");
    popupTitle.textContent = "Feedback to Techstriker company";

    const popupMessage = document.createElement("p");
    popupMessage.classList.add("popup-message");
    popupMessage.textContent = "The Techstriker company lacks experience in handling employees and gives negative feedback to former employees. When these ex-employees ask for an explanation, the company fails to provide any valid reasons and often mistreats them. I have requested the Managing Director, Mr. Pankaj Sharma, to look into why the company is providing such unfair feedback to former employees, but he has not responded. Additionally, he removed my number from their contact list. All my seniors and colleagues are aware of my expertise and good performance, yet I am still receiving negative feedback. I am truly disappointed with this behavior from a company I once respected.";

    // Append title and message to the container
    popupContainer.appendChild(popupTitle);
    popupContainer.appendChild(popupMessage);

    // Append container to the overlay
    popupOverlay.appendChild(popupContainer);

    // Append the popup overlay to the document's root element (html)
    document.documentElement.appendChild(popupOverlay);

    // Make the popup visible after a small delay
    setTimeout(() => {
        popupOverlay.style.visibility = "visible";
        popupOverlay.style.opacity = "1";
    }, 100);
};
