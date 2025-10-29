import Button from "../../shared/Button/Button";
import "./ShowMoreButton.scss";

const ShowMoreButton = ({ onClick, loading }) => {
  return (
    <div className="show-more-container">
      <Button
        variant="primary"
        onClick={onClick}
        loading={loading}
        className="show-more-btn"
      >
        Show More
      </Button>
    </div>
  );
};

export default ShowMoreButton;
