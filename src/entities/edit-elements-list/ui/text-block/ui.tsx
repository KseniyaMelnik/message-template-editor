import { Dispatch, FC, SetStateAction, FocusEvent, ChangeEvent } from 'react'

import { EditElementType, TextBlockType } from '../../model'

import { Textarea } from 'shared/ui/textarea'

export type TextBlockPropsType = {
  value: string
  onSeparateBlocks: (updatedBlock: EditElementType, addedBlock: EditElementType) => void
  onUpdateBlock: (newBlock: TextBlockType) => void
  handleVariable: Dispatch<SetStateAction<(val: string) => void>>
  handleIfThenElse: Dispatch<SetStateAction<() => void>>
  focus?: boolean
}
export const TextBlock: FC<TextBlockPropsType> = ({
  value,
  onUpdateBlock,
  onSeparateBlocks,
  handleVariable,
  handleIfThenElse,
  focus,
}) => {
  const variableHandler = (event: FocusEvent<HTMLTextAreaElement>) => (text: string) => {
    const selectionStart = event.target.selectionStart
    const selectionEnd = event.target.selectionEnd
    const value = event.target.value
    const newValue = value.substring(0, selectionStart) + text + value.substring(selectionEnd)

    onUpdateBlock({ type: 'text', value: newValue })
  }

  const ifThenElseHandler = (event: FocusEvent<HTMLTextAreaElement>) => () => {
    const selectionStart = event.target.selectionStart
    const selectionEnd = event.target.selectionEnd
    const value = event.target.value

    const value1 = value.substring(0, selectionStart)
    const value2 = value.substring(selectionEnd)

    onSeparateBlocks({ type: 'text', value: value1 }, { type: 'text', value: value2 })
  }
  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value: newValue } = event.target

    onUpdateBlock({ type: 'text', value: newValue })
  }

  const handleTextareaFocusCombined = (event: FocusEvent<HTMLTextAreaElement>) => {
    handleVariable(() => variableHandler(event))
    handleIfThenElse(() => ifThenElseHandler(event))
  }

  return (
    <Textarea
      focus={focus}
      value={value}
      onChange={handleTextChange}
      onFocus={handleTextareaFocusCombined}
    />
  )
}
