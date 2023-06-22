import React from 'react'
import { ExperienceProps } from '../../../types/experience'

function Experience(props: { experience: ExperienceProps }) {
  return <div>Experience</div>
  const { experience } = props
  const { duration } = experience
  return (
    <div>
      <div>
        <h1>{experience.organisationName}</h1>
        {duration ? <h1>{experience.organisationName}</h1> : null}
      </div>
    </div>
  )
}

export default Experience
