import React from 'react'
import '../../styles/globals.css'
import CardWrapper from '@components/CardWrapper/Wrapper/CardWrapper'
import Typography from '@components/Typo/Typography'

interface ResultProps {
  title?: string
  info?: string
  classes?: string
}

const Result: React.FC<ResultProps> = ({ title = 'Some txt', info, classes }) => {
  return (
    <CardWrapper stoke='1' rounded='24' className={`flex flex-col gap-8px sm:py-32px sm:px-40px py-24px px-32px ${classes !== undefined ? classes : ''}`}>
        <Typography text={title} tag='h2' color='text-pr_purple' />
        <Typography text={info} tag='h4' color='text-grey_4' />
    </CardWrapper>
  )
}

export default Result
