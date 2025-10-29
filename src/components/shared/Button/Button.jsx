import "./Button.scss";

const Button = ({ 
  children, 
  onClick, 
  disabled = false, 
  loading = false, 
  variant = "primary",
  className = "",
  ...props 
}) => {
  const buttonClasses = [
    "btn",
    `btn--${variant}`,
    loading ? "btn--loading" : "",
    className
  ].filter(Boolean).join(" ");

  return (
    <button 
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="btn__spinner"></span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;