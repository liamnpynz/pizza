import { CategoriesHeader } from "../categories-header/categories-header.component";
import { PizzaHeader } from "../pizza-header/pizza-header.component";
import "./header.styles.scss";

export const Header = () => {
  return (
    <div className="overall-header">
      <PizzaHeader />
      <CategoriesHeader />
    </div>
  );
};
