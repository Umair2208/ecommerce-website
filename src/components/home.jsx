import { useContext, useEffect, useRef, useState } from "react";
import { BioContext } from "../useContext";
import "../App.css";
import { Link } from "react-router-dom";
import { useCart } from "../useContext/cartContext";

export const Home = () => {
  const { data, loading, error } = useContext(BioContext);
  const { addToCart } = useCart();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  {
    data?.category?.smartphones?.products.map((product) => {
      return console.log(product.title);
    });
  }
  const beauty = data?.products
    ?.filter((product) => product.category === "beauty")
    ?.map((product) => product);

  const groceries = data?.products
    ?.filter((product) => product.category === "groceries")
    ?.map((product) => product);

  const fragnance = data?.products
    ?.filter((product) => product.category === "fragrances")
    ?.map((product) => product);

  const furniture = data?.products
    ?.filter((product) => product.category === "furniture")
    ?.map((product) => product);

  return (
    <>
      <div className="container-fluid home-container1 pb-3 px-0">
        <div className="home-parent1 row mx-auto"></div>
        <div className="home-parent2 row mx-auto">
          <div className="col-3 px-lg-3 px-md-2 px-1 d-flex justify-content-center mx-auto">
            <div className="homeChild1 px-lg-3 px-1 py-lg-auto py-2">
              <h2 className="homeH2">
                Up to 80% off |<br /> {furniture[1].title.slice(0)}...
              </h2>
              <Link to={`/category/${furniture[4]?.category}`}>
                <img
                  src={furniture[4]?.thumbnail}
                  className="img-fluid homeImg1 border"
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div className="col-3 px-lg-3 px-md-2 px-1 d-flex justify-content-center mx-auto">
            <div className="homeChild1 px-lg-3 px-1 py-lg-auto py-2">
              <h2 className="homeH2">
                Up to 75% off | <br /> {fragnance[1].title.slice(0)}...
              </h2>
              <Link to={`/category/${fragnance[4]?.category}`}>
                <img
                  src={fragnance[1].thumbnail}
                  className="img-fluid homeImg1 border"
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div className="col-3 px-lg-3 px-md-2 px-1 d-flex justify-content-center mx-auto">
            <div className="homeChild1 px-lg-3 px-1 py-lg-auto py-2">
              <h2 className="homeH2">
                Minimum 50% off | <br /> {groceries[5].title.slice(0)}...
              </h2>
              <Link to={`/category/${groceries[4]?.category}`}>
                <img
                  src={groceries[0].thumbnail}
                  className="img-fluid homeImg1 border"
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div className="col-3 px-lg-3 px-md-2 px-1 d-flex justify-content-center mx-auto">
            <div className="homeChild1 px-lg-3 px-1 py-lg-auto py-2">
              <h2 className="homeH2">
                Starting $7 | <br /> {beauty[1].title.slice(0)}...
              </h2>
              <Link to={`/category/${beauty[4]?.category}`}>
                <img
                  src={beauty[0].thumbnail}
                  className="img-fluid homeImg1 border"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="home-parent3 row mx-auto my-auto">
          <h1 className="homeH5 pt-md-5">
            fragrances
            <Link
              to={`/category/fragrances`}
              style={{ textDecoration: "none" }}
            >
              <spam className="homeSpam3 ms-2">See more...</spam>
            </Link>
          </h1>
          <div className="row px-lg-5 px-sm-3 px-1 d-flex justicy-content-center mx-auto">
            {data?.products
              ?.filter((item) => {
                return item.category === "fragrances";
              })
              .slice(1, 5)
              .map((item) => {
                return (
                  <>
                    <div className="col-3 px-lg-3 px-1 py-3" key={item.id}>
                      <div className="homeChild2 bg-light border border-1">
                        <Link
                          to={`/product/${item.id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <img
                            src={item.thumbnail}
                            className="img-fluid homeImg2 border border-2 "
                            alt={item.title}
                          />
                          <h2 className="homeH4 row ps-1">
                            <span className="col">${item.price}</span>
                            <span className="homeSpam1 text-end col">
                              -{item.discountPercentage}%
                            </span>
                          </h2>
                          <h2 className="homeH3 pt-1 ps-1">
                            {item.title.slice(0, 15)}...
                          </h2>
                        </Link>
                        <Link to={`/cart`} style={{ textDecoration: "none" }}>
                          <button
                            onClick={() => addToCart(item)}
                            className="homeBtn2 "
                          >
                            Add to cart
                          </button>
                        </Link>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
        <hr />
        <div className="home-parent3 row mx-auto my-auto ">
          <h1 className="homeH5 ">
            beauty
            <Link to={`/category/beauty`} style={{ textDecoration: "none" }}>
              <spam className="homeSpam3 ms-2">See more...</spam>
            </Link>
          </h1>
          <div className="row px-lg-5 px-sm-3 px-1 d-flex justicy-content-center mx-auto">
            {data?.products
              ?.filter((item) => {
                return item.category === "beauty";
              })
              .slice(1, 5)
              .map((item) => {
                return (
                  <>
                    <div className="col-3 px-lg-3 px-1 py-3" key={item.id}>
                      <div className="homeChild2 bg-light border border-1">
                        <Link
                          to={`/product/${item.id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <img
                            src={item.thumbnail}
                            className="img-fluid homeImg2 border border-2 "
                            alt={item.title}
                          />
                          <h2 className="homeH4 row ps-1">
                            <span className="col">${item.price}</span>
                            <span className="homeSpam1 text-end col">
                              -{item.discountPercentage}%
                            </span>
                          </h2>
                          <h2 className="homeH3 pt-1 ps-1">
                            {item.title.slice(0, 15)}...
                          </h2>
                        </Link>
                        <Link to={`/cart`} style={{ textDecoration: "none" }}>
                          <button
                            onClick={() => addToCart(item)}
                            className="homeBtn2 "
                          >
                            Add to cart
                          </button>
                        </Link>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
        <hr />
        <div className="home-parent3 row mx-auto my-auto ">
          <h1 className="homeH5 ">
            furniture{" "}
            <Link to={`/category/furniture`} style={{ textDecoration: "none" }}>
              <spam className="homeSpam3 ms-2">See more...</spam>
            </Link>
          </h1>
          <div className="row px-lg-5 px-sm-3 px-1 d-flex justicy-content-center mx-auto">
            {data?.products
              ?.filter((item) => {
                return item.category === "furniture";
              })
              .slice(1, 5)
              .map((item) => {
                return (
                  <>
                    <div className="col-3 px-lg-3 px-1 py-3" key={item.id}>
                      <div className="homeChild2 bg-light border border-1">
                        <Link
                          to={`/product/${item.id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <img
                            src={item.thumbnail}
                            className="img-fluid homeImg2 border border-2 "
                            alt={item.title}
                          />
                          <h2 className="homeH4 row ps-1">
                            <span className="col">${item.price}</span>
                            <span className="homeSpam1 text-end col">
                              -{item.discountPercentage}%
                            </span>
                          </h2>
                          <h2 className="homeH3 pt-1 ps-1">
                            {item.title.slice(0, 15)}...
                          </h2>
                        </Link>
                        <Link to={`/cart`} style={{ textDecoration: "none" }}>
                          <button
                            onClick={() => addToCart(item)}
                            className="homeBtn2 "
                          >
                            Add to cart
                          </button>
                        </Link>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
        <hr />
        <div className="home-parent3 row mx-auto my-auto ">
          <h1 className="homeH5 ">
            groceries{" "}
            <Link to={`/category/groceries`} style={{ textDecoration: "none" }}>
              <spam className="homeSpam3 ms-2">See more...</spam>
            </Link>
          </h1>
          <div className="row px-lg-5 px-sm-3 px-1 d-flex justicy-content-center mx-auto">
            {data?.products
              ?.filter((item) => {
                return item.category === "groceries";
              })
              .slice(1, 5)
              .map((item) => {
                return (
                  <>
                    <div className="col-3 px-lg-3 px-1 py-3" key={item.id}>
                      <div className="homeChild2 bg-light border border-1">
                        <Link
                          to={`/product/${item.id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <img
                            src={item.thumbnail}
                            className="img-fluid homeImg2 border border-2 "
                            alt={item.title}
                          />
                          <h2 className="homeH4 row ps-1">
                            <span className="col">${item.price}</span>
                            <span className="homeSpam1 text-end col">
                              -{item.discountPercentage}%
                            </span>
                          </h2>
                          <h2 className="homeH3 pt-1 ps-1">
                            {item.title.slice(0, 15)}...
                          </h2>
                        </Link>
                        <Link to={`/cart`} style={{ textDecoration: "none" }}>
                          <button
                            onClick={() => addToCart(item)}
                            className="homeBtn2 "
                          >
                            Add to cart
                          </button>
                        </Link>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};
