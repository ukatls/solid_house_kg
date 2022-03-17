import Card from "../components/card/Card";
import { useState, useEffect } from "react";
import { baseUrl, house } from "../constants";

export default function Homepage() {
  const [houses, setHouses] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(baseUrl + house)
      .then((resp) => resp.json())
      .then((data) => (setHouses(data.slice(0, 3)), setLoading(false)));
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
    <div className="container page">
      <div className="title">Homepage</div>
      <main>
        <div className="cardsWrapper">
          {houses.map((house) => (
            <Card
              key={house.id}
              id={house.id}
              title={house.title}
              imgUrl={house.imgUrl}
              price={house.price}
              description={house.description}
            />
          ))}
        </div>
      </main>
      <section id="aboutUs">about us</section>
    </div>
  );
}
