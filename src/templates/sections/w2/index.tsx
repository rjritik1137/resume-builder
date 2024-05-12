import React from 'react'
import { ItemType } from './types'
import styles from './skill.module.css'
import { SectionTitleLarge } from '../../../components/SectionTitle'
import FlexContainer from '../../../containers/FlexContainer'
import { ContainerType } from '../../../containers/types'

function Item({ data }: { data: ItemType }) {
  return (
    <FlexContainer direction={ContainerType.ROW}>
      <span className={styles.skillType}>{data.type + ': '}</span>
      <span className={styles.skillNames}>{data.list.join(', ')}</span>
    </FlexContainer>
  )
}

function W2(props: { data: { content: ItemType[]; title: string } }) {
  const {
    data: { content, title },
  } = props
  return (
    <FlexContainer direction={ContainerType.COLUMN}>
      <SectionTitleLarge title={title} />
      <FlexContainer direction={ContainerType.COLUMN}>
        {content.map((item) => {
          return <Item key={item.type} data={item} />
        })}
      </FlexContainer>
    </FlexContainer>
  )
}

export default W2
