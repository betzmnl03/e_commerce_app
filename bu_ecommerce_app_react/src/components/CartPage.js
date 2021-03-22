import React from 'react'

import { StateProvider } from '../stateContext';
import Main from "./Main"
import CartShowPage from "./CartShowPage"
import EmptyCart from "./EmptyCart"
export default function CartPage(props) {
    const {user, remove, cart, removeAll} = props
    console.log(props)
   
    return (
      
        <StateProvider>
            {
            props.cart && props.cart.length>0?
            <Main user={user} remove={remove} cart={cart} removeAll={removeAll} history={props.history}/>
            :
            <EmptyCart/>
        }
        </StateProvider>
    )
}
