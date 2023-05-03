/* eslint-disable react/prop-types */
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { FaHeart } from "react-icons/fa";
import Swal from "sweetalert2";
const Recipes = ({ recipe }) => {
  const { photo, recipeName, cookingMethod, ingredients, rating } = recipe;
  const addToFav = event => {
    event.target.parentElement.setAttribute("disabled", true);
    Swal.fire("Yah...", "Added to favorite list", "success");
  };
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt={recipeName} className="h-64 w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl font-poppins text-red-500">
          {recipeName}
        </h2>
        <div>
          <h2 className="text-lg font-bold font-poppins">Ingredients</h2>
          <ul className="mt-1 font-poppins">
            {ingredients.map((ingredient, index) => (
              <li key={index}>
                {index + 1}. {ingredient}
              </li>
            ))}
          </ul>
          <h4 className="text-lg font-bold font-poppins mt-5">
            Cooking methods.
          </h4>
          <p>{cookingMethod.description}</p>
          <div>
            <h4 className="text-xl font-bold font-poppins mt-5">Ratings</h4>
            <div className="flex justify-between">
              <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
              <button className="btn relative">
                <FaHeart />
                <span
                  className="absolute w-full h-full block z-30"
                  onClick={addToFav}
                ></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
