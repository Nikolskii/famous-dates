import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FamousDatesContext } from '@/context/FamousDatesContext';
import { Container } from '@/components/TimeIntervalPagination/DotPagination/Container';
import { DotPaginationItem } from '@/components/TimeIntervalPagination/DotPagination/DotPaginationItem';

export const DotPagination = () => {
  const { famousDates, activeStage, setActiveStage, setPrevActiveStage } =
    useContext(FamousDatesContext);

  const dotPaginationItems = famousDates.map((item) => {
    return (
      <DotPaginationItem
        key={uuidv4()}
        $isActiveStage={item.stage === activeStage}
        onClick={() => {
          setPrevActiveStage(activeStage);
          setActiveStage(item.stage);
        }}
      />
    );
  });

  return <Container>{dotPaginationItems}</Container>;
};
