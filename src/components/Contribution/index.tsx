import styles from './Contribution.module.css'
function Contribution({ contribution }: { contribution: string }) {
  const _contribution = contribution.trim()
  return _contribution ? (
    <div className={styles.contributionContainer}>
      <p className={styles.contribution}>{_contribution}</p>
    </div>
  ) : null
}

export default Contribution
