import Lottie from "lottie-react";
import errorAnim from "../../assets/404-anim/website-error-animation.json";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center space-y-5">
      <Lottie
        animationData={errorAnim}
        loop={true}
        className="max-w-sm w-full mx-auto"
      />
      <p className="font-poppins text-2xl font-bold">
        {" "}
        <span className="text-red-700">404</span> Page not found
      </p>
      <Link to="/" className="btn bg-red-500 border-none hover:bg-red-600">
        Back to home
      </Link>
    </div>
  );
};

export default ErrorPage;
