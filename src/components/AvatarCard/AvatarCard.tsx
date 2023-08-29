import React from 'react'
import '../../styles/globals.css'
import { CardWrapper } from '../CardWrapper/Wrapper/CardWrapper'
import { Typography } from '../Typo/Typography'

interface AvatarCardProps {
  name?: string
  info?: string
  classes?: string
  children: React.ReactNode
  imgSize?: string
}

export const AvatarCard: React.FC<AvatarCardProps> = ({
  name = 'Some txt',
  info,
  classes,
  imgSize,
  children
}) => {
  return (
    <div data-tid="avatar-card" className="inline-block">
      <CardWrapper stoke="1" rounded="24" className="p-16px xl:p-24px">
        <CardWrapper
          stoke="2"
          rounded="12"
          className="radius flex !h-[176px] !w-[176px] items-center !justify-center rounded-[12px] xl:!h-[200px] xl:!w-[200px]"
        >
          <div data-tid="avatar-img" className={imgSize}>
            {React.cloneElement(children as React.ReactElement, {
              className: `${
                classes !== undefined ? classes : ''
              } object-cover w-full h-full rounded-[12px]`,
              'data-tid': 'img'
            })}
          </div>
        </CardWrapper>
        <div className="mt-16px flex flex-col items-center gap-8px">
          <Typography
            text={name}
            tag="h3"
            color="text-white_4"
            className="!text-[24px] 2xl:!text-32"
          />
          <Typography text={info} type="LabelsS" color="text-grey_4" />
        </div>
      </CardWrapper>
    </div>
  )
}
