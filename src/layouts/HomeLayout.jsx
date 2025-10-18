import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import Headline from "../components/Header/Headline";
import Navbar from "../components/Navbar/Navbar";

const HomeLayout = () => {
  return (
    <div>
      <header className="mt-12">
        <Header />
        <section className="mx-auto mt-7 mb-5 flex w-10/12">
          <Headline />
        </section>
        <nav className="mx-auto flex w-10/12">
          <Navbar />
        </nav>
      </header>
      <main>
        <section className="left-nav">left nav</section>
        <section className="main">
          <Outlet />
        </section>
        <section className="right-nav">right nav</section>
      </main>
    </div>
  );
};

export default HomeLayout;
