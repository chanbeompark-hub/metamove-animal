import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from '../App'

describe('learning narrative', () => {
  it('connects the four values and four learning stages', () => {
    render(<App />)

    const values = screen.getByLabelText('Animal Flow 핵심 가치')
    expect(
      within(values).getAllByRole('heading', { level: 3 }).map((node) => node.textContent),
    ).toEqual(['MOVE', 'CONTROL', 'CONNECT', 'FLOW'])

    const learning = screen.getByLabelText('FIRST FLOW 학습 과정')
    expect(within(learning).getAllByText(/CLASS 0[1-4]/)).toHaveLength(4)
    expect(within(learning).getByText('Beast Position')).toBeInTheDocument()
    expect(within(learning).getByText('Traveling')).toBeInTheDocument()
    expect(within(learning).getByText('Transition')).toBeInTheDocument()
  })

  it('uses the outdoor-class episode sketch as the first proof after the hero', () => {
    const { container } = render(<App />)
    const proof = container.querySelector('#proof')

    expect(proof).not.toBeNull()
    const video = within(proof as HTMLElement).getByLabelText('애니멀플로우 야외 특강 에피소드 스케치 영상')
    expect(video).toHaveAttribute('controls')
    expect(video).toHaveAttribute('playsinline')
    expect(video).toHaveAttribute('preload', 'metadata')
    expect(video).toHaveAttribute('poster', '/media/outdoor-episode-poster.webp')
    expect(video.querySelector('source')).toHaveAttribute('src', '/media/outdoor-episode-sketch.mp4')
    expect(within(proof as HTMLElement).getByText('애니멀플로우 야외 특강 에피소드 스케치')).toBeInTheDocument()
  })
})
