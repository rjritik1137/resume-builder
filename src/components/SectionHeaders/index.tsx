import React from 'react'
import FlexContainer from '../../containers/FlexContainer'
import { FontTypes, fontStyle } from '../../fonts/fonts'
import { styles } from './styles'

function SectionHeader({
  fontType = fontStyle.large,
  left,
  right,
}: {
  fontType?: FontTypes
  left?: (fontType?: FontTypes) => React.ReactNode
  right?: (fontType?: FontTypes) => React.ReactNode
}) {
  return (
    <FlexContainer classes={`${styles.headersTypeContainer} ${styles.header}`}>
      {left ? left(fontType) : <div></div>}
      {right ? right(fontType) : null}
    </FlexContainer>
  )
}

function SectionSubHeader({
  fontType = fontStyle.large,
  left,
  right,
}: {
  fontType?: FontTypes
  left?: (fontType?: FontTypes) => React.ReactNode
  right?: (fontType?: FontTypes) => React.ReactNode
}) {
  return (
    <FlexContainer
      classes={`${styles.headersTypeContainer} ${styles.subHeader}`}
    >
      {left ? left(fontType) : null}
      {right ? right(fontType) : null}
    </FlexContainer>
  )
}

export { SectionHeader, SectionSubHeader }
