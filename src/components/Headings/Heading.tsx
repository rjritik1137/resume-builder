import { FontTypes, fontStyle } from '../../fonts/fonts'
import { Classes, mergeClasses } from '../../utils/util'
function Heading({
  heading,
  fontType = fontStyle.large,
  classes,
}: {
  heading: string
  fontType?: FontTypes
  classes?: Classes
}) {
  return <p className={mergeClasses([classes, fontType])}>{heading}</p>
}

export default Heading
