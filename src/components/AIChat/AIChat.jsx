import { useState, useEffect, useRef } from "react";import { askAI } from "../../api/groq";

import {
    FaRobot,
    FaPaperPlane,
    FaTimes,
    FaUtensils,
    FaCalendarAlt,
    FaClock,
    FaMapMarkerAlt
} from "react-icons/fa";

import "./AIChat.css";
import PageTransition from "../PageTransition";

function AIChat({ closeChat }) {

    const [message, setMessage] = useState("");

    const [messages, setMessages] = useState([
        {
            sender: "ai",
            text: "👋 Welcome to Spice Haven! I'm your AI Restaurant Assistant. How may I help you today?"
        }
    ]);

    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);

    // ================= SEND MESSAGE =================

    const sendMessage = async () => {

        if (!message.trim()) return;

        const userMessage = message;

        setMessages(prev => [
            ...prev,
            {
                sender: "user",
                text: userMessage
            }
        ]);

        setMessage("");

        setLoading(true);

        try {

            const aiReply = await askAI(userMessage);

            setMessages(prev => [
                ...prev,
                {
                    sender: "ai",
                    text: aiReply
                }
            ]);

        }
        catch {

            setMessages(prev => [
                ...prev,
                {
                    sender: "ai",
                    text: "Sorry! I'm unable to respond right now."
                }
            ]);

        }

        setLoading(false);

    };

    // ================= QUICK MESSAGE =================

    const quickMessage = async (text) => {

        setMessages(prev => [
            ...prev,
            {
                sender: "user",
                text: text
            }
        ]);

        setLoading(true);

        try {

            const aiReply = await askAI(text);

            setMessages(prev => [
                ...prev,
                {
                    sender: "ai",
                    text: aiReply
                }
            ]);

        }
        catch {

            setMessages(prev => [
                ...prev,
                {
                    sender: "ai",
                    text: "Sorry! Something went wrong."
                }
            ]);

        }

        setLoading(false);

    };
useEffect(() => {

    messagesEndRef.current?.scrollIntoView({
        behavior: "smooth"
    });

}, [messages, loading]);
    return (

      <PageTransition>
                <div className="ai-chat-panel">

            {/* Header */}

            <div className="ai-chat-header">

                <div className="ai-header-left">

                    <FaRobot className="ai-logo"/>

                    <div>

                        <h4>Spice Haven AI</h4>

                        <span>Online</span>

                    </div>

                </div>

                <button
                    className="ai-close-btn"
                    onClick={closeChat}
                >

                    <FaTimes/>

                </button>

            </div>

            {/* Suggestions */}

            <div className="ai-suggestions">

                <button onClick={() => quickMessage("I want to reserve a table")}>

                    <FaCalendarAlt/>
                    

                    Reserve Table

                </button>

                <button onClick={() => quickMessage("Show me your menu")}>

                    <FaUtensils/>

                    View Menu

                </button>

                <button onClick={() => quickMessage("What are your opening hours?")}>

                    <FaClock/>

                    Opening Hours

                </button>

                <button onClick={() => quickMessage("Where is your restaurant located?")}>

                    <FaMapMarkerAlt/>

                    Location

                </button>

            </div>

            {/* Chat */}

            <div className="ai-chat-body">

    {messages.map((msg, index) => (

        <div
            key={index}
            className={
                msg.sender === "ai"
                    ? "ai-message"
                    : "user-message"
            }
        >

            {msg.text}

        </div>

    ))}

    {loading && (

        <div className="ai-message">

            🤖 Spice Haven AI is typing...

        </div>

    )}

    {/* Auto Scroll */}

    <div ref={messagesEndRef}></div>

</div>
            {/* Footer */}

            <div className="ai-chat-footer">

                <input

                    type="text"

                    placeholder="Ask anything..."

                    value={message}

                    onChange={(e) => setMessage(e.target.value)}

                    onKeyDown={(e) => {

                        if (e.key === "Enter") {

                            sendMessage();

                        }

                    }}

                />

                <button onClick={sendMessage}>

                    <FaPaperPlane/>

                </button>

            </div>

        </div>
</PageTransition>
    );

}

export default AIChat;