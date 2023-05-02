const Hero = () => {
  return (
    <section className="home-hero">
      <div className="cs-container">
        <div className="h-[500px] flex items-center">
          <div className="w-full md:w-2/4">
            <h2 className="text-white text-2xl sm:text-5xl font-rubik">
              Delicious recipes from{" "}
              <span className="text-red-400">Turkish</span> super chefs.
            </h2>
            <button className="cs-btn mt-5">View Chefs</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
