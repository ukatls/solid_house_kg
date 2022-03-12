import Card from "../components/card/Card";

export default function Homepage() {
  return (
    <div className="container page">
      <div className="title">Homepage</div>
      <div className="cardsWrapper">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
