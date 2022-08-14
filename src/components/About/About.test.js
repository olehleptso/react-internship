import { render, screen } from '@testing-library/react';
import About from './About';

test('renders search About component', () => {
    render(<About/>);
    const AboutSection = screen.getByText('About Us');
    expect(AboutSection).toBeInTheDocument();

  });