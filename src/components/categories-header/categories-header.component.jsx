import "./categories-header.styles.scss";
import { useState } from "react";
import { futureCategoriesArray } from "../../variable_data/categories";

export const CategoriesHeader = () => {
  const [categorySelected, setCategorySelected] = useState(2);
  const x = { style: { backgroundColor: "darkred", color: "white" } };

  const CategoryButton = (props) => {
    return (
      <div
        className="category-button"
        {...(categorySelected === props.catID ? { ...x } : null)}
      >
        {props.category}
      </div>
    );
  };

  return (
    <div className="categories-header">
      <div className="gap"> </div>
      {futureCategoriesArray.map((item) => (
        <CategoryButton
          key={item.catID}
          catID={item.catID}
          category={item.catName}
        />
      ))}
    </div>
  );
};
