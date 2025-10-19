import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <h2 className="pt-6 text-center text-2xl font-bold">
        Login Your Account
      </h2>
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-primary my-4">Login</button>
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
      </div>
    </div>
  );
};

export default Login;
