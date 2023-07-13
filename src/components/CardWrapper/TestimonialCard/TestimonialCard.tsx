import Typography from '@components/Typo/Typography'
import React from 'react'
import { type VariantTypoUser } from './types'

interface TestimonialCardTypes {
  title?: string
  description?: string
  role?: string
  user?: VariantTypoUser
}
const TestimonialCard: React.FC<TestimonialCardTypes> = ({ title, description, role, user = 'user1' }) => {
  return (
    <div className="px-16px py-24px sm:px-24px sm:py-32px h-full gap-12px flex flex-col">
      <img width="42" height="42" src={`/img/user/${user}.png`} alt={user} className='rounded-circle' />
      <div className="h-full">
        <Typography text={description} type='BodyS' color='text-grey_4'/>
      </div>
      <div className="border-t-1 border-t-solid border-t-black_3"></div>
      <div className="flex flex-col justify-between gap-4px">
        <Typography text={title} type='Labels' color='text-white_4'/>
        <Typography text={role} type='Info' color='text-pr_purple'/>
      </div>
    </div>
  )
}
export default TestimonialCard
