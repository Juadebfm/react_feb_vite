import React, { createContext, useState, useEffect } from "react";

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [data, setData] = useState(null); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      // url
      const url =
        "https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13";

      // request object
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "212eb6b3ddmsh09b08aa0756630cp1bad60jsnb17f34b14dea",
          "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
        },
      };

      fetch(url, options)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error fetching data");
          }

          return response.json();
        })
        .then((result) => {
          console.log("API Response:", result);
          setData(result); // data = result
          setLoading(false);
        })
        .catch((error) => {
          console.log("Fetch Error: ", error);
          setLoading(false);
        });
    };

    fetchData();
  }, []);

  return (
    <WeatherContext.Provider value={{ data, loading }}>
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherContext, WeatherProvider };
