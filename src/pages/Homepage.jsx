import Card from "../components/card/Card";
import { useState, useEffect } from "react";

export default function Homepage() {
  const [houses, setHouses] = useState([]);

  useEffect(()=> {
    const url = "https://622cbd42087e0e041e128edd.mockapi.io/house"
    fetch(url)
      .then(resp=>{
        return resp.json();
      })
      .then(data=>{
        setHouses(data)
      })
  },[])

  return (
    <div className="container page">
      <div className="title">Homepage</div>
      <div className="cardsWrapper">
        {houses && houses.map((house) => (
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