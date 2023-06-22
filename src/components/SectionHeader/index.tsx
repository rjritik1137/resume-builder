import Separator from '../Separator'
import styles from './Section.module.css'

function SectionHeader({ title }: { title: string }) {
  return (
    <div className={styles.sectionHeadingContainer}>
      <p className={styles.sectionHeading}>{title}</p>
      <Separator />
    </div>
  )
}

export default SectionHeader
