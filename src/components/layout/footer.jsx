import { useContext } from "react";
import { BioContext } from "../../useContext";
import "../../App.css";
import img1 from "../../images/delivery.png";
import img2 from "../../images/award.png";
import img3 from "../../images/delivery-status.png";
import img4 from "../../images/ask-for-help.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  const { data, loading, error } = useContext(BioContext);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // data?.products?.map((product) => {
  //   console.log(`${product.tags[(0, 1)]} `);
  // });

  return (
    <>
      <div className="footer-container1 container-fluid">
        <div className="footer-child1 row bg-light pt-3 pb-2">
          <h1 className="text-center fs-3 fw-bold">Brand Directory</h1>
          <div className="foot1 col-md-6 ">
            <p className="footer-p1 float-start">
              Beauty :
              {data?.products?.map((product) => {
                return (
                  <span className="ms-1 foot-span">
                    {product.category === "beauty" ? (
                      <Link
                        to={`/product/${product.id}`}
                        style={{ textDecoration: "none", color: "#000" }}
                      >
                        {product.tags[1]} |
                      </Link>
                    ) : null}
                  </span>
                );
              })}
            </p>
          </div>
          <div className="foot1 col-md-6">
            <p className="footer-p1 float-md-end">
              Furniture :
              {data?.products?.map((product) => {
                return (
                  product.category === "furniture" && (
                    <Link
                      to={`/product/${product.id}`}
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      <span className="ms-1 foot-span">{`${product.tags[1]} |`}</span>
                    </Link>
                  )
                );
              })}
            </p>
          </div>
          <div className="foot1">
            <p className="footer-p1 text-md-center">
              Groceries :
              {data?.products?.map((product) => {
                return (
                  product.category === "groceries" && (
                    <Link
                      to={`/product/${product.id}`}
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      <span className="ms-1 foot-span">{`${product.tags[0]} |`}</span>
                    </Link>
                  )
                );
              })}
            </p>
          </div>
        </div>
        <div className="footer-child2 bg-dark text-white py-5 row">
          <div className="col-3 text-center">
            <img className="img-fluid foot-img" src={img1} />
            <p className="foot-p2 mt-2 lh-1">
              free india <br /> ground delivery
            </p>
          </div>
          <div className="col-3 text-center">
            <img className="img-fluid foot-img" src={img2} />
            <p className="foot-p2 mt-2 lh-1">
              be happy <br /> return
            </p>
          </div>
          <div className="col-3 text-center">
            <img className="img-fluid foot-img" src={img3} />
            <p className="foot-p2 mt-2 lh-1">
              best in class <br /> warranty
            </p>
          </div>
          <div className="col-3 text-center">
            <img className="img-fluid foot-img" src={img4} />
            <p className="foot-p2 mt-2 lh-1">
              questions <br /> and comments
            </p>
          </div>
          <div className="text-center pt-md-4 pt-3">
            <h1
              className="foot-h1 text-white fw-bold "
              style={{ fontFamily: "Rubik Mono One, monospace" }}
              href="#"
            >
              <span className="text-secondary text-opacity-50 foot-span1">
                @2024
              </span>
              ECOM
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};
