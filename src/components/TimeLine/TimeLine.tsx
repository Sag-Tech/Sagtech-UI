import React, { useMemo, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { settings } from './SwiperSettings/swiper-settings'
import defaultStyles from './DefaultStyles/styles'

interface Text {
  title: string
  text: string
}

interface TimeLineProps {
  data?: Text[]
  imgName: string[]
  classes?: string
  children?: React.ReactNode
}

const TimeLine: React.FC<TimeLineProps> = ({ data, imgName, classes, children }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const information = useMemo(() => {
    if (data !== undefined) {
      return data.map((text, id) => (
        <SwiperSlide key={id}>
          <div>
            <div className='relative'>
              <div className='w-[32px] rounded-50% h-[32px] bg-pr_purple flex items-center justify-center'>
                <span className='font-bold text-16 leading-28 text-white'>
                  {id + 1}
                </span>
              </div>
            </div>
            <div className='mt-16px flex gap-8px flex-col'>
              <h1 className='text-28 leading-40 font-bold text-white_4 '>
                {text.title}
              </h1>
              <p className='text-14 leading-28 font-medium text-grey_4'>
                {text.text}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))
    }

    return null
  }, [data])

  const images = useMemo(() => {
    if (!children) return null

    return React.Children.map(children, (child, index) => {
      return (
        <div
          className={`${defaultStyles.coverImg} 
          ${index === imgName.length - 1 ? 'relative' : ''} 
          ${index === 0 ? 'first:z-[10]' : ''} 
          ${classes !== undefined ? classes : ''}`}
          key={index}
        >
          {React.cloneElement(child as React.ReactElement, { className: `${defaultStyles.img} ${currentSlide === index ? 'fade-in' : 'fade-out'}` })}
        </div>
      )
    })
  }, [children, imgName, currentSlide])

  return (
    <>
      <div>
        <div className='relative'>
         {images}
        </div>
        <div className='relative mt-40px'>
          <div className='border-5 top-[10px] left-[2px] absolute border-solid w-full border-pr_purple' />
          <Swiper
            {...settings}
            onSlideChange={(swiper) => {
              setCurrentSlide(swiper.activeIndex)
            }}
          >
            {information}
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default TimeLine
