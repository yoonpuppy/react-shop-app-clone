import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getCartItems } from '../../../_actions/user_actions'

// #5-2
function CartPage(props) {

    const dispatch = useDispatch();
    
    useEffect(() => {

        let cartItems=[]

        // 리덕스 User state 안에 cart 안 상품이 들어있는지 확인

        if (props.user.userData && props.user.userData.cart) {
            if(props.user.userData.cart.length > 0) {
                props.user.userData.cart.forEach(item => {
                    // console.log('item', item)
                    cartItems.push(item.id)
                })

                dispatch(getCartItems(cartItems, props.user.userData.cart))
            }
        } 


    }, [props.user.userData])

    return (
        <div>
            CartPage
        </div>
    )
}

export default CartPage