import { useLoaderData } from "react-router-dom";
import Chefs from "./Chefs";
import Hero from "./Hero";
import "./home.css";
import PopularRecipes from "./PopularRecipes";
const Home = () => {
  const data = useLoaderData();
  return (
    <>
      <Hero />
      <Chefs data={data} />
      <PopularRecipes data={data} />
    </>
  );
};

export default Home;
