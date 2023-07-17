import { render, screen } from '@testing-library/react'
import Point from './Point'

describe('Point component', () => {
  test('Get point default', () => {
    const { getByTestId } = render(<Point />)
    const elementId = getByTestId('point')

    expect(elementId).toBeInTheDocument()
    expect(elementId).toHaveClass('flex items-center gap-8px')
  })

  test('Get point with text', () => {
    render(<Point text='Test'/>)
    const text = screen.getByText('Test')

    expect(text).toBeInTheDocument()
  })

  test('Get point with circle default', () => {
    const { getByTestId } = render(<Point icon={false}/>)
    const elementId = getByTestId('circle')

    expect(elementId).toBeInTheDocument()
    expect(elementId).toHaveClass('w-[8px] h-[8px] rounded-circle')
    expect(elementId).toHaveClass('bg-pr_purple')
  })

  test('Get point with circle bg-error', () => {
    const { getByTestId } = render(<Point icon={false} circleColor='bg-error'/>)
    const elementId = getByTestId('circle')

    expect(elementId).toBeInTheDocument()
    expect(elementId).toHaveClass('bg-error')
  })

  test('Get point with icon default', () => {
    const { getByRole } = render(<Point/>)
    const img = getByRole('img')

    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', '/svg/icons/users.svg')
    expect(img).toHaveAttribute('alt', 'users')
  })

  test('Get point with icon calendar', () => {
    const { getByRole } = render(<Point iconName='calendar'/>)
    const img = getByRole('img')

    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', '/svg/icons/calendar.svg')
    expect(img).toHaveAttribute('alt', 'calendar')
  })
})
