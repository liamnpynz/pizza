import { ItemCard } from "../item-card/item-card.component";
import "./category.styles.scss";
import { useSelector } from "react-redux";

export const Category = (props) => {
  const status = useSelector((state) => state.pizza.pizzas);
  const filteredByCategory = status.filter(
    (item) => item.category === `${props.cat_name}`
  );

  if (filteredByCategory.length > 0) {
    return (
      <div className="category">
        <div className="category-title">
          <h3>{props.cat_name}</h3>
        </div>
        <div className="product-display">
          {filteredByCategory.map((pizza) => (
            <ItemCard key={pizza.id} pizza={pizza} />
          ))}
        </div>
      </div>
    );
  }
};
