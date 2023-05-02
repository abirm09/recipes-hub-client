import { useLoaderData } from "react-router-dom";
import Chefs from "./Chefs";
import Hero from "./Hero";
import "./home.css";
const Home = () => {
  const data = useLoaderData();
  return (
    <>
      <Hero />
      <Chefs data={data} />
    </>
  );
};

export default Home;
