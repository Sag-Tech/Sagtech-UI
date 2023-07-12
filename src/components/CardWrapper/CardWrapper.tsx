import Typography from '@components/Font/Typography'
import React from 'react'

interface CardWrapperTypes {
  title?: string
  description?: string
  icon: 'time' | 'price' | 'rocket' | 'flow' | 'innovation' | 'team' | 'magic'
}
const CardWrapper: React.FC<CardWrapperTypes> = ({ title, description, icon }) => {
  return (
    <div
        className="h-[184px] w-[581px]"
    >
      <div className="w-full h-full rounded-24px justify-between customersBorderGradient">
        <div className="p-24px h-full gap-16px flex flex-col">
          <div className="">
          <img width="32" height="32" src={`/svg/icons/${icon}.svg`} alt={icon} />
        </div>
        <div className="flex flex-col justify-between gap-8px">
          <Typography text={title} type='Labels' color='text-white_4'/>
          <Typography text={description} type='Body S' color='text-grey_4'/>
        </div>
        </div>
      </div>
    </div>
  )
}
export default CardWrapper
