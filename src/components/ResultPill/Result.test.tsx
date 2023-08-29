import { render } from '@testing-library/react'

import { Result } from './Result'

describe('Result component', () => {
  it('Result render', () => {
    const { getByTestId, queryByText } = render(<Result title='+2300' info='something' />)
    const resultElement = getByTestId('card-wrapper')
    const titleElement = queryByText('+2300')
    const textElement = queryByText('something')
    expect(titleElement).toBeInTheDocument()
    expect(textElement).toBeInTheDocument()
    expect(resultElement).toBeInTheDocument()
  })
})
