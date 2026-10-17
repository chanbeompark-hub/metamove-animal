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
    const outdoorSpecial = within(firstFlowSection).getByLabelText('EP6 특강 안내')
    const outdoorLink = within(outdoorSpecial).getByRole('link', {
      name: /EP6 강남 알베르 신청하기/,
    })
    const regularLink = within(firstFlowSection).getByRole('link', {
      name: /FIRST FLOW 신청하기/,
    })

    expect(within(outdoorSpecial).getByRole('heading', {
      name: 'EP6. 애니멀플로우 IN 강남 알베르',
    })).toBeInTheDocument()
    expect(within(outdoorSpecial).getByText('10월 29일(목) 오후 7시')).toBeInTheDocument()
    expect(within(outdoorSpecial).getByText('실내에서 단체 플로우 군무를 만들어봐요. 퇴근 후 몸과 정신을 가다듬는 시간.')).toBeInTheDocument()
    expect(within(outdoorSpecial).getByText('총 플로우 진행인원 30명 마감')).toBeInTheDocument()
    expect(within(outdoorSpecial).getByText('참가비 25,000원')).toBeInTheDocument()
    expect(within(outdoorSpecial).getByText('50분 플로우')).toBeInTheDocument()
    expect(within(outdoorSpecial).getByText('50분 티타임')).toBeInTheDocument()
    expect(within(outdoorSpecial).getByText('플로우 진행 시간은 조금 늘어날 수 있습니다.')).toBeInTheDocument()
    expect(within(outdoorSpecial).getByRole('img', {
      name: '애니멀플로우 EP6가 진행되는 강남 알베르 실내 공간',
    })).toHaveAttribute('src', '/media/alver-gangnam.png')
    expect(within(outdoorSpecial).getByText('서울 강남구 강남대로102길 34 ALVER')).toBeInTheDocument()
    expect(outdoorLink).toHaveAttribute('href', 'https://docs.google.com/forms/d/e/1FAIpQLSe1tfpfMR02_oT4wrRdI5KeDourwzjmKbyE-gnOJyjIOBDM9Q/viewform')
    expect(outdoorLink).toHaveAttribute('target', '_blank')
    expect(outdoorLink).toHaveAttribute('rel', 'noopener noreferrer')
    expect(outdoorLink.compareDocumentPosition(regularLink) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
  })

  it('offers the outdoor special in the first viewport before the regular application', () => {
    render(<App />)

    const hero = screen.getByLabelText('첫 화면 신청 안내')
    const outdoorLink = within(hero).getByRole('link', {
      name: /EP6 강남 알베르 신청하기/,
    })
    const regularLink = within(hero).getByRole('link', {
      name: /FIRST FLOW 신청하기/,
    })

    expect(within(hero).getByRole('heading', {
      name: 'EP6. 애니멀플로우 IN 강남 알베르',
    })).toBeInTheDocument()
    expect(within(hero).getByText('10월 29일(목) 오후 7시')).toBeInTheDocument()
    expect(within(hero).getByText('50분 플로우')).toBeInTheDocument()
    expect(within(hero).getByText('50분 티타임')).toBeInTheDocument()
    expect(outdoorLink).toHaveAttribute('href', 'https://docs.google.com/forms/d/e/1FAIpQLSe1tfpfMR02_oT4wrRdI5KeDourwzjmKbyE-gnOJyjIOBDM9Q/viewform')
    expect(outdoorLink).toHaveAttribute('target', '_blank')
    expect(outdoorLink).toHaveAttribute('rel', 'noopener noreferrer')
    expect(outdoorLink.compareDocumentPosition(regularLink) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
  })
})
