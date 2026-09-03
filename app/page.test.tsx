import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Home from './page';

describe('Home Page', () => {
  it('renders the engineer name as a monumental heading', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Heila Shahidi');
  });

  it('renders the role subheading', () => {
    render(<Home />);
    const subheading = screen.getByRole('heading', { level: 2 });
    expect(subheading).toHaveTextContent('AI Software Engineer');
  });

  it('renders the technical focus statement', () => {
    render(<Home />);
    expect(screen.getByText(/Architecting frontier foundation models/i)).toBeInTheDocument();
  });

  it('renders core competency domain chips', () => {
    render(<Home />);
    expect(screen.getByText('Foundation Models')).toBeInTheDocument();
    expect(screen.getByText('Agentic Cognition')).toBeInTheDocument();
    expect(screen.getByText('Distributed Inference')).toBeInTheDocument();
    expect(screen.getByText('Triton & CUDA Systems')).toBeInTheDocument();
  });

  it('renders infrastructure and telemetry badges', () => {
    render(<Home />);
    expect(screen.getByText(/SAN FRANCISCO, CA · 37\.7749° N, 122\.4194° W/i)).toBeInTheDocument();
    expect(screen.getByText(/ENGINEERING COGNITION FROM FIRST PRINCIPLES/i)).toBeInTheDocument();
  });
});
