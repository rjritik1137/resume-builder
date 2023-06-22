import styles from './Contribution.module.css'
function Contribution({ contribution }: { contribution: string }) {
  return (
    <div className={styles.contributionContainer}>
      <p className={styles.contribution}>{contribution}</p>
    </div>
  )
}

export default Contribution
