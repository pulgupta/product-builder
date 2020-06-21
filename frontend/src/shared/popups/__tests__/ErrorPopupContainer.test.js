import React from 'react';
import { render } from '../../../testUtils';
import ErrorPopupContainer from '../ErrorPopupContainer'

test('renders learn react link', () => {
  const { getByTestId } = render(<ErrorPopupContainer />, {initialState: {serverError:true}});
  const linkElement = getByTestId("popup");
  expect(linkElement).toBeInTheDocument();
});
