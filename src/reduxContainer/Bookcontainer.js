import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import purchase_book from './Bookaction'
import { selling_book } from './Bookaction'


function Bookcontainer() {
    const noofbooks=useSelector(state=>state.NumberOfBooks)
    const dispatch=useDispatch();
  return (
    <div>Bookcontaine
    <h2>no of books {noofbooks}</h2>
    <button onClick={()=>{dispatch(purchase_book())}}>Buy Book</button>
    <button onClick={()=>{dispatch(selling_book())}}>Sell Book</button>
    </div>
  )
}

export default Bookcontainer