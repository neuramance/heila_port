import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Home from './page';

describe('Home Page', () => {
  it('renders the engineer name as a monumental heading', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Heila Shahidi');
  });

  it('does not render secondary body text below the name', () => {
    render(<Home />);
    expect(screen.queryByRole('heading', { level: 2 })).not.toBeInTheDocument();
    expect(screen.queryByText(/Architecting frontier foundation models/i)).not.toBeInTheDocument();
    expect(screen.queryByText('Foundation Models')).not.toBeInTheDocument();
  });

  it('renders location and footer content', () => {
    render(<Home />);
    expect(screen.getByText('Austin, TX, USA')).toBeInTheDocument();
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
    expect(screen.getByText('AI')).toBeInTheDocument();
    expect(screen.getByText('Engineering Intelligent Software & Systems')).toBeInTheDocument();
  });
});
