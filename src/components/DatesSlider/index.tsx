import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ReactElement, useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FamousDatesContext } from '@/context/FamousDatesContext';
import { FamousDatesType } from '@/types/FamousDates';
import { SlideItemTitle } from '@/components/DatesSlider/SlideItemTitle';
import { SlideItemDescription } from '@/components/DatesSlider/SlideItemDescription';
import { SlideItemContainer } from '@/components/DatesSlider/SlideItemContainer';
import { SwiperWrap } from '@/components/DatesSlider/SwiperWrap';
import { Title } from '@/components/DatesSlider/Title';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const DatesSlider = () => {
  const { famousDates, activeStage, prevActiveStage } =
    useContext(FamousDatesContext);

  const activeFamousDates: FamousDatesType = famousDates.find(
    (dates) => dates.stage === activeStage,
  );

  const [swiperSlideItems, setSwiperSlideItems] = useState<ReactElement[]>([]);

  const slideItems = activeFamousDates.historicalEvents.map((item) => {
    return (
      <SwiperSlide key={uuidv4()}>
        <SlideItemContainer>
          <SlideItemTitle>{item.year}</SlideItemTitle>
          <SlideItemDescription>{item.event}</SlideItemDescription>
        </SlideItemContainer>
      </SwiperSlide>
    );
  });

  useEffect(() => {
    if (activeStage !== prevActiveStage) {
      setSwiperSlideItems([]);
      setTimeout(() => setSwiperSlideItems(slideItems), 900);
    } else {
      setSwiperSlideItems(slideItems);
    }
  }, [activeStage, prevActiveStage]);

  return (
    <>
      {Boolean(swiperSlideItems.length) && (
        <Title>{activeFamousDates.title ?? ' '}</Title>
      )}
      <SwiperWrap>
        <Swiper
          modules={[Navigation]}
          navigation
          breakpoints={{
            320: {
              spaceBetween: 25,
              slidesPerView: 2,
            },
            576: {
              spaceBetween: 30,
              slidesPerView: 3,
            },
            1000: {
              spaceBetween: 80,
              slidesPerView: 3,
            },
          }}
        >
          {swiperSlideItems}
        </Swiper>
      </SwiperWrap>
    </>
  );
};
