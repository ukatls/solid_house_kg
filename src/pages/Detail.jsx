import React from "react";
import { useState, useEffect } from "react";
import { baseUrl, houseApi } from "../constants";
import { useParams } from "react-router-dom";

export default function Detail() {
  const [houses, setHouses] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetch(baseUrl + houseApi + id)
      .then((resp) => resp.json())
      .then((data) => setHouses(data), setLoading(false));
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
  if (!houses) {
    return <h1>Not data</h1>;
  }
  return (
    <div className="detailCard">
      <div>
        <img src={houses.imgUrl} alt="#" />
        <h1>Title:{houses.title}</h1>
        <h1>Price:{houses.price}</h1>
      </div>
      <div>
        <h3>{houses.description}</h3>
      </div>
    </div>
  );
}

