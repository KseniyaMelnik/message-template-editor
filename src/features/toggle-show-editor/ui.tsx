import { FC } from 'react'

import { Button } from 'shared/ui/button/ui'

type ToggleShowEditorProps = {
  showEditor: boolean
  setShowEditor: (showEditor: boolean) => void
}
export const ToggleShowEditor: FC<ToggleShowEditorProps> = ({ showEditor, setShowEditor }) => {
  const toggleShowEditor = () => {
    setShowEditor(!showEditor)
  }

  const children = showEditor ? 'Close' : 'Message Editor'

  return <Button onClick={toggleShowEditor}>{children}</Button>
}
