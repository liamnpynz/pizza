import { CRUST_OPTIONS } from "../../variable_data/crusts";
import { SIZE_OPTIONS } from "../../variable_data/sizes";
import "./item-card.styles.scss";
import { useDispatch } from "react-redux";
import { productAdded } from "../../redux/cartSlice";
import { crustChanged, sizeChanged } from "../../redux/pizzaSlice";
import { useState } from "react";

export const ItemCard = ({ pizza }) => {
  const dispatch = useDispatch();
  const [extendedDesc, setExtendedDesc] = useState(false);

  const handleViewMore = () => setExtendedDesc(true);

  const handleAddToCart = async () => {
    dispatch(productAdded(pizza));
  };

  const handleCrustChange = (e) => {
    const crustForDispatch = CRUST_OPTIONS.find(
      (item) => item.name === e.target.value
    );
    const payload = {
      currentPizza: pizza,
      crust: crustForDispatch,
    };
    dispatch(crustChanged(payload));
  };

  const handleSizeChange = (e) => {
    const sizeForDispatch = SIZE_OPTIONS.find(
      (item) => item.name === e.target.value
    );
    const payload = {
      currentPizza: pizza,
      size: sizeForDispatch,
    };
    dispatch(sizeChanged(payload));
  };

  return (
    <div className="item-card">
      <div className="top-area">
        <div className="item-photo">
          <img className="pizza-img" src={pizza.img} alt="Pizza image" />
        </div>
        <div className="pizza-meta">
          <div className="pizza-name">
            <h4>{pizza.name}</h4>
          </div>
          <div className="pizza-kj">{pizza.kilojoules} kJ</div>
          <div className="pizza-desc">
            {pizza.description.length < 50 || extendedDesc === true ? (
              <p>{pizza.description}</p>
            ) : (
              <p>
                {pizza.description.substring(0, 50)}...{" "}
                <span className="view-more" onClick={() => handleViewMore()}>
                  View more
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="bottom-area">
        <div className="dropdown-area">
          <div className="dropdown-title">Size</div>
          <div className="dropdown-container">
            <form>
              <select
                className="options-dropdowns"
                onChange={(e) => handleSizeChange(e)}
                name="size"
                id="size"
              >
                {SIZE_OPTIONS.map((size) => (
                  <option key={size.id} name={size.name} value={size.name}>
                    {size.display}
                  </option>
                ))}
              </select>
            </form>
          </div>
        </div>
        <div className="dropdown-area">
          <div className="dropdown-title">Crust</div>
          <div className="dropdown-container">
            <form>
              <select
                className="options-dropdowns"
                onChange={(e) => handleCrustChange(e)}
                name="crust"
                id="crust"
              >
                {CRUST_OPTIONS.map((crust) => (
                  <option key={crust.id} name={crust.name} value={crust.name}>
                    {crust.display}
                  </option>
                ))}
              </select>
            </form>
          </div>
        </div>
        <div onClick={() => handleAddToCart()} className="add-button">
          <div className="add-cta">Add To Cart</div>
          <div className="price">
            $
            {(
              pizza.price +
              pizza.crust.price_diff +
              pizza.size.price_diff
            ).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};
