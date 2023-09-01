import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setItemList(response.data);
      })
      
  };

  return (
    <div className="App">
      <ul className="list-view">
        {itemList.map((item) => (
          <li className="list-item" key={item.id}>
            <img src={item.image} alt={item.title} className="item-image" />
            <h3 className="item-title">{item.title}</h3>
            <h3 className="item-title">{item.price}</h3>
            <p className="item-description">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
