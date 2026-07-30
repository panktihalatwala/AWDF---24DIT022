function ErrorMessage({ message, onRetry }) {
  return (
    <div>
      <h2>Error</h2>
      <p>{message}</p>
    </div>
  );
}

export default ErrorMessage;