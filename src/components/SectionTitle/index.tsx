import { fontStyle } from '../../fonts/fonts'
import Heading from '../Headings/Heading'
import Separator from '../Separator'
import styles from './Section.module.css'

function SectionTitle({ title }: { title: string }) {
  return (
    <div className={styles.sectionLargeHeadingContainer}>
      <Heading heading={title} fontType={fontStyle.largeXXX} />
      <Separator />
    </div>
  )
}

export default SectionTitle
