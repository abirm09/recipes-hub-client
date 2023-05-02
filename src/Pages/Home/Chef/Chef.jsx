import { useLoaderData } from "react-router-dom";

const Chef = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h2>From chef</h2>
    </div>
  );
};

export default Chef;
