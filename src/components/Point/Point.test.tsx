import { render, screen } from '@testing-library/react'
import Point from './Point'

describe('Point component', () => {
  test('Get point default', () => {
    const { getByTestId } = render(<Point />)
    const elementId = getByTestId('point')

    expect(elementId).toBeInTheDocument()
    expect(elementId).toHaveClass('flex items-center gap-8px')
  })

  test('Get point with text and children', () => {
    const children = <div className="w-[8px] h-[8px] bg-pr_purple rounded-circle" data-testid="children"></div>
    render(<Point text='Test'>{children}</Point>)
    const text = screen.getByText('Test')
    const elementId = screen.getByTestId('children')

    expect(text).toBeInTheDocument()
    expect(elementId).toHaveClass('w-[8px] h-[8px] bg-pr_purple rounded-circle')
  })

  test('Get point img children', () => {
    const children = <img width={15} height={15} src='/svg/icons/users.svg' alt='icon' data-testid="children" />
    const { getByRole } = render(<Point>{children}</Point>)
    const img = getByRole('img')
    const imgId = screen.getByTestId('children')

    expect(img).toBeInTheDocument()
    expect(imgId).toBeInTheDocument()
    expect(img).toHaveAttribute('src', '/svg/icons/users.svg')
    expect(img).toHaveAttribute('width', '15')
    expect(img).toHaveAttribute('height', '15')
  })
})
