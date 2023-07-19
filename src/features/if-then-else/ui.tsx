import { FC } from 'react'

import { Button } from 'shared/ui/button/ui'

type IfThenElseProps = {
  clickIfThenElse: () => void
}
export const IfThenElse: FC<IfThenElseProps> = ({ clickIfThenElse }) => {
  return <Button onClick={clickIfThenElse}> IF-THEN-ELSE</Button>
}
