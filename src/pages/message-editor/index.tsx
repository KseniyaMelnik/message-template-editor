import { useState } from 'react'

import s from './styles.module.scss'

import { EditElementType } from 'entities/edit-elements-list'
import { ToggleShowEditor } from 'features/toggle-show-editor'
import { Toast } from 'shared/ui/toast'
import { MessageTemplateEditor } from 'widgets/message-template-editor'

const arrVarNames = localStorage.arrVarNames
  ? JSON.parse(localStorage.arrVarNames)
  : ['firstname', 'lastname', 'company', 'position']

const template = localStorage.template ? JSON.parse(localStorage.template) : null

const callbackSave = async (template: EditElementType[]) => {
  const stringTemplate = JSON.stringify(template)

  try {
    localStorage.setItem('template', stringTemplate)

    return <Toast text={'Success'} />
    // показываем сообщение об успешном сохранении данных
    //showSuccessMessage('Данные успешно сохранены в localStorage')
  } catch (error) {
    // показываем сообщение об ошибке
    //showErrorMessage('Не удалось сохранить данные в localStorage')
    console.error(error)
  }
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
        <div className={s.container}>
          <p>Click to open</p>
          <ToggleShowEditor showEditor={showEditor} setShowEditor={setShowEditor} />
        </div>
      )}
    </>
  )
}
