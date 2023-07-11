import { render, screen } from '@testing-library/react'

import TextArea from './TextArea'

test('check TextArea', () => {
  render(<TextArea />)
  const linkElement = screen.getByRole('textarea')
  expect(linkElement).toBeInTheDocument()
})
