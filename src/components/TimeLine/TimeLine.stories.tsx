import { type Meta, type StoryFn } from '@storybook/react'
import { TimeLine } from './TimeLine'

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

const images = ['animation-one', 'animation-two', 'animation-three', 'animation-four', 'animation-five', 'animation-six']

export default {
  title: 'TimeLine',
  component: TimeLine
} satisfies Meta

const TimeLineDefault: StoryFn = (arg) => {
  return (
    <TimeLine imgName={images} {...arg}>
        {images.map((imageName, index) => (
        <img key={index} src={`img/animationImg/${imageName}.png`} alt={imageName} />
        ))}
    </TimeLine>
  )
}

export const TimeLineCheck = TimeLineDefault.bind({})

TimeLineCheck.args = {
  data: info,
  classes: 'fix-images'
}
