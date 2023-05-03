import { useLoaderData } from "react-router-dom";
import Chefs from "./Chefs";
import Hero from "./Hero";
import "./home.css";
import PopularRecipes from "./PopularRecipes";
import HUbInNumber from "./HUbInNumber";
const Home = () => {
  const data = useLoaderData();
  return (
    <>
      <Hero />
      <HUbInNumber data={data} />
      <Chefs data={data} />
      <PopularRecipes data={data} />
    </>
  );
};

export default Home;
