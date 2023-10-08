/* eslint-disable no-unused-vars */
import React, {
  useMemo, useState, useRef, useCallback, useEffect,
} from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide, type SwiperRef } from 'swiper/react';
import 'swiper/css'
import settings from './SwiperSettings/swiper-settings';
import defaultStyles from './DefaultStyles/styles';
import Typography from '../Typography/Typography';
import SliderArrow from './SwiperNavigation/SliderArrow';

interface Text {
  title: string;
  text: string;
}

interface TimeLineProps {
  data?: Text[];
  imgName?: string[];
  classes?: string;
  children?: React.ReactNode;
  isInView?: boolean;
  onSlideChange?: (currentSlide: number) => void;
}

export function Timeline({
  data,
  imgName,
  classes,
  children,
  isInView,
  onSlideChange,
}: TimeLineProps) {
  const [dragStartX, setDragStartX] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderRef = useRef<SwiperRef>(null);

  const handleSlideChange = (slide: number) => {
    if (onSlideChange) {
      onSlideChange(slide);
      setCurrentSlide(slide)
    }
  };

  const handleNext = useCallback(() => {
    sliderRef?.current?.swiper.slideNext();
  }, []);

  const handlePrev = useCallback(() => {
    sliderRef?.current?.swiper.slidePrev();
  }, []);

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    setDragStartX(event.clientX);
  };
  const handleTouchStart: React.TouchEventHandler<HTMLDivElement>  = (event) => {
    const { clientX } = event.touches[0];
    setTouchStartX(clientX);
  };

  const handleDragEnd= (event: React.DragEvent<HTMLDivElement>) => {
    const dragEndX = event.clientX;
    const deltaX = dragEndX - dragStartX;

    if (deltaX > 0) {
      handlePrev();
    } else if (deltaX < 0) {
      handleNext();
    }
  };

  const handleTouchEnd: React.TouchEventHandler<HTMLDivElement>  = (event) => {
    const { clientX } = event.changedTouches[0];
    const deltaTouchX = clientX - touchStartX;

    if (deltaTouchX > 0) {
      handlePrev();
    } else if (deltaTouchX < 0) {
      handleNext();
    }
  };

  useEffect(() => {
    if (isInView) {
      sliderRef?.current?.swiper.autoplay.start();
    } else if (!isInView) {
      sliderRef?.current?.swiper.autoplay.stop();
    }
  }, [isInView]);

  const images = useMemo(() => {
    if (!children) return null;

    return React.Children.map(children, (child, index) => (
      <div
        className={`${defaultStyles.coverImg} 
         ${imgName && index === imgName.length - 1 ? 'relative' : ''} 
          ${classes !== undefined ? classes : ''}${currentSlide === index ? 'z-[10]' : 'z-[5]'}`}
        // eslint-disable-next-line react/no-array-index-key
        key={index}
      >
        {React.cloneElement(child as React.ReactElement, {
          className: `${defaultStyles.img}`,
        })}
      </div>
    ));
  }, [classes, imgName, children]);

  const information = useMemo(() => {
    if (data !== undefined) {
      return data.map((text, id) => (
        <SwiperSlide key={text.title}>
          <div>
            <div className="relative">
              <div className="flex h-[32px] w-[32px] items-center justify-center rounded-50% bg-pr_purple">
                <span className="text-16 font-bold leading-28 text-white">{id + 1}</span>
              </div>
            </div>
            <div className="mt-16px flex flex-col gap-8px">
              <Typography tag="h3" color="text-white_4">
                {text.title}
              </Typography>
              <Typography type="BodyM" color="text-grey_4">
                {text.text}
              </Typography>
            </div>
          </div>
        </SwiperSlide>
      ));
    }

    return null;
  }, [data]);
  return (
    <div className="relative">
      <div className="absolute 2xl:top-[-98px] top-[-80px] 2xl:right-[72px] xl:flex right-[32px] hidden gap-16px">
        <SliderArrow onClick={handlePrev} />
        <SliderArrow onClick={handleNext} isReversed />
      </div>
      <div
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="relative mr-16px sm:mr-32px 2xl:mr-72px"
      >
        {images}
      </div>
      <div className="relative -mr-8px mt-40px 2xl:-mr-48px">
        <div className="absolute left-[2px] top-[10px] w-full border-5 border-solid border-pr_purple" />
        <Swiper
          ref={sliderRef}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[Autoplay]}
          speed={1800}
          className="timeline-swiper swiper-time-line"
          {...settings}
          onSlideChange={(swiper: { activeIndex: number } ) => handleSlideChange(swiper.activeIndex)}
        >
          {information}
        </Swiper>
      </div>
    </div>
  );
}

export default Timeline;
