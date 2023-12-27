import icon from './icon.png';
import styled from 'styled-components';
import { device } from '@/components/GlobalStyle/breakpoints';

export const SwiperWrap = styled.div`
  .swiper {
    padding: 0 80px;

    @media ${device.tabletL} {
      padding: 0 40px;
    }

    @media ${device.tabletM} {
      padding: 0 30px;
    }

    @media ${device.mobile} {
      padding: 0 20px;
    }
  }

  .swiper-button {
    &-prev,
    &-next {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: #fff url(${icon}) no-repeat center;
      box-shadow: 0 0 15px 0 rgba(56, 119, 238, 0.1);
      transition: opacity 0.5s;
      position: absolute;

      &:hover {
        opacity: 0.6;
      }

      @media ${device.tabletL} {
        opacity: 0;
      }
    }

    &-prev:after {
      content: '';
    }

    &-next:after {
      content: '';
    }

    &-prev {
      left: 20px;
      transform: rotate(-180deg);
    }

    &-next {
      right: 20px;
    }

    &-disabled {
      opacity: 0;
    }
  }
`;
