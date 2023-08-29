import { render } from '@testing-library/react'

import { AvatarCard } from './AvatarCard'

describe('AvatarCard component', () => {
  it('AvatarCard render', () => {
    const { getByTestId, queryByText } = render(<AvatarCard name='Ivan' imgSize='w-[200px] h-[200px]'>
         <img src={'img/employess/image.png'} alt={'image'} />
    </AvatarCard>)
    const avatarCard = getByTestId('avatar-card')
    const avatarImg = getByTestId('avatar-img')
    const img = getByTestId('img')
    const nameElement = queryByText('Ivan')
    expect(avatarCard).toBeInTheDocument()
    expect(img).toBeInTheDocument()
    expect(avatarImg).toBeInTheDocument()
    expect(nameElement).toBeInTheDocument()
    expect(avatarImg).toHaveClass('w-[200px] h-[200px]')
  })
})
