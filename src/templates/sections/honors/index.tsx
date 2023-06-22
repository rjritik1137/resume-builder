import React from 'react'
import { Achivement as AchivementProps, Honors as HonorsProps } from './types'
import SectionHeader from '../../../components/SectionHeader'
import styles from './honors.module.css'
import { mergeClasses } from '../../../utils/util'
function Achievement(props: { data: AchivementProps }) {
  return (
    <div className={styles.achivementContainer}>
      <span
        className={mergeClasses([styles.zeroMargin, styles.achivementTitle])}
      >
        {props.data.title}
      </span>
      {props.data.description ? (
        <span
          className={mergeClasses([
            styles.zeroMargin,
            styles.achivementDescription,
          ])}
        >
          {props.data.description}
        </span>
      ) : null}
    </div>
  )
}

function Achievements(props: { data: AchivementProps[] }) {
  return (
    <>
      {props.data.map((item) => {
        return <Achievement key={item.title} data={item} />
      })}
    </>
  )
}

function Honors(props: { data: HonorsProps[] }) {
  return (
    <div>
      <SectionHeader title="Achievements & Honors" />
      <div className={styles.achivementsContainer}>
        {props.data.map((item) => {
          return (
            <div key={item.organisationName}>
              <p
                className={mergeClasses([
                  styles.zeroMargin,
                  styles.organisationName,
                ])}
              >
                {item.organisationName}
              </p>
              <Achievements data={item.achivements} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Honors
