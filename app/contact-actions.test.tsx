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
    const githubLink = screen.getByRole('link', { name: /github/i });
    expect(githubLink).toHaveAttribute('href', 'https://github.com/heilashahidi');
    const linkedinLink = screen.getByRole('link', { name: /linkedin/i });
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/heilashahidi/');
    const xLink = screen.getByRole('link', { name: /^x$/i });
    expect(xLink).toHaveAttribute('href', 'https://x.com/h3ilaa');
    expect(screen.getByRole('button', { name: /contact/i })).toBeInTheDocument();
  });

  it('copies email to clipboard and displays status toast', async () => {
    render(<ContactActions />);
    const contactButton = screen.getByRole('button', { name: /contact/i });

    fireEvent.click(contactButton);

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('heila.shahidi@gmail.com');
    expect(await screen.findByText(/Email copied: heila\.shahidi@gmail\.com/i)).toBeInTheDocument();
  });
});
