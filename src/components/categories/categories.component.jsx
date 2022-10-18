import "./categories.styles.scss";
import { Category } from "../category/category.component";

const categories = [
  { id: 1, category: "premium" },
  { id: 2, category: "loaded" },
  { id: 3, category: "favourites" },
  { id: 4, category: "classic" },
  { id: 5, category: "custom" },
];

export const Categories = () => {
  const maps = categories.map((item) => {
    return <Category key={item.id} cat_name={item.category} />;
  });
  return <div className="categories">{maps.length > 0 ? maps : null}</div>;
};
