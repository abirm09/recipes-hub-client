import { Link, useLocation, useNavigate } from "react-router-dom";
import googleLogo from "../../assets/social-icon/google.png";
import githubLogo from "../../assets/social-icon/github.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
const Login = () => {
  const { logInWithEmailPass, googleLogin, githubLogin, setRedirectPath } =
    useContext(AuthContext);
  const [logInErr, setLogInErr] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location?.state?.from?.pathname || "/");
  useEffect(() => {
    setRedirectPath(location?.state?.from?.pathname || "/");
  }, []);
  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    setLogInErr("");
    logInWithEmailPass(email, password)
      .then(result => {
        const user = result.user;
        navigate(location?.state?.from?.pathname || "/");
        console.log(user);
      })
      .catch(err => {
        console.log(err);
        setLogInErr(`Error : ${err.message.split("/")[1].replace(")", "")}`);
      });
  };
  //login with google
  const handleGoogleLogIn = () => {
    googleLogin()
      .then(result => {
        const user = result.user;
        navigate(location?.state?.from?.pathname || "/");
        console.log(user);
      })
      .catch(err => {
        console.log(err);
      });
  };
  //login with github
  const handleGithubLogin = () => {
    githubLogin()
      .then(result => {
        const user = result.user;
        navigate(location?.state?.from?.pathname || "/");
        console.log(user);
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <section>
      <div className="cs-container">
        <div className="max-w-[570px] w-full mx-auto md:shadow-lg rounded-lg p-5 md:p-10">
          <form className="space-y-5" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="font-poppins font-semibold">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your Email"
                className="input input-bordered  w-full mt-2"
                name="email"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="font-poppins font-semibold">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered  w-full mt-2"
                name="password"
                required
              />
            </div>
            <p className="font-bold font-poppins text-red-700">{logInErr}</p>
            <div>
              <input
                type="submit"
                value="Log in"
                className="btn bg-red-500 w-full border-none hover:bg-red-600"
              />
            </div>
            <div>
              <h3 className="text-center font-bold">
                New in <span className="text-red-500">Recipes HUB</span> ?{" "}
                <Link to="/registration" className="btn-link">
                  Register
                </Link>
              </h3>
            </div>
          </form>
          <div>
            <h4 className="text-center font-bold py-4">Or continue with</h4>
            <ul className="flex justify-center gap-5">
              <li className="w-10 cursor-pointer" onClick={handleGoogleLogIn}>
                <img src={googleLogo} alt="Google sign in" />
              </li>
              <li className="w-10 cursor-pointer" onClick={handleGithubLogin}>
                <img src={githubLogo} alt="Google sign in" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
