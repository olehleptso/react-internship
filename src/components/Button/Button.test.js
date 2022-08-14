import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders search button component', () => {
    const { asFragment } = render(<Button styles="primary" text="Hello" />);
    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });