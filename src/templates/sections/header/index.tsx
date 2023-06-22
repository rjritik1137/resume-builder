import React from 'react'
import { HeaderProps } from './type'
import Name from './name'
import Address from './address'
import styles from './styles.module.css'
import Contacts from './contacts'

function Header(props: HeaderProps) {
  const { data } = props
  return (
    <div className={styles.header}>
      <Name
        firstName={data.firstName}
        middleName={data.middleName}
        lastName={data.lastName}
      />
      <Address address={data.address} />
      <Contacts contacts={data.contacts} />
    </div>
  )
}
export default Header
