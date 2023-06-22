import React from 'react'
import Simple from './templates/Simple'
import data from './templates/template.json'
import './styles.module.css'
export const App = () => {
  return (
    <React.Fragment>
      <Simple template={data} />
    </React.Fragment>
  )
}
