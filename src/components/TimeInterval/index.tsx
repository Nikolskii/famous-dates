import { useContext } from 'react';
import { TimeIntervalContainer } from '@/components/TimeInterval/TimeIntervalContainer';
import { FamousDatesContext } from '@/context/FamousDatesContext';
import { TimeIntervalYear } from '@/components/TimeInterval/TimeIntervalYear';
import { useAnimationYear } from '@/hooks/useAnimationYear';

export const TimeInterval = () => {
  const { famousDates, activeStage, prevActiveStage } =
    useContext(FamousDatesContext);

  const { start: activeStartYear, end: activeEndYear } = famousDates.find(
    (el) => el.stage === activeStage,
  ).timeInterval;

  const { start: prevStartYear, end: prevEndYear } = famousDates.find(
    (el) => el.stage === prevActiveStage,
  ).timeInterval;

  const start = useAnimationYear(activeStartYear, prevStartYear);
  const end = useAnimationYear(activeEndYear, prevEndYear);

  return (
    <TimeIntervalContainer>
      <TimeIntervalYear>{start}</TimeIntervalYear>
      <TimeIntervalYear $accent={true}>{end}</TimeIntervalYear>
    </TimeIntervalContainer>
  );
};
