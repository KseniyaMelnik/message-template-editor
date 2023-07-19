import { EditElementsListType } from 'entities/edit-elements-list'

type ValuesType = Record<string, string>

export function generateMessage(template: EditElementsListType, values: ValuesType): string {
  let message = ''

  for (const block of template) {
    if (block.type === 'text') {
      message += block.value
    } else if (block.type === 'if-then-else') {
      const ifValue = getBlockValue(block.ifBranch, values)
      const branch = ifValue ? block.thenBranch : block.elseBranch

      if (branch) {
        message += generateMessage(branch, values)
      }
    }
  }

  return replaceValues(message, values)
}

function getBlockValue(blocks: EditElementsListType | undefined, values: ValuesType): string {
  if (!blocks) {
    return ''
  }

  let value = ''

  for (const block of blocks) {
    if (block.type === 'text') {
      value += block.value
    } else if (block.type === 'if-then-else') {
      const ifValue = getBlockValue(block.ifBranch, values)
      const branch = ifValue ? block.thenBranch : block.elseBranch

      if (branch) {
        value += generateMessage(branch, values)
      }
    }
  }

  return replaceValues(value, values)
}

function replaceValues(value: string, values: ValuesType): string {
  for (const [name, val] of Object.entries(values)) {
    const pattern = new RegExp(`{${name}}`, 'g')

    value = value.replace(pattern, val)
  }

  return value
}
