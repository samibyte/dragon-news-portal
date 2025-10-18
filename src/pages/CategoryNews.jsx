import React from "react";
import { useParams } from "react-router";

const CategoryNews = () => {
  const { id } = useParams();

  return <div>Category news - {id}</div>;
};

export default CategoryNews;
