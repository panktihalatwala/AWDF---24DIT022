function ErrorMessage({ message, onRetry }) {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "60px 20px",
        border: "1px solid var(--rule)",
        borderRadius: "12px",
        background: "var(--surface)",
      }}
    >
      <p style={{ color: "var(--danger)", fontWeight: 600, marginBottom: "8px" }}>
        Something went wrong
      </p>
      <p style={{ marginBottom: "20px" }}>{message}</p>
      {onRetry && <button onClick={onRetry}>Try Again</button>}
    </div>
  );
}

export default ErrorMessage;