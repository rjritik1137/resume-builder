import React from 'react'
import styles from './address.module.css'

function Address(props: { address: string }) {
  return <span className={styles.address}>{props.address}</span>
}

export default Address
