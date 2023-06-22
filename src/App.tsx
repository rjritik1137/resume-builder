import './styles.css'
import React from 'react'
import Simple from './templates/Simple'
import data from './templates/template.json'
export const App = () => {
  return (
    <React.Fragment>
      <Simple template={data} />
    </React.Fragment>
  )
}
