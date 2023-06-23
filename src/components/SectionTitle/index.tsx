import { FontTypes, fontStyle } from '../../fonts/fonts'
import Heading from '../Headings/Heading'
import Separator from '../Separator'
import styles from './Section.module.css'

function SectionTitle({
  title,
  fontType = fontStyle.largeXXX,
}: {
  title: string
  fontType?: FontTypes
}) {
  return (
    <div className={styles.sectionLargeHeadingContainer}>
      <Heading heading={title} fontType={fontType} />
      <Separator />
    </div>
  )
}

export default SectionTitle
