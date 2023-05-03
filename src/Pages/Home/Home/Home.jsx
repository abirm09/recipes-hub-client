import { useLoaderData } from "react-router-dom";
import Chefs from "./Chefs";
import Hero from "./Hero";
import "./home.css";
import PopularRecipes from "./PopularRecipes";
import RandomRecipes from "./RandomRecipes";
const Home = () => {
  const data = useLoaderData();
  return (
    <>
      <Hero />
      <Chefs data={data} />
      <PopularRecipes data={data} />
      <RandomRecipes data={data} />
    </>
  );
};

export default Home;
