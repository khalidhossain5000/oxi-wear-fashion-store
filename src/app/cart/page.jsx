import Cart from '@/components/CartPage/Cart';
import PageBanner from '@/components/shared/PageBanner/PageBanner';
import React from 'react';

const CartPage = () => {
    return (
        <div>
            <PageBanner title="Shopping Cart" subtitle={'Explore your all cart items'}/>
            <Cart/>
        </div>
    );
};

export default CartPage;