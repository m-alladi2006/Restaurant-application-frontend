import "./FloatingAI.css";

import { useState } from "react";

import { FaRobot, FaTimes } from "react-icons/fa";

import AIChat from "../AIChat/AIChat";

function FloatingAI() {

    const [openChat, setOpenChat] = useState(false);

    return (
        <>
            <button
                className="floating-ai-btn"
                onClick={() => setOpenChat((prev) => !prev)}
            >
                { <FaRobot />}
            </button>

            {openChat && (
                <AIChat
                    closeChat={() => setOpenChat(false)}
                />
            )}
        </>
    );
}

export default FloatingAI;