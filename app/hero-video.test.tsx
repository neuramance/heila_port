import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import HeroVideo from './hero-video';

describe('HeroVideo Component', () => {
  it('renders video with looping attributes and proper source', () => {
    const { container } = render(<HeroVideo />);
    const video = container.querySelector('video');

    expect(video).toBeInTheDocument();
    expect(video).toHaveAttribute('src', '/heila_compressed.mp4');
    expect(video).toHaveAttribute('autoplay');
    expect(video).toHaveAttribute('loop');
    expect(video).toHaveAttribute('playsinline');
  });

  it('toggles video playback when play/pause button is clicked', async () => {
    render(<HeroVideo />);
    const toggleButton = screen.getByRole('button', {
      name: /pause background video/i,
    });

    fireEvent.click(toggleButton);
    expect(screen.getByText('Paused')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /play background video/i }));
    expect(await screen.findByText('Live Stream')).toBeInTheDocument();
  });

  it('toggles video audio when mute button is clicked', () => {
    const { container } = render(<HeroVideo />);
    const video = container.querySelector('video');
    const muteButton = screen.getByRole('button', {
      name: /unmute video audio/i,
    });

    expect(video?.muted).toBe(true);

    fireEvent.click(muteButton);
    expect(video?.muted).toBe(false);

    fireEvent.click(screen.getByRole('button', { name: /mute video audio/i }));
    expect(video?.muted).toBe(true);
  });
});
