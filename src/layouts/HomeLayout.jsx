import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import Headline from "../components/Header/Headline";
import Navbar from "../components/Navbar/Navbar";
import LeftAside from "../components/HomeLayout/LeftAside";
import RightAside from "../components/HomeLayout/RightAside";

const HomeLayout = () => {
  return (
    <div>
      <header className="mt-12">
        <Header />
        <section className="mx-auto mt-7 mb-5 flex w-10/12">
          <Headline />
        </section>
        <nav className="mx-auto flex w-9/12">
          <Navbar />
        </nav>
      </header>
      <main className="mx-auto mt-20 grid w-9/12 grid-cols-12 gap-6">
        <aside className="sticky top-3 col-span-2 h-fit">
          <LeftAside />
        </aside>
        <section className="main col-span-8">
          <Outlet />
        </section>
        <aside className="sticky top-3 col-span-2 h-fit">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
