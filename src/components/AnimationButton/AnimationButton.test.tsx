import { render, screen } from '@testing-library/react'

import AnimationButton from './AnimationButton'

test('check buttons', () => {
  render(<AnimationButton />)
  const linkElement = screen.getByRole('button')
  expect(linkElement).toBeInTheDocument()
})
