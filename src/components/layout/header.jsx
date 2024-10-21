import { useContext } from "react";
import { BioContext } from "../../useContext";
import "../../App.css";
import { Link } from "react-router-dom";
import img1 from "../../images/shopping-cart.png";
import { useCart } from "../../useContext/cartContext";

export const Header = () => {
  const { data, loading, error } = useContext(BioContext);
  const { cartItems } = useCart();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark text-white py-0">
        <div className="container-fluid">
          <a
            className="navbar-brand text-white fw-bold fs-2"
            style={{ fontFamily: "Rubik Mono One, monospace" }}
            href="/"
          >
            ECOM
          </a>
          <button
            class="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 bg-dark ">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white fw-bold"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  CATEGORIES
                </a>
                <ul className="dropdown-menu bg-dark">
                  {/* <li>
                    <a className="dropdown-item text-light" href="#">
                      Action
                    </a>
                  </li> */}
                  {[
                    ...new Set(
                      data?.products.map((product) => product.category)
                    ),
                  ].map((category, index) => (
                    <li key={index}>
                      <Link
                        to={`/category/${category}`}
                        className="dropdown-item dropdown-item-dark-hover text-light"
                        href="#"
                      >
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
            <div className="d-flex justify-content-end">
              <form className="d-flex  my-auto" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn text-white btn-outline-secondary"
                  type="submit"
                >
                  Search
                </button>
              </form>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 bg-dark ms-3">
                <li class="nav-item">
                  <Link to={"/cart"} class="nav-link text-light" href="#">
                    <img className="headerImg1" src={img1} alt="" />
                  </Link>
                  <p className="headerspan1 bg-dark">{cartItems.length}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/* {data?.products?.map((product) => {
          return (
            <ul>
              {data.products.map((product) => (
                <li key={product.id}>{product.category}</li>
              ))}
            </ul>
          );
        })} */}
    </>
  );
};
