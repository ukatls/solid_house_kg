import css from './Card.module.css'

export default function Card() {
  return (
    <div className={css.wrapper}>
      <img className={css.img} src="https://cdn.pixabay.com/photo/2021/10/07/15/23/real-estate-6688945_960_720.jpg" alt="#" />
      <h2>$75000</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio optio, incidunt accusamus at placeat odit nesciunt illum quod. Facere, reprehenderit!</p>
      <button>Подробнее</button>
    </div>
  )
}
