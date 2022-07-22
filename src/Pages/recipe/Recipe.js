import { projectFirestore } from '../../firebase/config';
import { useParams } from 'react-router';
import { useTheme } from '../../hooks/useTheme';
import { useEffect, useState } from 'react';

// Styles
import './Recipe.css';
import { Fragment } from 'react';

const Recipe = () => {
  const { id: recipeId } = useParams();
  const { mode } = useTheme();

  // set state
  const [recipe, setRecipe] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);

    const unsub = projectFirestore
      .collection('recipes')
      .doc(recipeId)
      .onSnapshot(
        (doc) => {
          if (doc.exists) {
            setIsPending(false);
            setRecipe(doc.data());
          } else {
            setError('No recipe found.');
            setIsPending(false);
          }
        },
        (error) => {
          setError(error.message);
          setIsPending(false);
        },
      );

    return () => unsub();
  }, [recipeId]);

  return (
    <div className={`recipe ${mode}`}>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && (
        <Fragment>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to prepare.</p>
          <ul>
            {recipe.ingredients.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="method">{recipe.method}</p>
        </Fragment>
      )}
    </div>
  );
};

export default Recipe;
