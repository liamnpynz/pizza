import { Categories } from "../categories/categories.component";
import "./product-gallery.styles.scss";

export const ProductGallery = () => {
  return (
    <div className="product-gallery">
      <Categories />
      <div className="disclaimer">
        <p>
          * Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          voluptate harum, hic dignissimos corporis fugit laboriosam dolores
          necessitatibus illum eaque impedit aut optio nesciunt eos sequi
          tempora aliquam asperiores tempore. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Sit accusamus porro dolore facilis, at
          saepe animi ut autem, voluptas aliquid magnam reprehenderit, sunt
          quaerat. Nostrum repellendus ducimus veritatis accusantium deleniti.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa officia
          quo eos quas suscipit rem minus reprehenderit esse debitis illo
          deleniti, magnam placeat distinctio at! Eaque nam illum ducimus
          provident.
        </p>
      </div>
    </div>
  );
};
