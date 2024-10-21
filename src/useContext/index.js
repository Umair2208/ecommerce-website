import { createContext, useEffect, useState } from "react";

export const BioContext = createContext();

export const BioProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from the API
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
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  console.log(data);

  return (
    <BioContext.Provider value={{ data, loading, error }}>
      {children}
    </BioContext.Provider>
  );
};
