import { Link } from "react-router-dom";
import googleLogo from "../../assets/social-icon/google.png";
import githubLogo from "../../assets/social-icon/github.png";
const Login = () => {
  return (
    <section>
      <div className="cs-container">
        <div className="max-w-[570px] w-full mx-auto md:shadow-lg rounded-lg p-5 md:p-10">
          <form className="space-y-5">
            <div>
              <label htmlFor="name" className="font-poppins font-semibold">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your Email"
                className="input input-bordered  w-full mt-2"
                name="name"
                required
              />
            </div>
            <div>
              <label htmlFor="name" className="font-poppins font-semibold">
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
              <li className="w-10">
                <img src={googleLogo} alt="Google sign in" />
              </li>
              <li className="w-10">
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
