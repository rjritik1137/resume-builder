import React from 'react'
import style from './styles.module.css'
function Name(props: {
  firstName: string
  lastName: string
  middleName: string
}) {
  return (
    <div>
      <span className={style.firstName}>{props.firstName}</span>
      <span>{props.middleName}</span>
      <span>{props.lastName}</span>
    </div>
  )
}

export default Name
