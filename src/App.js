import React, { useEffect } from "react";
import { useState } from "react";
import './App.css';
import axios from "axios";
function App() {
  const [countries, setCountries] = useState([]);
  let fetchCountry = async () => {
    try {
      let response = await axios.get("https://restcountries.com/v3.1/all");
      setCountries(response.data);
    }
    catch (e) {
      console.log(e);
    }

  }
  const cardStyle = {
    width: "150px",
    height: "150px",
    display: "flex",
    flexDirection: "column",
    border: "1px solid black",
    borderRadius: "10px",
    padding: "10px",
    margin: "10px",
    textAlign: "center"


  }
  const imgStyle = {
    width: "100%",
    height: "80%"
  }
  const container = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"

  }
  useEffect(() => {
    fetchCountry();
    console.log(countries);
  }, [])
  return (
    <div style={container}>
      {countries.map((country) => (<div style={cardStyle}><img style={imgStyle} src={country.flags.png} alt={country.name.common} />
        <h3>{country.name.common}</h3></div>))}

    </div>
  );
}

export default App;
