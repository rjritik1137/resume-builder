import FlexContainer from '../../containers/FlexContainer'
import styles from './Contribution.module.css'
function Contribution({ contribution }: { contribution: string }) {
  const _contribution = contribution.trim()
  return _contribution ? (
    <FlexContainer classes={styles.contributionContainer}>
      <p className={styles.contribution}>{_contribution}</p>
    </FlexContainer>
  ) : null
}

export default Contribution
