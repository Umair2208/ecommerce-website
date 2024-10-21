import { useEffect, useState } from "react";
import { AppLayout } from "./components/layout/appLayout";
import { Home } from "./components/home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { BioProvider } from "./useContext";
import { CategoryPage } from "./components/categoryPage";
import { ProductDetail } from "./components/productDetail";
import { Cart } from "./components/cart";
import { CartProvider } from "./useContext/cartContext";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((resp) => {
        setData(resp);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/category/:categoryName",
          element: <CategoryPage data={data} loading={loading} error={error} />,
        },
        {
          path: "/product/:productId",
          element: (
            <ProductDetail data={data} loading={loading} error={error} />
          ),
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
  ]);

  return (
    <CartProvider>
      <BioProvider value={{ data, loading, error }}>
        <RouterProvider router={router} />
      </BioProvider>
    </CartProvider>
  );
}

export default App;
