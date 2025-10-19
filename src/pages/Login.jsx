import { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import AuthContext from "../contexts/AuthContext";

const Login = () => {
  const { setUser, signInUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => {
        setUser(result.user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <h2 className="pt-6 text-center text-2xl font-bold">
        Login Your Account
      </h2>
      <form onSubmit={handleLogin} className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            name="email"
            type="email"
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            name="password"
            type="password"
            className="input"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button type="submit" className="btn btn-primary my-4">
            Login
          </button>
          <p>
            Don't have an account?{" "}
            <Link
              className="text-accent text-center font-semibold hover:underline"
              to="/auth/register"
            >
              Register
            </Link>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
