import ContributionList from '../../../components/ContributionList'
import LargeDate from '../../../components/Date/Date'
import Heading from '../../../components/Headings/Heading'
import { SectionHeader } from '../../../components/SectionHeaders'
import { SectionTitleLarge } from '../../../components/SectionTitle'
import FlexContainer from '../../../containers/FlexContainer'
import styles from './Project.module.css'
import { Project as ProjectProps } from './types'

function ProjectHeader({ project }: { project: ProjectProps }) {
  return (
    <SectionHeader
      left={(fontType) => {
        return (
          <Heading heading={project.organisationName} fontType={fontType} />
        )
      }}
      right={(fontType) => {
        return project.period ? (
          <LargeDate range={project.period} fontType={fontType} />
        ) : null
      }}
    />
  )
}

function ProjectSubheader({ project }: { project: ProjectProps }) {
  return (
    <FlexContainer
      classes={`${styles.headersTypeContainer} ${styles.projectSubHeader}`}
    >
      <span className={styles.position}>
        {project.projectName + ' (' + project.tools.join(', ') + ')'}
      </span>
      <span className={styles.location}>{project.location?.address}</span>
    </FlexContainer>
  )
}

function IndividualProject(props: { data: ProjectProps }) {
  const { data: project } = props

  return (
    <div>
      <ProjectHeader project={project} />
      <ProjectSubheader project={project} />
      <ContributionList contributionList={project.contribution} />
    </div>
  )
}

function Project(props: { data: ProjectProps[] }) {
  const { data } = props

  return (
    <div className={styles.projectsContianer}>
      <SectionTitleLarge title="Project" />
      {data.map((item) => {
        return (
          <IndividualProject
            data={item}
            key={item.organisationName + item.projectName}
          />
        )
      })}
    </div>
  )
}

export default Project
