import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import ContactActions from './contact-actions';

describe('ContactActions Component', () => {
  beforeEach(() => {
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockImplementation(() => Promise.resolve()),
      },
    });
  });

  it('renders navigation links and contact button', () => {
    render(<ContactActions />);
    expect(screen.getByRole('button', { name: /expertise/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /^x$/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /contact/i })).toBeInTheDocument();
  });

  it('opens and closes the expertise modal', () => {
    render(<ContactActions />);
    const expertiseButton = screen.getByRole('button', { name: /expertise/i });

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

    fireEvent.click(expertiseButton);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Core AI Disciplines')).toBeInTheDocument();
    expect(screen.getByText(/Neural Architecture & Pretraining/i)).toBeInTheDocument();
    expect(screen.getByText(/Autonomous Reasoning & Cognition/i)).toBeInTheDocument();

    const closeButton = screen.getByRole('button', { name: /close dialog/i });
    fireEvent.click(closeButton);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('closes the expertise modal on Escape key', () => {
    render(<ContactActions />);
    fireEvent.click(screen.getByRole('button', { name: /expertise/i }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    fireEvent.keyDown(window, { key: 'Escape' });
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('copies email to clipboard and displays status toast', async () => {
    render(<ContactActions />);
    const contactButton = screen.getByRole('button', { name: /contact/i });

    fireEvent.click(contactButton);

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('heila.shahidi@gmail.com');
    expect(await screen.findByText(/Email copied: heila\.shahidi@gmail\.com/i)).toBeInTheDocument();
  });
});
