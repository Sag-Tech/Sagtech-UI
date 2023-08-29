import React from 'react'
import '../../styles/globals.css'
import CardWrapper from '../CardWrapper/Wrapper/CardWrapper'
import Typography from '../Typo/Typography'

interface ResultProps {
  title?: string
  info?: string
  classes?: string
}

const Result: React.FC<ResultProps> = ({ title = 'Some txt', info, classes }) => {
  return (
    <CardWrapper
      stoke="1"
      rounded="24"
      className={`flex flex-col gap-8px px-32px py-24px sm:px-40px sm:py-32px ${
        classes !== undefined ? classes : ''
      }`}
    >
      <Typography
        text={title}
        tag="h2"
        color="text-pr_purple"
        className="whitespace-nowrap"
      />
      <Typography
        text={info}
        tag="h4"
        color="text-grey_4"
        className="whitespace-nowrap"
      />
    </CardWrapper>
  )
}

export default Result
