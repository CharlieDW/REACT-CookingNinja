import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { projectFirestore } from '../../firebase/config';

// Styles
import './Create.css';

const Create = () => {
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [newIngredient, setNewIngredient] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const ingredientRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const doc = {
      title: title,
      method: method,
      cookingTime: cookingTime + ' minutes',
      ingredients: ingredients,
    };

    try {
      await projectFirestore.collection('recipes').add(doc);
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const ing = newIngredient.trim();

    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevIngredients) => {
        return [...prevIngredients, ing];
      });
    }

    setNewIngredient('');
    ingredientRef.current.focus();
  };

  return (
    <div className="create">
      <h2 className="page-title">Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe title:</span>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </label>

        <label>
          <span>Recipe Ingredients:</span>
          <div className="ingredients">
            <input
              type="text"
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientRef}
            />
            <button className="btn" onClick={handleAdd}>
              Add
            </button>
          </div>
        </label>

        <p>
          Current Ingredients:{' '}
          {ingredients.map((ing) => (
            <em key={ing}>{ing}, </em>
          ))}
        </p>

        <label>
          <span>Recipe Method:</span>
          <textarea onChange={(e) => setMethod(e.target.value)} value={method} required />
        </label>

        <label>
          <span>Cooking Time (minutes):</span>
          <input
            type="number"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>

        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
