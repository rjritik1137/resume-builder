import ContributionList from '../../../components/ContributionList'
import SectionHeader from '../../../components/SectionHeaders'
import { SectionTitleLarge } from '../../../components/SectionTitle'
import FlexContainer from '../../../containers/FlexContainer'
import styles from './events.module.css'
import { Event as EventProps } from './types'

function EventHeader({ event }: { event: EventProps }) {
  return <SectionHeader heading={event.organisationName} range={event.period} />
}

function EventSubheader({ event }: { event: EventProps }) {
  return (
    <FlexContainer
      classes={`${styles.headersTypeContainer} ${styles.eventSubHeader}`}
    >
      <span className={styles.position}>{event.eventName}</span>
      {event.location ? (
        <span className={styles.location}>{event.location.address}</span>
      ) : null}
    </FlexContainer>
  )
}

function IndividualEvent(props: { data: EventProps }) {
  const { data: event } = props

  return (
    <div>
      <EventHeader event={event} />
      <EventSubheader event={event} />
      <ContributionList contributionList={event.contribution} />
    </div>
  )
}

function Event(props: { data: EventProps[] }) {
  const { data } = props

  return (
    <div className={styles.eventsContianer}>
      <SectionTitleLarge title="Events" />
      {data.map((item) => {
        return (
          <IndividualEvent
            data={item}
            key={item.organisationName + item.eventName}
          />
        )
      })}
    </div>
  )
}

export default Event
