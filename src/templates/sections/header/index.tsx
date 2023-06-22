import React from 'react'
import { HeaderProps } from './type'
import Name from './Name'
import Address from './Address'

function Header(props: HeaderProps) {
  const { data } = props
  return (
    <div>
      <Name
        firstName={data.firstName}
        middleName={data.middleName}
        lastName={data.lastName}
      />
      <Address value={data.address} />
    </div>
  )
}
export default Header
