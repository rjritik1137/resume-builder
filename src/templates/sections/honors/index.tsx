import SectionHeader from '../../../components/SectionHeader'
import { mergeClasses } from '../../../utils/util'
import styles from './honors.module.css'
import { Achivement as AchivementProps, Honors as HonorsProps } from './types'
function Achievement(props: { data: AchivementProps }) {
  return (
    <div>
      <p className={mergeClasses([styles.zeroMargin, styles.achivementTitle])}>
        {props.data.title}
      </p>
      {props.data.description ? (
        <p
          className={mergeClasses([
            styles.zeroMargin,
            styles.achivementDescription,
          ])}
        >
          {props.data.description}
        </p>
      ) : null}
    </div>
  )
}

function Achievements(props: { data: AchivementProps[] }) {
  return (
    <div>
      {props.data.map((item) => {
        return <Achievement key={item.title} data={item} />
      })}
    </div>
  )
}

function Honors(props: { data: HonorsProps[] }) {
  return (
    <div>
      <SectionHeader title="Achievements & Honors" />
      <div className={styles.achivementsContainer}>
        {props.data.map((item, index) => {
          return (
            <div key={index} className={styles.achievementContainer}>
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
