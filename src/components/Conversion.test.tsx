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
    expect(screen.getAllByRole('link', { name: /ADVANCE FLOW 그룹 특강 신청하기/ })).toHaveLength(3)
  })

  it('shows the ADVANCE FLOW weekend class details beside the two full application areas', () => {
    render(<App />)

    const summaries = screen.getAllByLabelText('ADVANCE FLOW 그룹 특강 정보')
    expect(summaries).toHaveLength(2)

    summaries.forEach((summary) => {
      expect(within(summary).getByText('4:1 그룹 주말 특강')).toBeInTheDocument()
      expect(within(summary).getByText('4:1 그룹 수업')).toBeInTheDocument()
      expect(within(summary).getByText('약 120분 진행')).toBeInTheDocument()
      expect(within(summary).getByText('이론 & 실습')).toBeInTheDocument()
    })

    expect(within(screen.getByLabelText('빠른 신청')).queryByLabelText('ADVANCE FLOW 그룹 특강 정보')).not.toBeInTheDocument()
  })

  it('offers the dated outdoor special before the regular FIRST FLOW application', () => {
    render(<App />)

    const firstFlowSection = screen.getByLabelText('FIRST FLOW 신청 안내')
    const outdoorSpecial = within(firstFlowSection).getByLabelText('EP6 특강 안내')
    const outdoorLink = within(outdoorSpecial).getByRole('link', {
      name: /EP6 부천중앙공원 신청하기/,
    })
    const regularLink = within(firstFlowSection).getByRole('link', {
      name: /ADVANCE FLOW 그룹 특강 신청하기/,
    })

    expect(within(outdoorSpecial).getByRole('heading', {
      name: 'EP6. 애니멀플로우 IN 부천중앙공원',
    })).toBeInTheDocument()
    expect(within(outdoorSpecial).getByText('11월 7일(토) 오후 1시')).toBeInTheDocument()
    expect(within(outdoorSpecial).getByText('찐 겨울이 오기 전, 야외 햇살 아래서 애니멀플로우 액티브 요가.')).toBeInTheDocument()
    expect(within(outdoorSpecial).getByText('다 같이 스트레칭하며 몸의 움직임을 느껴보는 시간.')).toBeInTheDocument()
    expect(within(outdoorSpecial).getByText('부천중앙공원 · 집합 위치 이미지 참고')).toBeInTheDocument()
    expect(within(outdoorSpecial).getByText('참가비 20,000원')).toBeInTheDocument()
    expect(within(outdoorSpecial).getByText('진행 시간 1시간 전후')).toBeInTheDocument()
    expect(within(outdoorSpecial).getByRole('img', {
      name: '부천중앙공원 애니멀플로우 EP6 집합 위치 지도',
    })).toHaveAttribute('src', '/media/bucheon-central-park.jpg')
    const benefit = within(outdoorSpecial).getByLabelText('EP6 참여자 제공 혜택')
    expect(within(benefit).getByText('이중 보온 텀블러 & 기초 전자책 제공')).toBeInTheDocument()
    expect(outdoorLink).toHaveAttribute('href', 'https://naver.me/GRD1R95e')
    expect(outdoorLink).toHaveAttribute('target', '_blank')
    expect(outdoorLink).toHaveAttribute('rel', 'noopener noreferrer')
    expect(outdoorLink.compareDocumentPosition(regularLink) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
  })

  it('offers the outdoor special in the first viewport before the regular application', () => {
    render(<App />)

    const hero = screen.getByLabelText('첫 화면 신청 안내')
    const outdoorLink = within(hero).getByRole('link', {
      name: /EP6 부천중앙공원 신청하기/,
    })
    const regularLink = within(hero).getByRole('link', {
      name: /ADVANCE FLOW 그룹 특강 신청하기/,
    })

    expect(within(hero).getByRole('heading', {
      name: 'EP6. 애니멀플로우 IN 부천중앙공원',
    })).toBeInTheDocument()
    expect(within(hero).getByText('11월 7일(토) 오후 1시')).toBeInTheDocument()
    expect(within(hero).getByText('부천중앙공원 · 집합 위치 이미지 참고')).toBeInTheDocument()
    const heroBenefit = within(hero).getByLabelText('EP6 참여자 제공 혜택')
    expect(within(heroBenefit).getByText('이중 보온 텀블러 & 기초 전자책 제공')).toBeInTheDocument()
    expect(within(hero).getByText('진행 시간 1시간 전후')).toBeInTheDocument()
    expect(outdoorLink).toHaveAttribute('href', 'https://naver.me/GRD1R95e')
    expect(outdoorLink).toHaveAttribute('target', '_blank')
    expect(outdoorLink).toHaveAttribute('rel', 'noopener noreferrer')
    expect(outdoorLink.compareDocumentPosition(regularLink) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
  })
})
