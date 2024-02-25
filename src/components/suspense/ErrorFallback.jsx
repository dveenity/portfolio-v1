import PropTypes from "prop-types";
import "./Skeleton.css";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div className="error" style={{ backgroundColor: "black", color: "white" }}>
      <p>Something Went Wrong:</p>
      <pre>{error?.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

ErrorFallback.propTypes = {
  error: PropTypes.object,
  resetErrorBoundary: PropTypes.func,
};

export default ErrorFallback;
