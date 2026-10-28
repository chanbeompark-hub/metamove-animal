import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { renderToString } from 'react-dom/server'
import App from './App'

describe('national events with secondary local information', () => {
  it('keeps local search information at the very end in readable collapsed details', () => {
    const { container } = render(<App />)
    const detail = screen.getByText('운영 센터·지역 수업 안내').closest('details')!
    expect(detail).not.toHaveAttribute('open')
    expect(container.querySelector('footer')!.contains(detail)).toBe(true)
    expect(detail.textContent).toContain('전국')
    expect(detail.textContent).toContain('상동피티')
    expect(detail.textContent).toContain('상동역 피티')
    expect(detail.querySelector('a[href="https://metamove-pt.parkbujang.chatgpt.site/sangdong-pt"]')).not.toBeNull()
  })
  it('server renders both event and local information and an accurate service provider', () => {
    const html = renderToString(<App />)
    expect(html).toContain('메타무브짐 PT 상동역점')
    expect(html).toContain('애니멀플로우란 어떤 운동인가요?')
    const script = html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)!
    const data = JSON.parse(script[1])
    const service = data['@graph'].find((item: { '@type': string }) => item['@type'] === 'Service')
    expect(service.areaServed).toBe('대한민국')
    expect(service.provider['@id']).toBe('https://metamove-pt.parkbujang.chatgpt.site/#gym')
    expect(service.location).toBeUndefined()
    expect(JSON.stringify(data)).not.toContain('aggregateRating')
  })
})
