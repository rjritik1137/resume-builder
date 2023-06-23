import React from 'react'
import { FontTypes, fontStyle } from '../../fonts/fonts'
import { mergeClasses } from '../../utils/util'

function LargeDate({
  range,
  fontType,
}: {
  range: { start: string; end: string }
  fontType?: FontTypes
}) {
  return (
    <div>
      <span className={mergeClasses([fontStyle.large, fontType])}>
        {range.start}
      </span>
      <span className={mergeClasses([fontStyle.large, fontType])}>
        {range.end}
      </span>
    </div>
  )
}

export default LargeDate
