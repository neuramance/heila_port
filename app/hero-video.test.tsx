import { act, fireEvent, render, screen } from '@testing-library/react';
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

  it('does not render a pause button and enforces continuous playback', () => {
    render(<HeroVideo />);
    expect(screen.queryByRole('button', { name: /pause/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /play/i })).not.toBeInTheDocument();
  });

  it('toggles video audio when mute button is clicked', async () => {
    let renderedContainer: HTMLElement;
    await act(async () => {
      const res = render(<HeroVideo />);
      renderedContainer = res.container;
    });
    const video = renderedContainer!.querySelector('video');
    const muteButton = screen.getByRole('button', {
      name: /mute video audio/i,
    });

    expect(video?.muted).toBe(false);

    act(() => {
      fireEvent.click(muteButton);
    });
    expect(video?.muted).toBe(true);

    act(() => {
      fireEvent.click(screen.getByRole('button', { name: /unmute video audio/i }));
    });
    expect(video?.muted).toBe(false);
  });
});
