import { useLocation } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

// Styles
import './Search.css';

// components
import RecipeList from '../../components/RecipeList';

const Search = () => {
  const queryString = useLocation().search;
  const q = new URLSearchParams(queryString).get('q');

  const url = `http://localhost:3000/recipes?q=${q}`;
  const { error, isPending, data } = useFetch(url);

  return (
    <div>
      <h2 className="page-title">Recipes including "{q}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};

export default Search;
