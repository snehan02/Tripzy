import { useState } from "react";
import Groq from "groq-sdk";
import "../../styles/chatbot.css";

function ChatBot() {
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [chat, setChat] = useState([
    {
      sender: "bot",
      text: "Hello! I'm Tripzy AI Travel Assistant. How can I help you plan your trip today?",
    },
  ]);

  const groq = new Groq({
    apiKey: import.meta.env.VITE_GROQ_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const speak = (text) => {
    if (!voiceEnabled) return;

    if (!window.speechSynthesis || !text) return;

    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(text);

    speech.lang = "en-US";
    speech.rate = 1;
    speech.pitch = 1;
    speech.volume = 1;

    window.speechSynthesis.speak(speech);
  };

  const getAIResponse = async (userText) => {
    try {
      const completion = await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",

        messages: [
          {
            role: "system",
            content: `
You are Tripzy AI Travel Assistant.

Available Tours:

1. Goa Beach Escape - ₹24,999 - 5 Days
2. Kashmir Paradise - ₹34,999 - 6 Days
3. Coorg Nature Retreat - ₹19,999 - 4 Days
4. Sydney Adventure - ₹94,999 - 7 Days
5. Melbourne Discovery - ₹79,999 - 5 Days

Answer only travel and Tripzy-related questions.
Keep responses short and helpful.
`,
          },
          {
            role: "user",
            content: userText,
          },
        ],
      });

      const botReply =
        completion?.choices?.[0]?.message?.content ||
        "Sorry, I couldn't generate a response.";

      speak(botReply);

      setChat((prev) => [
        ...prev,
        {
          sender: "bot",
          text: botReply,
        },
      ]);
    } catch (error) {
      console.error(error);

      setChat((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Unable to connect to AI service right now.",
        },
      ]);
    }
  };

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.start();

    recognition.onresult = async (event) => {
      const transcript = event.results[0][0].transcript;

      setMessage(transcript);

      const userMessage = {
        sender: "user",
        text: transcript,
      };

      setChat((prev) => [...prev, userMessage]);

      await getAIResponse(transcript);

      setMessage("");
    };

    recognition.onerror = (event) => {
      console.log("Speech Error:", event.error);
    };
  };

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = {
      sender: "user",
      text: message,
    };

    setChat((prev) => [...prev, userMessage]);

    const currentMessage = message;

    setMessage("");

    await getAIResponse(currentMessage);
  };

  return (
    <>
      {!isOpen && (
        <button
          className="chat-icon"
          onClick={() => {
            setIsOpen(true);

            speak("Hello. I am Tripzy AI Assistant. How can I help you today?");
          }}
        >
          💬
        </button>
      )}

      {isOpen && (
        <div className="chatbot">
          <div className="chat-header">
            <span>✈️ Tripzy AI Assistant</span>

            <div className="chat-actions">
              <button
                className="voice-toggle"
                onClick={() => {
                  if (voiceEnabled) {
                    window.speechSynthesis.cancel();
                  }

                  setVoiceEnabled(!voiceEnabled);
                }}
              >
                {voiceEnabled ? "🔊" : "🔇"}
              </button>

              <button
                className="close-chat"
                onClick={() => {
                  window.speechSynthesis.cancel();
                  setIsOpen(false);
                }}
              >
                ✖
              </button>
            </div>
          </div>

          <div className="chat-box">
            {chat.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chat-input">
            <input
              type="text"
              placeholder="Ask about tours..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
            />

            <button className="voice-btn" onClick={startListening}>
              🎤
            </button>

            <button className="send-btn" onClick={sendMessage}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatBot;
