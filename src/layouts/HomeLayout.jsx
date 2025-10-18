import React from "react";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <div>
      <header></header>
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
