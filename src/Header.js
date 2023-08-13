import React from 'react'
import { useSelector } from 'react-redux'

function Header() {
    const noofbooks=useSelector(state=>state.NumberOfBooks)
  return (
    <div>
        <h2>Header element</h2>
        <p>this data is from redux store :- {noofbooks}</p>
    </div>
  )
}

export default Header