import "./ShowMoreButton.scss";

const ShowMoreButton = ({ onClick, loading }) => {
  return (
    <div className="show-more-container">
      <button 
        className={`show-more-btn ${loading ? 'loading' : ''}`}
        onClick={onClick}
        disabled={loading}
      >
        {loading ? (
            <span className="spinner"></span>
        ) : (
          'Show More'
        )}
      </button>
    </div>
  );
};

export default ShowMoreButton;
