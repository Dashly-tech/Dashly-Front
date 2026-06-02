import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
  return (
    <div className="search-container">
      <IoSearchOutline className="search-icon" />
      <input 
        type="text" 
        placeholder="Search..." 
        className="search-input"
      />
    </div>
  );
};

export default Search;