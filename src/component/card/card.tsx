import { cardProps } from "./prop"
import style from './card.module.css'

export function Card({
    children
}: cardProps) {
  return (
    <article className={`
      ${style.card}
    `}>
      {children}
    </article>
  )
}

export default Card;