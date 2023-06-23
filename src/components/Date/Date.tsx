import React from 'react'
import { FontTypes, fontStyle } from '../../fonts/fonts'
import { mergeClasses } from '../../utils/util'

function LargeDate({
  dateRange,
  fontType,
}: {
  dateRange: { start: string; end: string }
  fontType?: FontTypes
}) {
  return (
    <>
      <span className={mergeClasses([fontStyle.large, fontType])}>
        {dateRange.start}
      </span>
      <span className={mergeClasses([fontStyle.large, fontType])}>
        {dateRange.end}
      </span>
    </>
  )
}

export default LargeDate
