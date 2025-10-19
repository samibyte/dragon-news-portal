import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <header className="mx-auto w-10/12 pt-10">
        <Navbar />
      </header>
      <main className="flex min-h-[calc(100vh-160px)] items-center justify-center">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
