import React from 'react'
import style from './name.module.css'
import FlexContainer from '../../../../containers/FlexContainer'
function Name(props: {
  firstName: string
  lastName: string
  middleName?: string
}) {
  return (
    <FlexContainer classes={style.nameContainer}>
      <span className={style.firstName}>{props.firstName}</span>
      {props.middleName ? (
        <span className={style.middleName}>{props.middleName}</span>
      ) : null}
      <span className={style.lastName}>{props.lastName}</span>
    </FlexContainer>
  )
}

export default Name
