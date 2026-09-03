import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import LocationBadge from './location-badge';

describe('LocationBadge Component', () => {
  it('renders Austin location text initially', () => {
    render(<LocationBadge />);
    expect(screen.getByText('Austin, TX, USA')).toBeInTheDocument();
  });

  it('toggles coordinates and location on click', () => {
    render(<LocationBadge />);
    const button = screen.getByRole('button');

    fireEvent.click(button);
    expect(screen.getByText('30.2672° N, 97.7431° W')).toBeInTheDocument();

    fireEvent.click(button);
    expect(screen.getByText('Austin, TX, USA')).toBeInTheDocument();
  });
});
