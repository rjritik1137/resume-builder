import { FontTypes, fontStyle } from '../../fonts/fonts'
import { CssClassType, mergeClasses } from '../../utils/util'
function Heading({
  heading,
  fontType,
  additionalClass,
}: {
  heading: string
  fontType?: FontTypes
  additionalClass?: CssClassType
}) {
  return (
    <p className={mergeClasses([fontStyle.large, fontType, additionalClass])}>
      {heading}
    </p>
  )
}

export default Heading
