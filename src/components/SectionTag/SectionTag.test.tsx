import { render } from '@testing-library/react'
import SectionTag from './SectionTag'

describe('Section Tag component', () => {
  test('Get default size', () => {
    const { getByTestId } = render(<SectionTag/>)
    const elementId = getByTestId('section-tag')

    expect(elementId).toBeInTheDocument()
    expect(elementId).toHaveClass('w-full h-full border-1 border-solid border-pr_purple')
    expect(elementId).toHaveClass('rounded-circle py-8px px-16px')
  })

  test('Get middle size', () => {
    const { getByTestId } = render(<SectionTag size='middle'/>)
    const elementId = getByTestId('section-tag')

    expect(elementId).toBeInTheDocument()
    expect(elementId).toHaveClass('w-full h-full border-1 border-solid border-pr_purple')
    expect(elementId).toHaveClass('rounded-circle py-12px px-20px')
  })

  test('Get large size', () => {
    const { getByTestId } = render(<SectionTag size='large'/>)
    const elementId = getByTestId('section-tag')

    expect(elementId).toBeInTheDocument()
    expect(elementId).toHaveClass('w-full h-full border-1 border-solid border-pr_purple')
    expect(elementId).toHaveClass('rounded-16px py-16px px-24px')
  })

  test('Get test className', () => {
    const { getByTestId } = render(<SectionTag className='testClass'/>)
    const elementId = getByTestId('section-tag')

    expect(elementId).toBeInTheDocument()
    expect(elementId).toHaveClass('testClass')
  })

  test('Get text children', () => {
    const children = <p>Test</p>
    const { getByText } = render(<SectionTag>{children}</SectionTag>)
    const text = getByText('Test')

    expect(text).toBeInTheDocument()
    expect(text.tagName).toBe('P')
  })
})
