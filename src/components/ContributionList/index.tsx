import Contribution from '../Contribution'
import styles from './List.module.css'
function ContributionList({
  contributionList,
}: {
  contributionList: string[]
}) {
  return (
    <div className={styles.contributionListContianer}>
      {contributionList.map((contribution, index) => {
        return (
          <div key={index} className={styles.contributionSpacing}>
            <Contribution contribution={contribution} />
          </div>
        )
      })}
    </div>
  )
}

export default ContributionList
