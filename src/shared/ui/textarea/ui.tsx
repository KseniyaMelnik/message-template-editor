import { ChangeEvent, FocusEvent, FC, useEffect } from 'react'

import TextareaAutosize from 'react-textarea-autosize'

import s from './styles.module.scss'

type TextareaProps = {
  value: string
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
  onFocus: (event: FocusEvent<HTMLTextAreaElement>) => void
}
export const Textarea: FC<TextareaProps> = ({ value, onChange, onFocus }) => {
  return (
    <TextareaAutosize className={s.textarea} value={value} onChange={onChange} onFocus={onFocus} />
  )
}
