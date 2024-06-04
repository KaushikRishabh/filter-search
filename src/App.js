import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [countries, setCountries] = useState([
    {
      id: 1,
      name: "India",
    },
    {
      id: 2,
      name: "China",
    },
  ]);
  const [filteredData, setFilteredData] = useState([
    {
      id: 1,
      name: "India",
    },
    {
      id: 2,
      name: "China",
    },
  ]);
  const [search, setSearch] = useState("");

  const handleSearch = (val) => {
    let temp = countries.filter((cunt, index) => {
      return cunt.name.toLowerCase().includes(val.toLowerCase());
    });
    setFilteredData(temp);
  };

  return (
    <div className="App">
      <input type="text" onChange={(e) => handleSearch(e.target.value)} />
      <ul>
        {filteredData?.map((country, index) => {
          return <li key={index}> {country?.name}</li>;
        })}
      </ul>
    </div>
  );
}
