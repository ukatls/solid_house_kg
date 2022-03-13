import css from './Card.module.css'

export default function Card(props) {
  return (
    <div className={css.wrapper}>
      <div className={css.imgWrapper}>
        <img className={css.img} src={props.imgUrl} alt="#" />
      </div>
      <h2>$ {props.price}</h2>
      <h3>{props.title}</h3>
      <p className={css.p}>{props.description}</p>
      <button>Подробнее</button>
    </div>
  )
}
