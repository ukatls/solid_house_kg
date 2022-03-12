import Card from "../components/card/Card";
import { useState,useEffect } from "react";

export default function Homepage() {

  // const [numbers,setNumbers] = useState(0)
  const [houses,setHouses] = useState([
    {
      id: 1,
      title: 'Продаю дом 4к',
      imgUrl: "https://cdn.pixabay.com/photo/2021/10/07/15/23/real-estate-6688945_960_720.jpg",
      price: '&67000'
    },{
      id: 2,
      title: 'Продаю квартиру',
      imgUrl: "https://cdn.pixabay.com/photo/2021/10/07/15/23/real-estate-6688945_960_720.jpg",
      price: '&6000'
    },{
      id: 3,
      title: 'Продаю дом 4к',
      imgUrl: "https://cdn.pixabay.com/photo/2021/10/07/15/23/real-estate-6688945_960_720.jpg",
      price: '&67000'
    }
  ])

  return (
    <div className="container page">

      {/* <div>
        <button onClick={
        ()=>{setNumbers(numbers - 1)}}>
          Minus
        </button>
        <h1>{numbers}</h1>
        <button onClick={
        ()=>{setNumbers(numbers + 1)}}>
          Plus
        </button>
      </div> */}


      <div className="title">Homepage</div>
      <div className="cardsWrapper">
        {houses.map((house) => <Card
        key={house.id}
        title={house.title}
        imgUrl={house.imgUrl}
        price={house.price}
        />)}
      </div>
    </div>
  );
}
