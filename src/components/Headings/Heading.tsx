import { FontTypes, fontStyle } from '../../fonts/fonts'
import { Classes, mergeClasses } from '../../utils/util'
function Heading({
  heading,
  fontType = fontStyle.large,
  additionalClass,
}: {
  heading: string
  fontType?: FontTypes
  additionalClass?: Classes
}) {
  return <p className={mergeClasses([additionalClass, fontType])}>{heading}</p>
}

export default Heading
