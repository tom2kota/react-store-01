import React from "react";
import {ReactComponent as ShoppingIcon} from "../../images/shopping-bag.svg";

import './CartIcon.scss';
import {CartDropdown} from "../cart-dropdown/CartDropdown";

export const CartIcon = () => (
    <div className='cart-icon'>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
        <CartDropdown/>
    </div>
)