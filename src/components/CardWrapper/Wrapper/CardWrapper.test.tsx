import { render } from '@testing-library/react'
import AdvantagesCard, { type AdvantagesCardTypes } from '../AdvantagesCard/AdvantagesCard'
import CardWrapper from './CardWrapper'

describe('Card Wrapper component', () => {
  test('Get styles', () => {
    const { getByTestId } = render(<CardWrapper stoke ='1' rounded = '24' className='testClass'/>)
    const elementId = getByTestId('card-wrapper')

    expect(elementId).toBeInTheDocument()
    expect(elementId).toHaveClass('w-full h-full justify-between')
    expect(elementId).toHaveClass('BorderGradient24Stroke1 rounded-24px')
    expect(elementId).toHaveClass('testClass')
  })

  test('Get text children', () => {
    const children = <div>Test</div>
    const { getByText } = render(<CardWrapper>{children}</CardWrapper>)
    const text = getByText('Test')

    expect(text).toBeInTheDocument()
  })

  test('Get component children', () => {
    const args: AdvantagesCardTypes = {
      title: 'Title',
      description: 'Description',
      icon: 'magic'
    }
    const children = <AdvantagesCard {...args} />
    const { getByText, getByRole } = render(<CardWrapper>{children}</CardWrapper>)

    expect(getByRole('img')).toHaveAttribute('src', '/svg/icons/magic.svg')
    expect(getByText('Title')).toBeInTheDocument()
    expect(getByText('Description')).toBeInTheDocument()
  })
})
