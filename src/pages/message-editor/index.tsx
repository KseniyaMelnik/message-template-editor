import { useState } from 'react'

import { EditElementType } from 'entities/edit-elements-list'
import { ToggleShowEditor } from 'features/toggle-show-editor'
import { MessageTemplateEditor } from 'widgets/message-template-editor'

const arrVarNames = localStorage.arrVarNames
  ? JSON.parse(localStorage.arrVarNames)
  : ['firstname', 'lastname', 'company', 'position']

const template = localStorage.template ? JSON.parse(localStorage.template) : null

const callbackSave = async (template: EditElementType[]) => {
  const stringTemplate = JSON.stringify(template)

  localStorage.setItem('template', stringTemplate)
}

export const MessageEditor = () => {
  const [showEditor, setShowEditor] = useState(false)

  return (
    <>
      {showEditor ? (
        <MessageTemplateEditor
          arrVarNames={arrVarNames}
          callbackSave={callbackSave}
          template={template}
          showEditor={showEditor}
          setShowEditor={setShowEditor}
        />
      ) : (
        <ToggleShowEditor showEditor={showEditor} setShowEditor={setShowEditor} />
      )}
    </>
  )
}
