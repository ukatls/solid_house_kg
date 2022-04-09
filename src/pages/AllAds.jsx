import React from "react";
import { houseApi, baseUrl } from "../constants";
import { useState, useEffect } from "react";
import Card from "../components/card/Card";


export default function AllAds() {
    const [houses, setHouses] = useState([]);
    const [isLoading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch(baseUrl + houseApi)
        .then((resp) => resp.json())
        .then((data) => (setHouses(data), setLoading(false)));
    }, []);
  
    if (isLoading) {
      return (
        <div className="text-center mt-5">
          <img
            width={"400px"}
            src="https://upload.wikimedia.org/wikipedia/commons/5/54/Ajux_loader.gif"
            alt="Loading gif"
          />
        </div>
      );
    }

  return (
    <div className="container">
      <div className="cardsWrapper">
        {houses.map((house) => (
          <Card
            key={house.id}
            title={house.title}
            imgUrl={house.imgUrl}
            price={house.price}
            description={house.description}
          />
        ))}
      </div>
    </div>
  );
}
