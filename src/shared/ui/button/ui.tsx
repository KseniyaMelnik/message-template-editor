import { FC, ReactNode } from 'react'

import s from './styles.module.scss'

type ButtonProps = {
  children: ReactNode
  onClick: () => void
}
export const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button className={s.button} onClick={onClick}>
      {children}
    </button>
  )
}
