import React, { useState, useEffect, useRef } from "react";

const Chatbot = ({ closeChat }) => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there! How can I help you?" },
    { id: 2, text: "I hate uh?" },
    { id: 3, text: "I hate uh?" },
    { id: 4, text: "I hate uh?" },
    { id: 5, text: "I hate uh?" },
    { id: 5, text: "I hate uh?" },
    { id: 5, text: "I hate uh?" },
    { id: 5, text: "I hate uh?" },
    { id: 5, text: "I hate uh?" },
    { id: 5, text: "I hate uh?" },
  ]);
  const [userInput, setUserInput] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [firstClick, setFirstClick] = useState(true);
  const [bottomPosition, setBottomPosition] = useState(0);
  const chatbotRef = useRef(null);

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  useEffect(() => {
    setBottomPosition(0);
  }, []);

  const handleSendMessage = () => {
    if (firstClick && userInput.trim() === "") {
      setShowForm(true);
      setFirstClick(false);
      return;
    }

    if (userInput.trim() === "") return;

    setMessages([...messages, { id: messages.length + 1, text: userInput }]);
    setUserInput("");

    if (showForm) {
      setShowForm(false);
    }
  };

  useEffect(() => {
    const handleBodyClick = (e) => {
      if (!chatbotRef.current.contains(e.target)) {
        closeChat();
      }
    };

    document.body.addEventListener("click", handleBodyClick);

    return () => {
      document.body.removeEventListener("click", handleBodyClick);
    };
  }, [closeChat]);

  return (
    <div className="fixed bottom-16 right-6 z-50" ref={chatbotRef}>
      <div
        style={{
          width: "300px",
          height: "300px",
          border: "1px solid red",
          borderRadius: "6px",
          position: "relative",
          backgroundColor: "white",
          height: "430px",
        }}
      >
        <div style={{ bottom: `${bottomPosition}px` }} className="h-[370px] overflow-y-scroll">
          {" "}
          {messages.map((message) => (
            <div
              
              className="scroll mt-2 bg-black rounded-3xl  w-[93%] mx-auto p-1 pl-3 text-white"
              key={message.id}
            >
              {message.text}
            </div>
          ))}
        </div>

        {showForm && (
          <div
            className="mt-6 bg-green-400 rounded-3xl w-[93%] mx-auto p-1 pl-3 text-white"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 1,
            }}
          >
            This is a form!
          </div>
        )}
      </div>
      <div className="flex justify-start gap-2 mt-2 absolute bottom-2 left-3">
        <input
          className="outline-none border-none bg-gray-300 rounded-3xl"
          type="text"
          value={userInput}
          onChange={handleUserInput}
          placeholder="Type your message..."
          onClick={(e) => e.stopPropagation()}
        />
        <svg
          onClick={handleSendMessage}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 mt-[8px] text-red cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default Chatbot;
