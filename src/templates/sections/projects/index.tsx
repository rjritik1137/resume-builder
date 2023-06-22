import ContributionList from '../../../components/ContributionList'
import SectionHeader from '../../../components/SectionHeader'
import styles from './Project.module.css'
import { Project as ProjectProps } from './types'

function ProjectHeader({ project }: { project: ProjectProps }) {
  const { duration } = project
  return (
    <div className={`${styles.headersTypeContainer} ${styles.projectHeader}`}>
      <p className={styles.organisationName}>{project.organisationName}</p>
      {duration ? (
        <div>
          <span className={styles.duration}>
            {project.duration?.dateRange.start}
          </span>
          <span className={styles.duration}>
            {project.duration?.dateRange.end}
          </span>
        </div>
      ) : null}
    </div>
  )
}

function ProjectSubheader({ project }: { project: ProjectProps }) {
  return (
    <div
      className={`${styles.headersTypeContainer} ${styles.projectSubHeader}`}
    >
      <span className={styles.position}>
        {project.projectName + ' (' + project.tools.join(', ') + ')'}
      </span>
      <span className={styles.location}>{project.duration?.location}</span>
    </div>
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
      <SectionHeader title="Project" />
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
