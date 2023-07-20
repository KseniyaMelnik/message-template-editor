import { FC } from 'react'

import { Button } from 'shared/ui/button/ui'

type AddIfThenElseProps = {
  clickIfThenElse: () => void
}
export const AddIfThenElse: FC<AddIfThenElseProps> = ({ clickIfThenElse }) => {
  return <Button onClick={clickIfThenElse}> IF-THEN-ELSE</Button>
}
