import React from 'react'
import { Skill as SkillProps } from './types'
import styles from './Skill.module.css'
import { SectionTitleLarge } from '../../../components/SectionTitle'

function Skill({ skill }: { skill: SkillProps }) {
  return (
    <div>
      <span className={styles.skillType}>{skill.type + ': '}</span>
      <span className={styles.skillNames}>{skill.list.join(', ')}</span>
    </div>
  )
}

function Skills(props: { data: SkillProps[] }) {
  const { data } = props
  return (
    <div>
      <SectionTitleLarge title="Techincal Skills" />
      <div className={styles.skillListContainer}>
        {data.map((skill) => {
          return <Skill key={skill.type} skill={skill} />
        })}
      </div>
    </div>
  )
}

export default Skills
