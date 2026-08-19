import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('application shell', () => {
  it('renders the program promise and both primary application links', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { name: /내 몸으로 새로운 움직임/ }),
    ).toBeInTheDocument()

    const links = screen.getAllByRole('link', {
      name: /FIRST FLOW 신청하기/,
    })
    expect(links.length).toBeGreaterThanOrEqual(2)

    links.forEach((link) => {
      expect(link).toHaveAttribute('href', 'https://naver.me/xsZWHr8t')
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'))
    })
  })

  it('follows the reference-led editorial section order', () => {
    const { container } = render(<App />)

    expect(
      [...container.querySelectorAll('main > section')].map((section) => section.id),
    ).toEqual(['top', 'proof', 'values', 'moments', 'learn', 'beginner', 'first-flow'])
  })

  it('moves from the hero to the first proof section', () => {
    const { container } = render(<App />)

    expect(container.querySelector('.hero .text-link')).toHaveAttribute(
      'href',
      '#proof',
    )
  })
})
