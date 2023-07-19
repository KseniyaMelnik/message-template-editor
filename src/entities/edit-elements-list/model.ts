// TYPES
export type TextBlockType = {
  type: 'text'
  value: string
}

export type IfThenElseBlockType = {
  type: 'if-then-else'
  ifBranch: EditElementsListType
  thenBranch: EditElementsListType
  elseBranch: EditElementsListType
}

export type EditElementType = TextBlockType | IfThenElseBlockType

export type EditElementsListType = EditElementType[]
