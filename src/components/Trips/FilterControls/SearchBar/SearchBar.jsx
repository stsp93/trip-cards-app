import "./SearchBar.scss";

const SearchBar = ({ searchTerm, onSearchChange, placeholder = "Search trips..." }) => {
  return (
    <div className="search-bar-wrapper">
      <input 
        type="text" 
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
