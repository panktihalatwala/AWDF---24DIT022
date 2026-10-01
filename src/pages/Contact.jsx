import { useState } from "react";

function Contact() {
  const [message, setMessage] = useState("");
  const [showHelp, setShowHelp] = useState(false);
  const maxLength = 280;

  return (
    <section>
      <span className="eyebrow">Get In Touch</span>
      <div className="section-heading">
        <h2>Contact</h2>
      </div>

      <div style={{ maxWidth: "480px" }}>
        <label style={{ display: "block", marginBottom: "8px", fontSize: "0.9rem", fontWeight: 500 }}>
          Your Message
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value.slice(0, maxLength))}
          rows={5}
          placeholder="Write your message here..."
          style={{ width: "100%", resize: "vertical" }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "6px",
            fontSize: "0.8rem",
            color: message.length >= maxLength ? "var(--danger)" : "var(--slate)",
          }}
        >
          <span>Live preview: {message || "(nothing typed yet)"}</span>
          <span>
            {message.length}/{maxLength}
          </span>
        </div>

        <button
          type="button"
          onClick={() => setShowHelp(!showHelp)}
          className="btn-outline"
          style={{ marginTop: "20px" }}
        >
          {showHelp ? "Hide Tips" : "Show Tips"}
        </button>

        {showHelp && (
          <div
            style={{
              marginTop: "12px",
              padding: "14px",
              background: "var(--surface)",
              border: "1px solid var(--rule)",
              borderRadius: "8px",
              fontSize: "0.85rem",
            }}
          >
            Tip: Keep your message under 280 characters. Mention your project or opportunity clearly.
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;