import { render } from '@testing-library/react'
import Typography from './Typography'

describe('Font component', () => {
  test('Get h1 font', () => {
    const { getByRole } = render(<Typography text = 'Texth1' tag = 'h1' />)
    const paragraphElement = getByRole('heading', { level: 1 })

    expect(paragraphElement).toBeInTheDocument()
    expect(paragraphElement).toHaveClass('font-["Orbitron"] text-40 sm:text-48 2xl:text-64 font-bold leading-56 sm:leading-64 2xl:leading-80 uppercase')
    expect(paragraphElement).toBeInTheDocument()
  })

  test('Get h2 font', () => {
    const { getByRole } = render(<Typography text = 'Texth2' tag = 'h2' />)
    const paragraphElement = getByRole('heading', { level: 2 })

    expect(paragraphElement).toBeInTheDocument()
    expect(paragraphElement).toHaveClass('font-["Orbitron"] text-32 sm:text-40 2xl:text-48 font-bold leading-48 sm:leading-56 2xl:leading-64 uppercase')
    expect(paragraphElement).toBeInTheDocument()
  })

  test('Get h3 font', () => {
    const { getByRole } = render(<Typography text = 'Texth3' tag = 'h3' />)
    const paragraphElement = getByRole('heading', { level: 3 })

    expect(paragraphElement).toBeInTheDocument()
    expect(paragraphElement).toHaveClass('font-["Manrope"] text-28 2xl:text-32 font-bold leading-40 2xl:leading-48')
    expect(paragraphElement).toBeInTheDocument()
  })

  test('Get h4 font', () => {
    const { getByRole } = render(<Typography text = 'Texth4' tag = 'h4' />)
    const paragraphElement = getByRole('heading', { level: 4 })

    expect(paragraphElement).toBeInTheDocument()
    expect(paragraphElement).toHaveClass('font-["Manrope"] text-16 2xl:text-18 font-semibold leading-24')
    expect(paragraphElement).toBeInTheDocument()
  })

  test('Get BodyL font', () => {
    const { getByText } = render(<Typography text = 'Text BodyL' type = 'BodyL' />)
    const paragraphElement = getByText('Text BodyL')

    expect(paragraphElement.tagName).toBe('P')
    expect(paragraphElement).toHaveClass('font-["Manrope"] text-14 2xl:text-16 font-medium leading-28 2xl:leading-32')
    expect(paragraphElement).toBeInTheDocument()
  })

  test('Get BodyS font', () => {
    const { getByText } = render(<Typography text = 'Text BodyS' type = 'BodyS' />)
    const paragraphElement = getByText('Text BodyS')

    expect(paragraphElement.tagName).toBe('P')
    expect(paragraphElement).toHaveClass('font-["Manrope"] text-14 font-medium leading-24 2xl:leading-28')
    expect(paragraphElement).toBeInTheDocument()
  })

  test('Get Labels font', () => {
    const { getByText } = render(<Typography text = 'Text Labels' type = 'Labels' />)
    const paragraphElement = getByText('Text Labels')

    expect(paragraphElement.tagName).toBe('P')
    expect(paragraphElement).toHaveClass('font-["Manrope"] text-14 sm:text-16 font-semibold leading-24')
    expect(paragraphElement).toBeInTheDocument()
  })

  test('Get Info font', () => {
    const { getByText } = render(<Typography text = 'Text Info' type = 'Info' />)
    const paragraphElement = getByText('Text Info')

    expect(paragraphElement.tagName).toBe('P')
    expect(paragraphElement).toHaveClass('font-["Manrope"] text-12 font-medium leading-16')
    expect(paragraphElement).toBeInTheDocument()
  })

  test('Get Buttons font', () => {
    const { getByText } = render(<Typography text = 'Text Buttons' type = 'Buttons' />)
    const paragraphElement = getByText('Text Buttons')

    expect(paragraphElement.tagName).toBe('P')
    expect(paragraphElement).toHaveClass('font-["Manrope"] text-16 font-bold leading-24')
    expect(paragraphElement).toBeInTheDocument()
  })
})
