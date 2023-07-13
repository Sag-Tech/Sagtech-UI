import { render } from '@testing-library/react'
import AdvantagesCard from './AdvantagesCard'

describe('Advantages Card component', () => {
  test('Get title and description and default icon', () => {
    const title = 'Title'
    const description = 'Description'

    const { getByText, getByRole } = render(<AdvantagesCard title={title} description={description} />)

    expect(getByText(title)).toBeInTheDocument()
    expect(getByText(description)).toBeInTheDocument()
    expect(getByRole('img')).toHaveAttribute('src', '/svg/icons/time.svg')
  })

  test('Get added icon', () => {
    const { getByRole } = render(<AdvantagesCard icon='team' />)

    const icon = getByRole('img')
    expect(icon).toBeInTheDocument()
    expect(icon).toHaveAttribute('src', '/svg/icons/team.svg')
  })

  test('Get styles icon', () => {
    const title = 'Title'
    const description = 'Description'
    const { getByRole } = render(<AdvantagesCard title={title} description={description} />)
    const defaultIcon = getByRole('img')

    expect(defaultIcon).toHaveClass('filterIcon')
  })
})
