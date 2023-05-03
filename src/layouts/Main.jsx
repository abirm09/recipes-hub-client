import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/shared/Header/Header";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
import loadingGif from "../assets/loading-anim/loading.json";
import Lottie from "lottie-react";
import Footer from "../components/shared/Footer/Footer";
const Main = () => {
  const { loading } = useContext(AuthContext);
  const navigation = useNavigation();
  if (loading) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <Lottie
          animationData={loadingGif}
          loop={true}
          className="w-56 mx-auto"
        />
      </div>
    );
  }
  return (
    <>
      <Header />

      {navigation.state === "loading" && (
        <>
          <div
            className="w-full flex justify-center items-center"
            style={{ minHeight: "calc(100vh - 75px)" }}
          >
            <Lottie animationData={loadingGif} loop={true} className="w-56" />
          </div>
        </>
      )}
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
