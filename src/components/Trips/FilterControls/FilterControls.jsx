import "./FilterControls.scss";
import SearchBar from "./SearchBar/SearchBar.jsx";
import SortToggle from "./SortToggle/SortToggle.jsx";

const FilterControls = ({ 
  searchTerm, 
  onSearchChange, 
  sortBy, 
  onSortChange,
  isLoading 
}) => {
  return (
    <div className="filter-controls">
      <div className="filter-controls__search">
        <SearchBar 
          searchTerm={searchTerm}
          onSearchChange={onSearchChange}
          isLoading={isLoading}
          placeholder="Search trips by name..."
        />
      </div>
      
      <div className="filter-controls__sort">
        <SortToggle 
          sortBy={sortBy}
          onSortChange={onSortChange}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default FilterControls;
