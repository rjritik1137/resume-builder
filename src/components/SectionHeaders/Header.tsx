import Date from '../Date/Date'
import Heading from '../Headings/Heading'
import { styles } from './styles'

function LargeHeader({
  heading,
  duration,
}: {
  heading: string
  duration?: { start: string; end: string }
}) {
  return (
    <div
      className={`${styles.headersTypeContainer} ${styles.experienceHeader}`}
    >
      <Heading heading={heading} />
      {duration ? (
        <div>
          <Date dateRange={duration} />
        </div>
      ) : null}
    </div>
  )
}

export default LargeHeader
