import React from 'react';
import { render } from '@testing-library/react';
import { MyComponent } from './my-component';

test('renders learn react link', () => {
  const { getByText } = render(<MyComponent />);
  const linkElement = getByText(/render my component/i);
  expect(linkElement).toBeInTheDocument();
});
