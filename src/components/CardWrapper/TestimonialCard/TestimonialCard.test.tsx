import { render } from '@testing-library/react'
import TestimonialCard from './TestimonialCard'

describe('Testimonial Card component', () => {
  test('Get title and description', () => {
    const title = 'Title'
    const description = 'Description'
    const { getByText } = render(<TestimonialCard title={title} description={description} />)

    expect(getByText(title)).toBeInTheDocument()
    expect(getByText(description)).toBeInTheDocument()
  })

  test('Get added user', () => {
    const { getByRole } = render(<TestimonialCard user = 'user2' />)
    const img = getByRole('img')

    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', '/img/user/user2.png')
    expect(img).toHaveClass('rounded-circle')
    expect(img).toHaveAttribute('width', '42')
    expect(img).toHaveAttribute('height', '42')
  })
})
