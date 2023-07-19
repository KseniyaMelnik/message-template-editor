import { FC, ReactNode } from 'react'

import s from './styles.module.scss'

type ModalProps = {
  children: ReactNode
  onClose: () => void
}

export const Modal: FC<ModalProps> = ({ children, onClose }) => {
  return (
    <div className={s.modal}>
      <div className={s.content}>
        <button onClick={onClose}>Close</button>
        {children}
      </div>
    </div>
  )
}
