import { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import AuthContext from "../contexts/AuthContext";

const Register = () => {
  const [disabled, setDisabled] = useState(false);
  const {
    setUser,
    createUser,
    updateUserProfile,
    emailVerification,
    signOutUser,
  } = use(AuthContext);

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setDisabled(true);

    const name = e.target.name.value.trim();
    const photo = e.target.photoURL.value.trim() || null;
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    try {
      const result = await createUser(email, password);
      const user = result.user;

      await Promise.all([
        updateUserProfile({ displayName: name, photoURL: photo }),
        emailVerification(),
      ]);

      setUser({ ...user, displayName: name, photoURL: photo });
      alert("Account created successfully! Please verify your email.");

      await signOutUser();

      navigate("/auth/login");
    } catch (err) {
      console.error("Registration error:", err);
      alert(err.message || "Registration failed. Try again.");
    }
    setDisabled(false);
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
            required
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
            required
          />

          <label className="label">Password</label>
          <input
            name="password"
            type="password"
            className="input"
            placeholder="Password"
            required
          />

          <button
            disabled={disabled}
            type="submit"
            className="btn btn-primary my-4"
          >
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
