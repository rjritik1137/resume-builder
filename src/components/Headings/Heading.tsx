import { FontTypes, fontStyle } from '../../fonts/fonts'
import { CssClassType, mergeClasses } from '../../utils/util'
function Heading({
  heading,
  fontType = fontStyle.large,
  additionalClass,
}: {
  heading: string
  fontType?: FontTypes
  additionalClass?: CssClassType
}) {
  return <p className={mergeClasses([additionalClass, fontType])}>{heading}</p>
}

export default Heading
