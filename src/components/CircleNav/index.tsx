import { useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Circle } from '@/components/CircleNav/Circle';
import { FamousDatesContext } from '@/context/FamousDatesContext';
import { NavItem } from '@/components/CircleNav/NavItem';
import { calculateNavItemPosition } from '@/utils/calculateNavItemPosition';
import { calculateRotateCircle } from '@/utils/calculateRotateCircle';
import { Container } from '@/components/CircleNav/Container';

export const CircleNav = () => {
  const [angleRotate, setAngleRotate] = useState<number>(0);

  const { famousDates, activeStage, setActiveStage, setPrevActiveStage } =
    useContext(FamousDatesContext);

  const handleNavItemClick = (stage: number) => {
    setPrevActiveStage(activeStage);
    setActiveStage(stage);
  };

  const circleNavItems = famousDates.map((item) => {
    return (
      <NavItem
        stage={item.stage}
        position={calculateNavItemPosition({
          stage: item.stage,
          amountItems: famousDates.length,
        })}
        key={uuidv4()}
        angleRotate={angleRotate}
        isActiveStage={item.stage === activeStage}
        title={item.title}
        onClick={() => handleNavItemClick(item.stage)}
      />
    );
  });

  useEffect(() => {
    setAngleRotate(
      calculateRotateCircle({
        stage: activeStage,
        amountItems: famousDates.length,
      }),
    );
  }, [activeStage, famousDates.length]);

  return (
    <Circle $angleRotate={angleRotate}>
      <Container>{circleNavItems}</Container>
    </Circle>
  );
};
