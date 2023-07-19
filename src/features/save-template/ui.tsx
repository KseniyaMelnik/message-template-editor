import { FC } from 'react'

import { EditElementType } from 'entities/edit-elements-list'
import { Button } from 'shared/ui/button/ui'

type SaveTemplateProps = {
  template: EditElementType[]
  callbackSave: (template: EditElementType[]) => void
}
export const SaveTemplate: FC<SaveTemplateProps> = ({ template, callbackSave }) => {
  const onSave = () => {}

  return <Button onClick={() => callbackSave(template)}>Save</Button>
}
