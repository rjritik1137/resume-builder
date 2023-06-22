import ContributionList from '../../../components/ContributionList'
import SectionHeader from '../../../components/SectionHeader'
import styles from './events.module.css'
import { Event as EventProps } from './types'

function EventHeader({ event }: { event: EventProps }) {
  const { duration } = event
  return (
    <div className={`${styles.headersTypeContainer} ${styles.eventHeader}`}>
      <p className={styles.organisationName}>{event.organisationName}</p>
      {duration ? (
        <div>
          <span className={styles.duration}>
            {event.duration?.dateRange.start}
          </span>
          <span className={styles.duration}>
            {event.duration?.dateRange.end}
          </span>
        </div>
      ) : null}
    </div>
  )
}

function EventSubheader({ event }: { event: EventProps }) {
  return (
    <div className={`${styles.headersTypeContainer} ${styles.eventSubHeader}`}>
      <span className={styles.position}>{event.eventName}</span>
      <span className={styles.location}>{event.duration?.location}</span>
    </div>
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
      <SectionHeader title="Events" />
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
