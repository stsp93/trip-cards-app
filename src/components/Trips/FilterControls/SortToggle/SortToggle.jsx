import "./SortToggle.scss";

const SortToggle = ({ sortBy, onSortChange, isLoading }) => {
  const handleSort = () => {
    if (isLoading) return;

    const newSortBy = sortBy === 'asc' ? 'desc' : 'asc';
    onSortChange(newSortBy);
  };

  return (
    <div className="sort-toggle">
      <button 
        className='sort-toggle__button'
        onClick={handleSort}
        disabled={isLoading}
      >
        <span className="sort-toggle__text">
          {sortBy == null ? 'Sort by Rating' : sortBy === 'asc' ? 'Rating ↓' : 'Rating ↑'}
        </span>
      </button>
    </div>
  );
};

export default SortToggle;
