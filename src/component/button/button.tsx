import style from './button.module.css'
import { buttonProps } from './prop'

export function Button({
  variant = 'primary',
  size = 'small',
  type,
  label,
  url,
  onClick
}: buttonProps) {
  const Tag = type || 'button'
  const href = type === 'a' ? (url || undefined) : undefined

  return (
    <Tag
      className={`
        ${style[`${variant}`]}
        ${style[`${size}`]}
        ${style.button}
      `}
      href={href}
      onClick={onClick}
      >
        {label}
    </Tag>
  );
}

export default Button;

