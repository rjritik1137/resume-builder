import ContributionList from '../../../components/ContributionList'
import SectionTitle from '../../../components/SectionTitle'
import { ExtraCurricular } from './types'

function Extra(props: ExtraCurricular) {
  return (
    <>
      <div>{props.activityName}</div>
      <ContributionList contributionList={props.activityDetails} />
    </>
  )
}

function Extras(props: { data: ExtraCurricular[] }) {
  return (
    <div>
      <SectionTitle title="Extra-Curricular Activities" />
      {props.data.map((extra) => {
        return (
          <Extra
            key={extra.activityName}
            activityName={extra.activityName}
            activityDetails={extra.activityDetails}
          />
        )
      })}
    </div>
  )
}

export default Extras
