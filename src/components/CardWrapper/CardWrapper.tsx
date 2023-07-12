import Typography from '@components/Font/Typography'
import React, { useMemo } from 'react'

interface CardWrapperTypes {
  title?: string
  description?: string
  icon?: 'time' | 'price' | 'rocket' | 'flow' | 'innovation' | 'team' | 'magic'
  type: 'advantages' | 'testimonial'
  role?: string
  user?: 'user1' | 'user2'
}
const CardWrapper: React.FC<CardWrapperTypes> = ({ title, description, icon = 'time', type, role, user = 'user1' }) => {
  const content = useMemo(() => {
    if (type === 'advantages') {
      return (
        <div className="w-full h-full rounded-24px justify-between customersBorderGradient">
          <div className="p-24px h-full gap-16px flex flex-col">
            <img width="32" height="32" src={`/svg/icons/${icon}.svg`} alt={icon} />
            <div className="flex flex-col justify-between gap-8px">
              <Typography text={title} type='Labels' color='text-white_4'/>
              <Typography text={description} type='Body S' color='text-grey_4'/>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div className="w-[327px] sm:w-[360px] h-full rounded-24px justify-between customersBorderGradient">
        <div className="px-16px py-24px sm:px-24px sm:py-32px h-full gap-12px flex flex-col">
            <img width="42" height="42" src={`/img/user/${user}.png`} alt={user} className='rounded-circle' />
            <div className="h-full">
              <Typography text={description} type='Body S' color='text-grey_4'/>
            </div>
          <div className="border-t-1 border-t-solid border-t-black_3"></div>
          <div className="flex flex-col justify-between gap-4px">
            <Typography text={title} type='Labels' color='text-white_4'/>
            <Typography text={role} type='Info' color='text-pr_purple'/>
          </div>
        </div>
      </div>
    )
  }, [title, description, icon, type, role, user])

  return content
}
export default CardWrapper
