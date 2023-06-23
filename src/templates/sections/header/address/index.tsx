import Heading from '../../../../components/Headings/Heading'
import { fontStyle } from '../../../../fonts/fonts'
import styles from './address.module.css'

function Address(props: { address: string }) {
  return (
    <Heading
      classes={styles.address}
      heading={props.address}
      fontType={fontStyle.largeX}
    ></Heading>
  )
}

export default Address
