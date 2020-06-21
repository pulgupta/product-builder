import React from "react";
import { render } from "../../../testUtils";
import { createMemoryHistory } from 'history'
import RouterSetup from '../RouterSetup'
import { Router } from "react-router";


describe('Routing should work for all urls', () => {

    it('should show information on how it works', () => {
        const history = createMemoryHistory();
        history.push('/shop/how-it-works');
        const { getByTestId } = render(<Router history={history}><RouterSetup/></Router>);
        expect(getByTestId('informationDetails')).toBeInTheDocument();

    });

    it('should show product information', () => {
        const history = createMemoryHistory();
        history.push('/');
        const { getByTestId } = render(<Router history={history}><RouterSetup/></Router>);
        expect(getByTestId('productBuilder')).toBeInTheDocument();

    });
})