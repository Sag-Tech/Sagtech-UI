import { render } from '@testing-library/react'
import { TimeLine } from './TimeLine'

interface SwiperProps {
  children: React.ReactNode
  id: string
}

const info = [
  {
    title: 'In-depth Niche Analysis',
    text: 'We delve into your unique business landscape, assessing potential risks and addressing pitfalls before your project even begins.'
  },
  {
    title: 'Cutting-Edge Technologies',
    text: 'Our use of modern, efficient technologies accelerates task completion while saving you time and money..'
  },

  {
    title: 'Future-Proof Scalability',
    text: 'With our arsenal of over 30 advanced technologies, we build solutions that grow with your business, eliminating the need for costly rewrites or overhauls.'
  },

  {
    title: 'Future-Proof Scalability',
    text: 'With our arsenal of over 30 advanced technologies, we build solutions that grow with your business, eliminating the need for costly rewrites or overhauls.'
  }
]

const images = ['animation-one']

jest.mock('swiper/react', () => ({
  Swiper: ({ children }: SwiperProps) => (
    <div data-tid='swiper'>{children}</div>
  ),
  SwiperSlide: ({ children }: SwiperProps) => {
    return (
      <div data-tid='slide'>{children}</div>
    )
  }
}))

jest.mock('swiper/css', () => jest.fn())

describe('TineLine component', () => {
  it('TineLine component render', () => {
    const { getByTestId, getByText } = render(<TimeLine imgName={images} data={info} >
       {images.map((imageName, index) => (
        <img data-tid={`image-${imageName}`} key={index} src={`img/animationImg/${imageName}.png`} alt={imageName} />
       ))}
    </TimeLine>)
    const imagesElement = getByTestId('image-animation-one')
    const swiperElement = getByTestId('swiper')
    const slideElement = getByText('In-depth Niche Analysis')
    expect(imagesElement).toBeInTheDocument()
    expect(swiperElement).toBeInTheDocument()
    expect(slideElement).toBeInTheDocument()
  })
})
