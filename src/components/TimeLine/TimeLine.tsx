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
}

const TimeLine: React.FC<TimeLineProps> = ({ data, imgName }) => {
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

  return (
    <>
      <div>
        <div data-tid='images' className='mb-40px relative'>
          <div className={`${defaultStyles.defaultImg} ${'z-[10]'}`}><img src={`img/animationImg/${imgName[0]}.png`} alt='animationOne' className={`${defaultStyles.img} ${currentSlide === 0 ? 'fade-in' : 'fade-out'} ${'object-left'}`}/></div>
          <div className={`${defaultStyles.defaultImg} ${'z-[5]'}`}> <img src={`img/animationImg/${imgName[1]}.png`} alt='animationTwo' className={`${defaultStyles.img} ${currentSlide === 1 ? 'fade-in' : 'fade-out'}`}/></div>
          <div className={`${defaultStyles.defaultImg} ${'z-[5]'}`}> <img src={`img/animationImg/${imgName[2]}.png`} alt='animationThree' className={`${defaultStyles.img} ${currentSlide === 2 ? 'fade-in' : 'fade-out'}`}/></div>
          <div className={`${defaultStyles.defaultImg} ${'z-[5]'}`}><img src={`img/animationImg/${imgName[3]}.png`} alt='animationFour' className={`${defaultStyles.img} ${currentSlide === 3 ? 'fade-in' : 'fade-out'}`}/></div>
          <div className={`${defaultStyles.defaultImg} ${'z-[5]'}`}><img src={`img/animationImg/${imgName[4]}.png`} alt='animationFive' className={`${defaultStyles.img} ${currentSlide === 4 ? 'fade-in' : 'fade-out'}`}/></div>
          <div className='w-full 2xl:h-[492px] xl:h-[360px] xs:h-[268px] h-[186px] rounded-24px z-[5]'><img src={`img/animationImg/${imgName[5]}.png`} alt='animationSix' className={`${defaultStyles.img} ${currentSlide === 5 ? 'fade-in' : 'fade-out'}`}/></div>
        </div>
        <div className='relative'>
          <div className='border-5 top-[10px] left-[2px] absolute border-solid w-full border-pr_purple' />
          <Swiper {...settings} onSlideChange={(swiper) => { setCurrentSlide(swiper.activeIndex) }}>{information}</Swiper>
        </div>
      </div>
    </>
  )
}

export default TimeLine
