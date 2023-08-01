import React from 'react'
import '../../styles/globals.css'
import CardWrapper from '@components/CardWrapper/Wrapper/CardWrapper'
import Typography from '@components/Typo/Typography'

interface AvatarCardProps {
  name?: string
  info?: string
  classes?: string
  children: React.ReactNode
  imgSize?: string
}

const AvatarCard: React.FC<AvatarCardProps> = ({
  name = 'Some txt',
  info,
  classes,
  imgSize,
  children
}) => {
  return (
    <div className='inline-block'>
      <CardWrapper stoke='1' rounded='24' className='xl:p-24px p-16px'>
        <CardWrapper
          stoke='2'
          className='radius rounded-[12px] flex !justify-center xl:!w-[200px] xl:!h-[200px] !w-[176px] !h-[176px] items-center'
        >
          <div className={imgSize}>
            {React.cloneElement(children as React.ReactElement, {
              className: `${
                classes !== undefined ? classes : ''
              } object-cover w-full h-full`
            })}
          </div>
        </CardWrapper>
        <div className='mt-16px flex flex-col gap-8px items-center'>
          <Typography text={name} tag='h3' color='text-white_4' className='2xl:!text-32 !text-[24px]'/>
          <Typography text={info} type='Labels' color='text-grey_4' />
        </div>
      </CardWrapper>
    </div>
  )
}

export default AvatarCard
