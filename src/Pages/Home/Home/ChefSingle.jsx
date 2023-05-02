/* eslint-disable react/prop-types */
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const ChefSingle = ({ chef }) => {
  const { id, chefName, photo, yearsOfExperience, likes, recipes } = chef;
  const navigate = useNavigate();
  return (
    <div className="card card-side bg-base-100 shadow-xl max-w-[600px] w-full">
      <figure>
        <img
          src={photo}
          alt="Movie"
          className="w-28 h-40 sm:w-[200px] sm:h-72 px-2 sm:px-0"
        />
      </figure>
      <div className="card-body p-3">
        <h2 className="card-title font-poppins ">{chefName}</h2>
        <div className="space-y-1 md:space-y-3 mt-2 md:mt-10">
          <p className="font-poppins text-slate-600">
            <span className="text-red-500"> {yearsOfExperience}</span> years of
            experience.
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
        <div className="card-actions justify-end mt-auto">
          <button
            onClick={() => navigate(`/chef/${id}`)}
            className="btn normal-case bg-red-500 border-none hover:bg-red-600"
          >
            View recipes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChefSingle;
