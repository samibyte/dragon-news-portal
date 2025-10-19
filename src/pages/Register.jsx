import { Link } from "react-router";

const Register = () => {
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <h2 className="pt-6 text-center text-2xl font-bold">
        Register Your Account
      </h2>
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input type="text" className="input" placeholder="Your Name" />

          <label className="label">Photo URL</label>
          <input type="text" className="input" placeholder="PhotoURL" />

          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />

          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />

          <button className="btn btn-primary my-4">Login</button>
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
      </div>
    </div>
  );
};

export default Register;
