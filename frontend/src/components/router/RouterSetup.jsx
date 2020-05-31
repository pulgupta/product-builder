import React from 'react';
import { Switch, Route } from 'react-router';
import ProductBuilder from '../../containers/productBuilder/ProductBuilder';
import Information from '../information/Information';

const RouterSetup = () => {
    return (
        <Switch>
            <Route path='/shop/how-it-works' exact component={Information}></Route>
            <Route path='/' component={ProductBuilder}></Route>
        </Switch>
    )
}

export default RouterSetup;