import Typography from '@components/Typo/Typography'
import React from 'react'
import { type VariantTypoIcon } from './types'

interface AdvantagesCardTypes {
  title?: string
  description?: string
  icon?: VariantTypoIcon
}
const AdvantagesCard: React.FC<AdvantagesCardTypes> = ({ title, description, icon = 'time' }) => {
  return (
    <div className="p-24px h-full gap-16px flex flex-col">
      <img width="32" height="32" src={`/svg/icons/${icon}.svg`} alt={icon} className="filterIcon" />
      <div className="flex flex-col justify-between gap-8px">
        <Typography text={title} type='Labels' color='text-white_4'/>
        <Typography text={description} type='BodyS' color='text-grey_4'/>
      </div>
    </div>
  )
}
export default AdvantagesCard
