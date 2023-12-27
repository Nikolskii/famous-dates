import styled from 'styled-components';
import { PositionType } from '@/components/CircleNav/NavItem/types';

interface Props {
  $position: PositionType;
  $angleRotate: number;
  $isActiveStage: boolean;
  title: string;
}

const ITEM_WIDTH = '56px';
const ITEM_HEIGHT = '56px';
const ACTIVE_BACKGROUND_COLOR = '#f4f5f9';
const FONT_SIZE = '20px';
const TRANSITION_DURATION = '.2s';

export const StyledNavItem = styled.div.attrs<Props>((props) => ({
  $position: props.$position,
  $angleRotate: props.$angleRotate,
  $isActiveStage: props.$isActiveStage,
}))`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${({ $isActiveStage }) => `${$isActiveStage ? FONT_SIZE : '0'}`};
  line-height: 30px;
  font-weight: 400;
  color: #42567a;

  border: 1px solid #929aa9;
  border-radius: 50%;

  position: absolute;
  top: ${({ $position }) => `${$position.top}%`};
  left: ${({ $position }) => `${$position.left}%`};
  width: ${({ $isActiveStage }) => `${$isActiveStage ? ITEM_WIDTH : '6px'}`};
  height: ${({ $isActiveStage }) => `${$isActiveStage ? ITEM_HEIGHT : '6px'}`};
  z-index: 1;

  background-color: ${({ $isActiveStage }) =>
    `${$isActiveStage ? ACTIVE_BACKGROUND_COLOR : '#42567A'}`};

  transition:
    width ${TRANSITION_DURATION} linear,
    height ${TRANSITION_DURATION} linear,
    background-color ${TRANSITION_DURATION} linear,
    font-size 0.1s linear;

  transform: ${({ $angleRotate }) =>
    `translate(-50%, -50%) rotate(${$angleRotate}deg)`};

  &:after {
    content: ${({ $isActiveStage, title }) =>
      `${$isActiveStage && title ? `'${title}'` : ''}`};
    font-family: 'PT Sans Bold';
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    position: absolute;
    left: 75px;
  }

  &:hover {
    cursor: ${({ $isActiveStage }) =>
      `${$isActiveStage ? 'default' : 'pointer'}`};
    width: ${ITEM_WIDTH};
    height: ${ITEM_HEIGHT};
    background-color: ${ACTIVE_BACKGROUND_COLOR};
    font-size: ${FONT_SIZE};
  }
`;
