import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('uses the owned Flow video and the central application path', () => {
    render(<Hero />)

    const video = screen.getByLabelText('Animal Flow 수업 동작 영상')
    expect(video).toHaveAttribute('autoplay')
    expect(video).toHaveAttribute('loop')
    expect(video).toHaveAttribute('playsinline')
    expect(video).toHaveAttribute('poster', '/media/flow-hero-poster.webp')
    expect(video.querySelector('source')).toHaveAttribute('src', '/media/flow-hero-20261004.mp4')

    expect(
      screen.getByRole('link', { name: /FIRST FLOW 신청하기/ }),
    ).toHaveAttribute('href', 'https://naver.me/xsZWHr8t')
  })
})
