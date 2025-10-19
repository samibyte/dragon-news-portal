import { use } from "react";
import { Link, useNavigate } from "react-router";
import AuthContext from "../contexts/AuthContext";

const Register = () => {
  const { setUser, createUser, updateUserProfile } = use(AuthContext);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password)
      .then((result) => {
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...result.user, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch((err) => {
            console.error(err);
            setUser(result.user);
          });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <h2 className="pt-6 text-center text-2xl font-bold">
        Register Your Account
      </h2>
      <form onSubmit={handleRegister} className="card-body">
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input
            name="name"
            type="text"
            className="input"
            placeholder="Your Name"
          />

          <label className="label">Photo URL</label>
          <input
            name="photoURL"
            type="text"
            className="input"
            placeholder="PhotoURL"
          />

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

          <button type="submit" className="btn btn-primary my-4">
            Sign Up
          </button>
          <p>
            Already have an account?{" "}
            <Link
              className="text-accent text-center font-semibold hover:underline"
              to="/auth/login"
            >
              Login
            </Link>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
