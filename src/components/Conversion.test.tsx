import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from '../App'

describe('FIRST FLOW conversion', () => {
  it('reassures beginners and shows the complete class facts', () => {
    render(<App />)

    expect(screen.getByText('몸이 뻣뻣한데요?')).toBeInTheDocument()
    expect(screen.getByText('운동을 잘 못하는데요?')).toBeInTheDocument()
    expect(screen.getByText('영상이 너무 어려워 보여요.')).toBeInTheDocument()
    const classInfo = screen.getByLabelText('FIRST FLOW 클래스 정보')
    expect(within(classInfo).getByText('4명')).toBeInTheDocument()
    expect(within(classInfo).getByText('BEGINNER')).toBeInTheDocument()
    expect(within(classInfo).getByText('약 50분')).toBeInTheDocument()
    expect(within(classInfo).getByText('메타무브짐 PT 상동역점')).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /FIRST FLOW 신청하기/ }).length).toBeGreaterThanOrEqual(2)
  })

  it('offers the dated outdoor special before the regular FIRST FLOW application', () => {
    render(<App />)

    const firstFlowSection = screen.getByLabelText('FIRST FLOW 신청 안내')
    const outdoorSpecial = within(firstFlowSection).getByLabelText('야외 특강 안내')
    const outdoorLink = within(outdoorSpecial).getByRole('link', {
      name: /야외 애니멀 특강 신청하기/,
    })
    const regularLink = within(firstFlowSection).getByRole('link', {
      name: /FIRST FLOW 신청하기/,
    })

    expect(within(outdoorSpecial).getByRole('heading', {
      name: '일산호수공원 애니멀 특강',
    })).toBeInTheDocument()
    expect(within(outdoorSpecial).getByText('10월 18일(일) 오전 9시')).toBeInTheDocument()
    expect(within(outdoorSpecial).getByText('일산호수공원')).toBeInTheDocument()
    expect(within(outdoorSpecial).getByText('정확한 위치 · 당일 전달')).toBeInTheDocument()
    expect(within(outdoorSpecial).getByText('선착순 10명')).toBeInTheDocument()
    expect(within(outdoorSpecial).getByText('참가비 5,000원')).toBeInTheDocument()
    expect(within(outdoorSpecial).getByText('추가 모집! 단체 그룹 특강. 커피값으로 특강, 개꿀이잖아?')).toBeInTheDocument()
    expect(within(outdoorSpecial).queryByRole('img')).not.toBeInTheDocument()
    expect(outdoorLink).toHaveAttribute('href', 'https://form.naver.com/response/Hjm0ap3eogv')
    expect(outdoorLink).toHaveAttribute('target', '_blank')
    expect(outdoorLink).toHaveAttribute('rel', 'noopener noreferrer')
    expect(outdoorLink.compareDocumentPosition(regularLink) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
  })

  it('offers the outdoor special in the first viewport before the regular application', () => {
    render(<App />)

    const hero = screen.getByLabelText('첫 화면 신청 안내')
    const outdoorLink = within(hero).getByRole('link', {
      name: /일산호수공원 특강 신청하기/,
    })
    const regularLink = within(hero).getByRole('link', {
      name: /FIRST FLOW 신청하기/,
    })

    expect(outdoorLink).toHaveAttribute('href', 'https://form.naver.com/response/Hjm0ap3eogv')
    expect(outdoorLink).toHaveAttribute('target', '_blank')
    expect(outdoorLink).toHaveAttribute('rel', 'noopener noreferrer')
    expect(outdoorLink.compareDocumentPosition(regularLink) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
  })
})
