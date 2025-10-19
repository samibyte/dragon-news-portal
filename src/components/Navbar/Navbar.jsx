import { Link, NavLink } from "react-router";
import userLogo from "../../assets/user.png";
import { use } from "react";
import AuthContext from "../../contexts/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);

  return (
    <div className="flex w-full items-center justify-between">
      <div>
        <p>{user ? `Hi, ${user?.email}` : "welcome, guest!"}</p>
      </div>
      <ul className="text-secondary flex gap-3">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/career">Career</NavLink>
        </li>
      </ul>
      <div className="flex items-center gap-2">
        <img className="w-10" src={userLogo} alt="" />
        <Link to="/auth/login">
          {user ? (
            <button
              onClick={signOutUser}
              className="btn btn-primary px-7 text-white"
            >
              Log out
            </button>
          ) : (
            <button className="btn btn-primary px-7 text-white">Login</button>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
