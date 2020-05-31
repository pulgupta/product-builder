import React from 'react';
import { Grid } from '@material-ui/core';
import ProductCard from '../productCard/ProductCard';

const ProductCardList = (props) => {

    return (
        <Grid container spacing={3}>
            <Grid item lg={6}>
                <ProductCard/>
            </Grid>
            <Grid item lg={6}>
                <ProductCard/>
            </Grid>
        </Grid>
    )

}

export default ProductCardList;