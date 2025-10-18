import { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(categoryPromise);

  return (
    <div>
      <h2 className="text-primary mb-5 font-semibold">
        All Categories ({categories.length})
      </h2>
      <ul className="text-center">
        {categories.map((category) => (
          <li key={category.id} className="font-semibold text-[#9F9F9F]">
            <NavLink
              className="hover:bg-base-200 block p-3"
              to={`category/${category.id}`}
            >
              {category.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
