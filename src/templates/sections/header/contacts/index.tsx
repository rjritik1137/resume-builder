import React from 'react'
import { Contact as ContactProps, Contacts as ContactsProps } from '../type'
import styles from './contacts.module.css'

function Contact(props: { contact: ContactProps }) {
  const { contact } = props
  const _contact = <span className={styles.contactValue}>{contact.value}</span>
  return contact.value ? (
    <div className={styles.contactContainer}>
      {contact.icon ? (
        <img src={contact.icon} alt="" className={styles.contactIcon} />
      ) : null}
      <span className={styles.contactType}>{contact.type}</span>
      {contact.link ? (
        <a href={contact.link} className={styles.contactLink}>
          {_contact}
        </a>
      ) : (
        _contact
      )}
    </div>
  ) : null
}

function Contacts(props: { contacts: ContactsProps }) {
  return (
    <div className={styles.contactsContainer}>
      {props.contacts.map((contact, index) => {
        return (
          <Contact
            contact={contact}
            key={contact.value + (contact.link ?? index)}
          />
        )
      })}
    </div>
  )
}

export default Contacts
