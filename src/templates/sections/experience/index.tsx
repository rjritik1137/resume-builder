import ContributionList from '../../../components/ContributionList'
import SectionHeader from '../../../components/SectionHeaders'
import { SectionTitleLarge } from '../../../components/SectionTitle'
import { Location, Period } from '../../../@types/template1'
import styles from './experience.module.css'
import { Experience as ExperienceProps } from './types'
import FlexContainer from '../../../containers/FlexContainer'

function ExperienceHeader({
  organisationName,
  period,
}: {
  organisationName: string
  period?: Period
}) {
  return <SectionHeader heading={organisationName} range={period} />
}

function ExperienceSubheader({
  position,
  location,
}: {
  position: string
  location?: Location
}) {
  return (
    <FlexContainer
      classes={`${styles.headersTypeContainer} ${styles.experienceSubHeader}`}
    >
      <span className={styles.position}>{position}</span>
      {location ? (
        <span className={styles.location}>{location.address}</span>
      ) : null}
    </FlexContainer>
  )
}

function IndividualExperience(props: { data: ExperienceProps }) {
  const { data: experience } = props

  return (
    <div>
      <ExperienceHeader
        organisationName={experience.organisationName}
        period={experience.period}
      />
      <ExperienceSubheader
        location={experience.location}
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
      <SectionTitleLarge title="Experience" />
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
