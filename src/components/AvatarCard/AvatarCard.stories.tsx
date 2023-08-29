import type { StoryFn, Meta } from '@storybook/react'
import { AvatarCard } from './AvatarCard'

const meta: Meta<typeof AvatarCard> = {
  title: 'Avatar Card',
  component: AvatarCard
}
export default meta

const Template: StoryFn = (arg) => {
  return (
    <AvatarCard {...arg}>
      <img src={'img/employess/image.png'} alt={'image'} />
    </AvatarCard>
  )
}

export const AvatarComponent = Template.bind({})
AvatarComponent.args = {
  name: 'Andrey',
  info: 'Front-end developer',
  imgSize: 'w-[24px] h-[24px]'
}
