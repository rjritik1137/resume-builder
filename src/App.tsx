import './styles.css'
import React, { useEffect } from 'react'
export const App = ()=>{
    const p = 1
    
    useEffect(()=>{
        console.log(p)
       
    },[p])
    return (
        <React.Fragment>
    <h1>React typescript webpack starter - {process.env.NODE_ENV} {process.env.name}</h1>
    </React.Fragment>
    )
}