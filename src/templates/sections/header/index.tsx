import FlexContainer from '../../../containers/FlexContainer'
import { ContainerType } from '../../../containers/types'
import Address from './address'
import Contacts from './contacts'
import Name from './name'
import styles from './styles.module.css'
import { HeaderProps } from './type'

function Header(props: HeaderProps) {
  const { data } = props
  return (
    <FlexContainer classes={styles.header} direction={ContainerType.COLUMN}>
      <Name
        firstName={data.firstName}
        middleName={data.middleName}
        lastName={data.lastName}
      />
      <Address address={data.address} />
      <Contacts contacts={data.contacts} />
    </FlexContainer>
  )
}
export default Header
