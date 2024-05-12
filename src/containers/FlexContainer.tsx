import { ReactFCWithChildren } from '../@types/local-react'
import { Classes, mergeClasses } from '../utils/util'
import { flexStyles } from './styles'
import { ContainerType } from './types'

const StyleType = {
  [ContainerType.ROW]: flexStyles.flexRowContainer,
  [ContainerType.COLUMN]: flexStyles.flexColumnContainer,
}

const getContainerStyle = (direction?: ContainerType) => {
  if (!direction) return flexStyles.flexRowContainer
  return StyleType[direction]
}

const FlexContainer: ReactFCWithChildren<{
  direction?: ContainerType
  classes?: Classes
}> = ({ children, direction = ContainerType.ROW, classes }) => {
  const styleType = getContainerStyle(direction)
  return <div className={mergeClasses([classes, styleType])}>{children}</div>
}

export default FlexContainer
