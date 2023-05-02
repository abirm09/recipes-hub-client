/* eslint-disable react/prop-types */
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
const Recipes = ({ recipe }) => {
  const { photo, recipeName, cookingMethod, ingredients, rating } = recipe;
  console.log(recipe);
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt={recipeName} className="h-64 w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{recipeName}</h2>
        <div>
          <h2 className="text-xl font-bold font-poppins">Ingredients</h2>
          <ul className="mt-1 font-poppins">
            {ingredients.map((ingredient, index) => (
              <li key={index}>
                {index + 1}. {ingredient}
              </li>
            ))}
          </ul>
          <h4 className="text-xl font-bold font-poppins mt-5">
            Cooking methods.
          </h4>
          <p>{cookingMethod.description}</p>
          <h4 className="text-xl font-bold font-poppins mt-5">Ratings</h4>
          <Rating style={{ maxWidth: 150 }} value={rating} readOnly />
        </div>
      </div>
    </div>
  );
};

export default Recipes;
