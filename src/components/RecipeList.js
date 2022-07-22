import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import Trashcan from '../assets/delete-icon.svg';
import { projectFirestore } from '../firebase/config';

// Styles
import './RecipeList.css';

const RecipeList = (props) => {
  const recipes = props.recipes;
  const { mode } = useTheme();

  if (recipes.length === 0) {
    return <div className="error">No recipes to load...</div>;
  }

  const handleDelete = (id) => {
    projectFirestore.collection('recipes').doc(id).delete();
  };

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className={`card ${mode}`}>
          <img
            src={Trashcan}
            alt="Delete icon"
            className="delete"
            onClick={() => handleDelete(recipe.id)}
          />
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
