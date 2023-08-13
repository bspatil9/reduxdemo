import {buy_book} from './Booktypes'
import { sell_book } from './Booktypes'
 const purchase_book=()=>{
    return{
        type:buy_book
    }
}
export const selling_book=()=>{
    return{
        type:sell_book
    }
}

export default purchase_book ;