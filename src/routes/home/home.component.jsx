import "./home.styles.scss";
import { Header } from "../../components/header/header.component";
import { ProductGallery } from "../../components/product-gallery/product-gallery.component";
import { Footer } from "../../components/footer/footer.component";

export const Home = () => {
  return (
    <div className="wrap-whole">
      <div className="shop">
        <Header />
        <ProductGallery />
        <Footer />
      </div>
    </div>
  );
};
