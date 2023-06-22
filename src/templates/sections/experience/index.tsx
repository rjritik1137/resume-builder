import ContributionList from '../../../components/ContributionList'
import SectionHeader from '../../../components/SectionHeader'
import styles from './experience.module.css'
import { Experience as ExperienceProps } from './types'

function ExperienceHeader({ experience }: { experience: ExperienceProps }) {
  const { duration } = experience
  return (
    <div
      className={`${styles.headersTypeContainer} ${styles.experienceHeader}`}
    >
      <p className={styles.organisationName}>{experience.organisationName}</p>
      {duration ? (
        <div>
          <span className={styles.duration}>
            {experience.duration?.dateRange.start}
          </span>
          <span className={styles.duration}>
            {experience.duration?.dateRange.end}
          </span>
        </div>
      ) : null}
    </div>
  )
}

function ExperienceSubheader({ experience }: { experience: ExperienceProps }) {
  return (
    <div
      className={`${styles.headersTypeContainer} ${styles.experienceSubHeader}`}
    >
      <span className={styles.position}>{experience.position}</span>
      <span className={styles.location}>{experience.duration?.location}</span>
    </div>
  )
}

function IndividualExperience(props: { data: ExperienceProps }) {
  const { data: experience } = props

  return (
    <div>
      <ExperienceHeader experience={experience} />
      <ExperienceSubheader experience={experience} />
      <ContributionList contributionList={experience.contribution} />
    </div>
  )
}

function Experience(props: { data: ExperienceProps[] }) {
  const { data } = props

  return (
    <div className={styles.experiencesContianer}>
      <SectionHeader title="Experience" />
      {data.map((item) => {
        return (
          <IndividualExperience
            data={item}
            key={item.organisationName + item.position}
          />
        )
      })}
    </div>
  )
}

export default Experience
