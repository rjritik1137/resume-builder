import React from 'react'
import { FontTypes, fontStyle } from '../../fonts/fonts'
import Date from '../Date/Date'
import Heading from '../Headings/Heading'
import { styles } from './styles'

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
    <div
      className={`${styles.headersTypeContainer} ${styles.experienceHeader}`}
    >
      <Heading heading={heading} fontType={fontType} />
      {range ? <Date range={range} fontType={fontType} /> : null}
    </div>
  )
}

export default SectionHeader
