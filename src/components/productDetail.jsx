import { useParams } from "react-router";
import { useCart } from "../useContext/cartContext";
import { Link } from "react-router-dom";

export const ProductDetail = ({ data, loading, error }) => {
  const { productId } = useParams();
  const { addToCart } = useCart();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const product = data?.products?.find((product) => product.id == productId);

  if (!product) return <div>Product not found</div>;

  return (
    <div className="productContainer container-fluid">
      <div className="productParent1 row px-sm-5 py-3">
        <div className="productChild1 col-md-6 col-sm-5 d-flex justify-content-center my-auto">
          <img
            className="productImg1 img-fluid "
            src={product.thumbnail}
            alt={product.title}
          />
        </div>
        <div className="productChild2 col-md-6 col my-auto">
          <p className="productP1 text-success">Seller: {product.brand}</p>
          <h2 className="productH1">{product.title}</h2>
          <h2 className="productP2">{product.description}</h2>
          <p className="productP3">
            {product.rating}
            <img
              src="https://www.clipartmax.com/png/middle/67-676958_rating-of-4-stars-out-5-for-learning-enjoyment-and-4-star.png"
              className="img-fluid w-25"
              alt="Rating"
            />
          </p>
          <hr />
          <h2 className="productH2">
            <span className="productSpam1 pe-md-2">
              -{product.discountPercentage}%
            </span>
            ${product.price}
          </h2>
          <p className="productP4">
            Inclusive of all taxes <br />
            Return Policy: {product.returnPolicy} <br />
            Warranty: {product.warrantyInformation} <br />
            Availability: {product.availabilityStatus} <br />
            Shipping: {product.shippingInformation} <br />
          </p>
          <Link to={`/cart`} style={{ textDecoration: "none" }}>
            <button className="btn2 ms-md-2" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
