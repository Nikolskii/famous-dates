import { useContext, useEffect, useState } from 'react';
import { StyledNavItem } from '@/components/CircleNav/NavItem/StyledNavItem';
import { PositionType } from '@/components/CircleNav/NavItem/types';
import { FamousDatesContext } from '@/context/FamousDatesContext';

interface NavItemProps {
  stage: number;
  position: PositionType;
  onClick: () => void;
  angleRotate: number;
  isActiveStage: boolean;
  title: string;
}

export const NavItem = ({
  stage,
  position,
  onClick,
  angleRotate,
  isActiveStage,
  title,
}: NavItemProps) => {
  const { activeStage, prevActiveStage } = useContext(FamousDatesContext);
  const [itemTitle, setItemTitle] = useState('');

  useEffect(() => {
    if (isActiveStage) {
      if (activeStage === prevActiveStage) {
        setItemTitle(title);
      }
      if (activeStage !== prevActiveStage) {
        setTimeout(() => setItemTitle(title), 900);
      }
    }
  }, [isActiveStage, title, activeStage, prevActiveStage]);

  return (
    <StyledNavItem
      $position={position}
      onClick={onClick}
      $angleRotate={angleRotate}
      $isActiveStage={isActiveStage}
      title={itemTitle}
    >
      {stage}
    </StyledNavItem>
  );
};
