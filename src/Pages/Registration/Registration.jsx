import { Link, useNavigate } from "react-router-dom";
import googleLogo from "../../assets/social-icon/google.png";
import githubLogo from "../../assets/social-icon/github.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
const Registration = () => {
  const [registrationErr, setRegistrationErr] = useState("");
  const { createUserWithEmailPass, googleLogin, githubLogin, redirectPath } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegistration = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    if (password.length < 6) {
      setRegistrationErr("Password should greater than 6 characters.");
      return;
    }
    createUserWithEmailPass(email, password)
      .then(result => {
        const user = result.user;
        sendUserData(user, name, photo);
        navigate(redirectPath);
        console.log(user);
      })
      .catch(err => {
        console.log(err);
        setRegistrationErr(
          `Error : ${err.message.split("/")[1].replace(")", "")}`
        );
      });
  };
  const sendUserData = (user, name, photo) => {
    updateProfile(user, {
      displayName: name || null,
      photoURL: photo || null,
    });
  };
  //login with google
  const handleGoogleLogIn = () => {
    googleLogin()
      .then(result => {
        const user = result.user;
        navigate(redirectPath);
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
        navigate(redirectPath);
        console.log(user);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <section className="mb-10">
      <div className="cs-container">
        <div className="max-w-[570px] w-full mx-auto md:shadow-lg rounded-lg p-5 md:p-10">
          <form className="space-y-5" onSubmit={handleRegistration}>
            <div>
              <label htmlFor="name" className="font-poppins font-semibold">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered  w-full mt-2"
                name="name"
              />
            </div>
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
              <label htmlFor="photo" className="font-poppins font-semibold">
                Photo url
              </label>
              <input
                type="text"
                placeholder="Photo url"
                className="input input-bordered  w-full mt-2"
                name="photo"
              />
            </div>
            <div>
              <label htmlFor="password" className="font-poppins font-semibold">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter yourPassword"
                className="input input-bordered  w-full mt-2"
                name="password"
                required
              />
            </div>
            <p className="font-bold font-poppins text-red-700">
              {registrationErr}
            </p>
            <div>
              <input
                type="submit"
                value="Register"
                className="btn bg-red-500 w-full border-none hover:bg-red-600"
              />
            </div>
            <div>
              <h3 className="text-center font-bold">
                Already have an account ?{" "}
                <Link to="/login" className="btn-link">
                  Login
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

export default Registration;
