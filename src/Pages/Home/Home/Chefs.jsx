import ChefSingle from "./ChefSingle";

/* eslint-disable react/prop-types */
const Chefs = ({ data }) => {
  return (
    <section className="mt-28" id="chefs">
      <div className="cs-container">
        <h2 className="section-title">Chefs</h2>
        <p className="section-subtitle">
          Meet our super Chefs and their recipes.
        </p>
        <div className="flex flex-wrap gap-5 justify-center mt-10">
          {data.map(chef => (
            <ChefSingle key={chef.id} chef={chef} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Chefs;
