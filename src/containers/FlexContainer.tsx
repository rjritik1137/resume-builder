import { ReactFCWithChildren } from '../@types/local-react'
import { Classes, mergeClasses } from '../utils/util'
import { flexStyles } from './styles'
import { ContainerType } from './types'

const FlexContainer: ReactFCWithChildren<{
  direction?: ContainerType
  classes?: Classes
}> = ({ children, direction = ContainerType.ROW, classes }) => {
  const styleType =
    direction === ContainerType.ROW
      ? flexStyles.flexRowContainer
      : direction === ContainerType.COLUMN
      ? flexStyles.flexColumnContainer
      : flexStyles.flexRowContainer
  return <div className={mergeClasses([classes, styleType])}>{children}</div>
}

export default FlexContainer
