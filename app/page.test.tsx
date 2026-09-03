import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Home from './page';

describe('Home Page', () => {
  it('renders the engineer name as a monumental heading', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Heila Shahidi');
  });

  it('renders technical competencies below the name', () => {
    render(<Home />);
    expect(screen.getByText(/autonomous AI voice agents/i)).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /Autonomous AI Agents/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /UT Austin • MS SE/i })).toBeInTheDocument();
  });

  it('renders location and footer content', () => {
    render(<Home />);
    expect(screen.getByText('Austin, TX, USA')).toBeInTheDocument();
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
    expect(screen.getByText('AI')).toBeInTheDocument();
    expect(screen.getByText('Engineering Intelligent Software & Systems')).toBeInTheDocument();
  });
});
