import React, { useContext, useEffect, useState } from "react";
import { CategoryContext, CategoryProvider } from "../context/CategoryContext";
import { useParams } from "react-router-dom";

function Category({ match }) {
  const categories = useContext(CategoryContext);
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState({});

  const renderCategory = () => {
    let queryCategory = categories.find((c) => {
       return c.title.toLowerCase().replace(/ /g, '-') === match.params.category
    });
    setSelectedCategory(queryCategory);
  };

  useEffect(() => {
    renderCategory();
    
  }, [category]);

  return (
    <CategoryProvider>
      <h1>{selectedCategory.title}</h1>
    </CategoryProvider>
  );
}

export default Category;
