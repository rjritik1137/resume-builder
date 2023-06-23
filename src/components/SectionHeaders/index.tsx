import React from 'react'
import { FontTypes, fontStyle } from '../../fonts/fonts'
import Date from '../Date/Date'
import Heading from '../Headings/Heading'
import { styles } from './styles'
import FlexContainer from '../../containers/FlexContainer'

function SectionHeader({
  heading,
  range,
  fontType = fontStyle.large,
}: {
  heading: string
  range?: { start: string; end: string }
  fontType?: FontTypes
}) {
  return (
    <FlexContainer
      classes={`${styles.headersTypeContainer} ${styles.experienceHeader}`}
    >
      <Heading heading={heading} fontType={fontType} />
      {range ? <Date range={range} fontType={fontType} /> : null}
    </FlexContainer>
  )
}

export default SectionHeader
