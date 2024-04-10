import style from './badge.module.css'
import { badgeProps } from "./props";
import { NunitoFont } from '@/font/font';

export function Badge({label, variant}: badgeProps){
  return (
    <span className={`${style[`${variant}`]} ${style.badge} ${NunitoFont.className}`}>
        {label}
    </span>
  )
}

export default Badge;