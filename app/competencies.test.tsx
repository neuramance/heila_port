import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Competencies from './competencies';

describe('Competencies Component', () => {
  it('renders bio statement and competency buttons', () => {
    render(<Competencies />);
    expect(screen.getByText(/autonomous AI voice agents/i)).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /Autonomous AI Agents/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /Real-Time & Distributed/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /Full-Stack Architecture/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /UT Austin • MS SE/i })).toBeInTheDocument();
  });

  it('toggles detail card and tech tags when competency is clicked', () => {
    render(<Competencies />);
    const tab = screen.getByRole('tab', { name: /Autonomous AI Agents/i });

    expect(screen.queryByRole('tabpanel')).not.toBeInTheDocument();

    fireEvent.click(tab);
    expect(screen.getByRole('tabpanel')).toBeInTheDocument();
    expect(screen.getByText(/Voice AI agents, real-time STT\/TTS/i)).toBeInTheDocument();
    expect(screen.getByText('LangChain')).toBeInTheDocument();

    fireEvent.click(tab);
    expect(screen.queryByRole('tabpanel')).not.toBeInTheDocument();
  });
});
