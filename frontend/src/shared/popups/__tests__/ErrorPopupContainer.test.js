import React from 'react';
import { render } from '../../../testUtils';
import ErrorPopupContainer from '../ErrorPopupContainer'

describe('Test pop up hide and show', () => {

  it('display popup with server error is true in the redux store', () => {
    const { getByTestId } = render(<ErrorPopupContainer />, {initialState: {serverError:true}});
    const linkElement = getByTestId("popup");
    expect(linkElement).toBeInTheDocument();
  });

  it('should not display popup with server error is false in the redux store', () => {
    const { queryByTestId } = render(<ErrorPopupContainer />, {initialState: {serverError:false}});
    const linkElement = queryByTestId("popup");
    expect(linkElement).toBe(null);
  });
})

