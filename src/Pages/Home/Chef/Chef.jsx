import { FaHeart } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Recipes from "./Recipes";

const Chef = () => {
  const data = useLoaderData();
  const { chefName, photo, yearsOfExperience, likes, recipes, description } =
    data;
  return (
    <section className="bg-slate-50">
      <div className="cs-container">
        <div className="hero min-h-[70vh]">
          <div className="hero-content grid grid-cols-1 md:grid-cols-3 justify-between w-full gap-10">
            <div className="col-span-1">
              <img
                src={photo}
                className="max-w-sm rounded-lg shadow-2xl w-full"
              />
            </div>
            <div className="col-span-1 md:col-span-2">
              <h1 className="text-3xl md:text-5xl font-bold">{chefName}</h1>
              <p className="py-6">{description}</p>
              <div className="space-y-1 md:space-y-3 mt-2 md:mt-10">
                <p className="font-poppins text-slate-600">
                  <span className="text-red-500"> {yearsOfExperience}</span>{" "}
                  years of experience.
                </p>
                <p className="flex items-center">
                  <span className="text-blue-500 mr-2">
                    <FaHeart />
                  </span>{" "}
                  <span className="font-poppins mr-4">{likes}</span>
                </p>
                <p className="font-poppins">
                  <span>Available recipes : </span> {recipes.length}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-5">
          <h2 className="section-title">Recipes</h2>
          <p className="section-subtitle">
            Some delicious recipes from{" "}
            <span className="text-red-500">{chefName}</span>{" "}
          </p>
          <div className="flex justify-center flex-wrap gap-5 mt-10">
            {recipes.map((recipe, index) => (
              <Recipes key={index} recipe={recipe} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chef;
