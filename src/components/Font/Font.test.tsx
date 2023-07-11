import { render, screen } from '@testing-library/react'
import Font from './Font'

describe('Font component', () => {
  test('Get text', () => {
    render(<Font text='Example' type='H1'/>)
    const linkElement = screen.getByText('Example')
    expect(linkElement).toBeInTheDocument()
  })
  test('Get h1', () => {
    const { getByRole } = render(<Font text='TextH1' type='H1'/>)
    expect(getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByText('TextH1')).toBeInTheDocument()
  })
  test('Get h2', () => {
    const { getByRole } = render(<Font text='TextH2' type='H2'/>)
    expect(getByRole('heading', { level: 2 })).toBeInTheDocument()
    expect(screen.getByText('TextH2')).toBeInTheDocument()
  })
  test('Get h3', () => {
    const { getByRole } = render(<Font text='TextH3' type='H3'/>)
    expect(getByRole('heading', { level: 3 })).toBeInTheDocument()
    expect(screen.getByText('TextH3')).toBeInTheDocument()
  })
  test('Get h4', () => {
    const { getByRole } = render(<Font text='TextH4' type='H4'/>)
    expect(getByRole('heading', { level: 4 })).toBeInTheDocument()
    expect(screen.getByText('TextH4')).toBeInTheDocument()
  })
})
