import { useState } from "react";

export default function BetaNotice() {
    const [visible, setVisible] = useState(true);

    if (!visible) return null;

    return (
        <div
            style={{
                position: "fixed",
                bottom: "5%",
                left: "0%",
                width: "fit-content",
                backgroundColor: "#000",
                color: "#fff",
                padding: "12px 50px 12px 16px",
                fontSize: "14px",
                fontFamily: "sans-serif",
                zIndex: 9999,
                boxSizing: "border-box",
            }}
        >
            <button
                onClick={() => setVisible(false)}
                style={{
                    position: "absolute",
                    right: "15px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    color: "#fff",
                    fontSize: "20px",
                    cursor: "pointer",
                }}
            >
                ✕
            </button>

            This portfolio is currently in beta and actively 
            <br />being improved.
            Some layout differences may occur across devices.
        </div>
    );
}