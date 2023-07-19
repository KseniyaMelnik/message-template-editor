import { useLayoutEffect, useState } from 'react'

import { MessagePreview } from './message-preview'
import s from './styles.module.scss'

import { EditElementsList, EditElementType } from 'entities/edit-elements-list'
import { IfThenElse } from 'features/if-then-else'
import { OpenPreview } from 'features/open-preview'
import { SaveTemplate } from 'features/save-template'
import { ToggleShowEditor } from 'features/toggle-show-editor'
import { Variables } from 'features/variables'
import { Modal } from 'shared/ui/modal'

type MessageEditorProps = {
  arrVarNames: string[]
  template?: EditElementType[]
  callbackSave: (template: EditElementType[]) => void
  showEditor: boolean
  setShowEditor: (showEditor: boolean) => void
}

export const MessageTemplateEditor = ({
  arrVarNames,
  template,
  callbackSave,
  showEditor,
  setShowEditor,
}: MessageEditorProps) => {
  const [clickVariable, setClickVariable] = useState<(val: string) => void>(() => () => {})
  const [clickIfThenElse, setIfThenElse] = useState<() => void>(() => () => {})

  const [blocks, setBlocks] = useState<EditElementType[]>(template || [])
  const [showModal, setShowModal] = useState(false)

  useLayoutEffect(() => {
    const firstTextarea = document.querySelector('textarea')

    if (firstTextarea) {
      firstTextarea.focus()
    }
  }, [])

  const onCloseModal = () => setShowModal(false)

  return (
    <div className={s.container}>
      <h2 className={s.title}>Message Template Editor</h2>

      <div>
        <span className={s.description}>Variables</span>
        <Variables arrVarNames={arrVarNames} clickVariable={clickVariable} />
      </div>

      <div>
        <span className={s.description}>
          Click to add: if [{'some_variable'} or expression] then [then_value] else [else_value]
        </span>
        <div>
          <IfThenElse clickIfThenElse={clickIfThenElse} />
        </div>
      </div>
      <div>
        <span className={s.description}>Message template</span>
        <div className={s.template}>
          <EditElementsList
            blocks={blocks}
            onUpdateBlock={setBlocks}
            handleVariable={setClickVariable}
            handleIfThenElse={setIfThenElse}
          />
        </div>
      </div>

      <div className={s.controls}>
        <OpenPreview setShowModal={setShowModal} />
        <SaveTemplate template={blocks} callbackSave={callbackSave} />
        <ToggleShowEditor showEditor={showEditor} setShowEditor={setShowEditor} />
      </div>
      {showModal && (
        <Modal onClose={onCloseModal} showModal={showModal}>
          <MessagePreview arrVarNames={arrVarNames} template={blocks} />
        </Modal>
      )}
    </div>
  )
}
