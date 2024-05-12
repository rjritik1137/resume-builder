import ContributionList from '../../../components/ContributionList'
import { SectionHeader } from '../../../components/SectionHeaders'
import { SectionTitleLarge } from '../../../components/SectionTitle'
import { Location, Period } from '../../../@types/template1'
import styles from './w1.module.css'
import { Experience as ExperienceProps } from './types'
import FlexContainer from '../../../containers/FlexContainer'
import Heading from '../../../components/Headings/Heading'
import LargeDate from '../../../components/Date/Date'
import { renderJsx } from '../../../utils/util'

function Header({ heading, period }: { heading: string; period?: Period }) {
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

function SubHeader({
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
      {renderJsx(location, (location) => (
        <span className={styles.location}>{location.address}</span>
      ))}
    </FlexContainer>
  )
}

function Content(props: { data: ExperienceProps }) {
  const { data } = props

  return (
    <div>
      {renderJsx(data.heading, () => (
        <Header heading={data.heading} period={data.period} />
      ))}
      {renderJsx(data.subheading, () => (
        <SubHeader location={data.location} subheading={data.subheading} />
      ))}
      {renderJsx(data.contribution, () => (
        <ContributionList contributionList={data.contribution} />
      ))}
    </div>
  )
}

function W1(props: { data: { title: string; content: ExperienceProps[] } }) {
  const {
    data: { title, content },
  } = props

  return (
    <div className={styles.experiencesContianer}>
      <SectionTitleLarge title={title} />
      {renderJsx(content, () =>
        content.map((item) => {
          return <Content data={item} key={item.heading + item.subheading} />
        })
      )}
    </div>
  )
}

export default W1
