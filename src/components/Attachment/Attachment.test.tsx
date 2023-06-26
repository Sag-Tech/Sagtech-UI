import { render, screen } from '@testing-library/react'

import Attachment from './Attachment'

test('check Attachment', () => {
  render(<Attachment />)
  const linkElement = screen.getByRole('input')
  expect(linkElement).toBeInTheDocument()
})
