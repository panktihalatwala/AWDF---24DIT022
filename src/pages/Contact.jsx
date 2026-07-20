import { useState } from "react";

function Contact() {
  const [message, setMessage] = useState("");
  const [showHelp, setShowHelp] = useState(false);

  return (
    <div>
      <h1>Contact</h1>

      <input
        type="text"
        placeholder="Enter message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <p>Message: {message}</p>

      <button onClick={() => setShowHelp(!showHelp)}>
        Toggle Help
      </button>

      {showHelp && <p>This is the contact page.</p>}
    </div>
  );
}

export default Contact;