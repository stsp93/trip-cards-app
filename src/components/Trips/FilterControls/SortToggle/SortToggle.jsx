import Button from "../../../shared/Button/Button";
import "./SortToggle.scss";

const SortToggle = ({ sortBy, onSortChange, isLoading }) => {
  const handleSort = () => {
    if (isLoading) return;

    const newSortBy = sortBy === 'asc' ? 'desc' : 'asc';
    onSortChange(newSortBy);
  };

  const buttonText = sortBy == null 
    ? 'Sort by Rating' 
    : sortBy === 'asc' 
      ? 'Rating ↓' 
      : 'Rating ↑';

  return (
    <div className="sort-toggle">
      <Button
        variant="secondary"
        onClick={handleSort}
        className="sort-toggle__button"
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default SortToggle;
