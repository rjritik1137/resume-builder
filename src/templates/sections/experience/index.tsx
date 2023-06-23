import ContributionList from '../../../components/ContributionList'
import Header from '../../../components/SectionHeaders/Header'
import SectionTitle from '../../../components/SectionTitle'
import styles from './experience.module.css'
import { Duration, Experience as ExperienceProps } from './types'

function ExperienceHeader({
  organisationName,
  duration,
}: {
  organisationName: string
  duration?: Duration
}) {
  return <Header heading={organisationName} duration={duration?.dateRange} />
}

function ExperienceSubheader({
  position,
  location,
}: {
  position: string
  location?: string
}) {
  return (
    <div
      className={`${styles.headersTypeContainer} ${styles.experienceSubHeader}`}
    >
      <span className={styles.position}>{position}</span>
      {location ? <span className={styles.location}>{location}</span> : null}
    </div>
  )
}

function IndividualExperience(props: { data: ExperienceProps }) {
  const { data: experience } = props

  return (
    <div>
      <ExperienceHeader
        organisationName={experience.organisationName}
        duration={experience.duration}
      />
      <ExperienceSubheader
        location={experience.duration?.location}
        position={experience.position}
      />
      <ContributionList contributionList={experience.contribution} />
    </div>
  )
}

function Experience(props: { data: ExperienceProps[] }) {
  const { data } = props

  return (
    <div className={styles.experiencesContianer}>
      <SectionTitle title="Experience" />
      {data.map((experience) => {
        return (
          <IndividualExperience
            data={experience}
            key={experience.organisationName + experience.position}
          />
        )
      })}
    </div>
  )
}

export default Experience
