import { useContext } from 'react';
import { ButtonContainer } from '@/components/TimeIntervalPagination/ButtonContainer';
import { Stage } from '@/components/TimeIntervalPagination/Stage';
import { ChangeStageButton } from '@/components/TimeIntervalPagination/ChangeStageButton';
import { FamousDatesContext } from '@/context/FamousDatesContext';
import { DotPagination } from '@/components/TimeIntervalPagination/DotPagination';
import { Wrapper } from '@/components/TimeIntervalPagination/Wrapper';
import { Container } from '@/components/TimeIntervalPagination/Container';

export const TimeIntervalPagination = () => {
  const { famousDates, activeStage, setActiveStage, setPrevActiveStage } =
    useContext(FamousDatesContext);

  const handleClickPrevStage = () => {
    setPrevActiveStage(activeStage);
    setActiveStage(activeStage - 1);
  };
  const handleClickNextStage = () => {
    setPrevActiveStage(activeStage);
    setActiveStage(activeStage + 1);
  };

  const isPrevStageButtonDisabled = activeStage === 1;
  const isNextStageButtonDisabled = activeStage === famousDates.length;

  const stage = `0${activeStage}/0${famousDates.length}`;

  return (
    <Container>
      <Wrapper>
        <Stage>{stage}</Stage>
        <ButtonContainer>
          <ChangeStageButton
            disabled={isPrevStageButtonDisabled}
            onClick={handleClickPrevStage}
            direction="prev"
          />
          <ChangeStageButton
            disabled={isNextStageButtonDisabled}
            onClick={handleClickNextStage}
            direction="next"
          />
        </ButtonContainer>
      </Wrapper>
      <DotPagination />
    </Container>
  );
};
