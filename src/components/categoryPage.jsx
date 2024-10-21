import { useParams, Link } from "react-router-dom";
import { useCart } from "../useContext/cartContext";

export const CategoryPage = ({ data, loading, error }) => {
  const { categoryName } = useParams();
  const { addToCart } = useCart();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const products = data?.products?.filter(
    (product) => product.category === categoryName
  );

  return (
    <div className="container-fluid category-container1 py-3 px-0 mx-auto">
      <div className="category-parent1 row mx-auto my-auto">
        {products?.map((item) => (
          <div
            className="col-md-3 col-sm-4 col-6 d-flex justify-content-center px-lg-3 px-2 py-md-3 py-2"
            key={item.id}
          >
            <div className="categoryChild1 bg-light px-ld-3 px-2 border border-1">
              <Link
                to={`/product/${item.id}`}
                style={{ textDecoration: "none" }}
              >
                <img
                  src={item.thumbnail}
                  className="img-fluid categoryImg1 border border-2"
                  alt={item.title}
                />
                <h2 className="categoryH3 row">
                  <span className="col">${item.price}</span>
                  <span className="categorySpam1 text-end col">
                    -{item.discountPercentage}%
                  </span>
                </h2>
                <h2 className="categoryH2 pt-1">
                  {item.title.slice(0, 20)}...
                </h2>
              </Link>
              <Link to={`/cart`} style={{ textDecoration: "none" }}>
                <button
                  onClick={() => addToCart(item)}
                  className="categoryBtn1"
                >
                  Add to cart
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
