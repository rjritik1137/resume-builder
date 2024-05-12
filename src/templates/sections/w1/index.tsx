import ContributionList from '../../../components/ContributionList'
import { SectionHeader } from '../../../components/SectionHeaders'
import { SectionTitleLarge } from '../../../components/SectionTitle'
import { Location, Period } from '../../../@types/template1'
import styles from './w1.module.css'
import { Experience as ExperienceProps } from './types'
import FlexContainer from '../../../containers/FlexContainer'
import Heading from '../../../components/Headings/Heading'
import LargeDate from '../../../components/Date/Date'

function Widget1Header({
  heading,
  period,
}: {
  heading: string
  period?: Period
}) {
  return (
    <SectionHeader
      left={(fontType) => {
        return <Heading heading={heading} fontType={fontType} />
      }}
      right={(fontType) => {
        return period ? <LargeDate range={period} fontType={fontType} /> : null
      }}
    />
  )
}

function Widget1SubHeader({
  subheading,
  location,
}: {
  subheading: string
  location?: Location
}) {
  return (
    <FlexContainer
      classes={`${styles.headersTypeContainer} ${styles.experienceSubHeader}`}
    >
      <span className={styles.subheading}>{subheading}</span>
      {location ? (
        <span className={styles.location}>{location.address}</span>
      ) : null}
    </FlexContainer>
  )
}

function Widget1Content(props: { data: ExperienceProps }) {
  const { data: experience } = props

  return (
    <div>
      <Widget1Header heading={experience.heading} period={experience.period} />
      <Widget1SubHeader
        location={experience.location}
        subheading={experience.subheading}
      />
      <ContributionList contributionList={experience.contribution} />
    </div>
  )
}

function Widget1(props: {
  data: { title: string; content: ExperienceProps[] }
}) {
  const {
    data: { title, content },
  } = props

  return (
    <div className={styles.experiencesContianer}>
      <SectionTitleLarge title={title} />
      {content.map((experience) => {
        return (
          <Widget1Content
            data={experience}
            key={experience.heading + experience.subheading}
          />
        )
      })}
    </div>
  )
}

export default Widget1
