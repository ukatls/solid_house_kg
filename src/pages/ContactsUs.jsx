import React from "react";
import GoogleMapReact from "google-map-react";
import { defaultCenter } from "./../constants/index";
import { houseApi, baseUrl } from "../constants";
import { useState, useEffect } from "react";
import Card from "../components/card/Card";

const Marker = () => {
  return (
    <div>
      <img
        width={"40px"}
        src="https://cdn-icons.flaticon.com/png/512/186/premium/186250.png?token=exp=1647947616~hmac=4dcd1910c1208c273d90c9394592dcfe"
        alt="Lokal"
      />
    </div>
  );
};

export default function ContactsUs() {
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
    <div className="container detailCard">
      <div style={{ height: "70vh", width: "50%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyA1uIgJLlFocMlwcu8b3wKPKkdT2mWV3AU" /* YOUR KEY HERE */,
          }}
          defaultCenter={defaultCenter}
          defaultZoom={11}
        >
          {houses.map((house) => (
            <Marker
              key={house.id}
              lat={house.lat}
              lng={house.lng}
              text="gfrvfhb"
            />
          ))}
        </GoogleMapReact>
      </div>
      <div style={{ height: "70vh", width: "50%" }}>
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
    </div>
  );
}
