import ProductDetails from '@/components/ProductDetailsPage/ProductDetails/ProductDetails';
import React, { use } from 'react';

const ProductDetailsPage = ({params}) => {
    const {id}=use(params)
    
    return (
        <div>
            <ProductDetails id={id} />
        </div>
    );
};

export default ProductDetailsPage;