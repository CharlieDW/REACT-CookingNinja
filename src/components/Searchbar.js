import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// styles
import './Searchbar.css';

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search?q=${searchTerm}`);
  };

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          id="search"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for any recipe"
          required
        />
      </form>
    </div>
  );
};

export default Searchbar;
