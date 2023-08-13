import {buy_book} from './Booktypes'
import { sell_book } from './Booktypes'
  const initialState={
    NumberOfBooks:20
}

const Bookreducer=(state=initialState,action)=>{
    switch(action.type){
        case buy_book:return{
            ...state, NumberOfBooks:state.NumberOfBooks-1
        }
        case sell_book:return{
            ...state,NumberOfBooks:state.NumberOfBooks+1
        }
        default:return state
    }
}
export default Bookreducer;