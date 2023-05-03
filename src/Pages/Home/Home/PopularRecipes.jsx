import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const PopularRecipes = ({ data }) => {
  const popularThree = [data[4], data[0], data[3]];
  const navigate = useNavigate();
  console.log(popularThree);

  return (
    <section className="mt-28 bg-slate-100 py-10">
      <div className="cs-container">
        <h2 className="section-title">Most Popular Recipes</h2>
        <p className="section-subtitle">
          Explore our popular recipes section for a taste of the most loved
          dishes.
        </p>
        <div className="flex justify-center gap-10 mt-10">
          {popularThree.map(pp => (
            <div
              key={pp.id}
              className="card card-compact w-96 bg-base-100 shadow-xl"
            >
              <figure>
                <img
                  src={pp.recipes[0].photo}
                  alt={pp.recipes[0].recipeName}
                  className="h-[255px] w-full"
                />
              </figure>
              <div className="card-body space-y-2">
                <h2 className="card-title">{pp.recipes[0].recipeName}</h2>
                <p className="font-bold">
                  By <span className="text-red-500">{pp.chefName}</span>
                </p>
                <div className="card-actions justify-end">
                  <button
                    className="btn normal-case"
                    onClick={() => navigate(`/chef/${pp.id}`)}
                  >
                    Chef info
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularRecipes;
