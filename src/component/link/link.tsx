import style from './link.module.css'
import { linkProps } from './prop'

export function Link({
  label,
  url,
  size = 'small',
  onClick
}: linkProps) {
  return (
    <a
    className={`
      ${style[`${size}`]}
      ${style.button}
    `}
      href={url}
      onClick={onClick}
    >
        {label}
    </a>
  );
}

export default Link;