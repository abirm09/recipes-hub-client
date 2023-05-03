/* eslint-disable react/prop-types */
const RandomRecipes = ({ data }) => {
  const random = [];
  const getRandomRecipes = () => {
    const randomRecipe = [];
    const randomRecipeIndex = [];
    for (let x = 0; x < 3; x++) {
      const randomNUmber = Math.floor(Math.random() * data?.length);
      if (!randomRecipeIndex.includes(randomNUmber)) {
        randomRecipe.push(data[randomNUmber]);
        randomRecipeIndex.push(randomNUmber);
      }
    }
    console.log(randomRecipe);
    random.push(...randomRecipe);
  };
  getRandomRecipes();
  console.log(random);
  return (
    <section className="mt-28">
      <div className="cs-container">
        <h2 className="section-title">Random recipe</h2>
        <div className="mt-10">
          {random.map(rr => (
            <div key={rr.id}>
              <p>{rr.chefName}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RandomRecipes;
