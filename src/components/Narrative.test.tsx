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
})
