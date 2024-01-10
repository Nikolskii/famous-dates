import { Title } from '@/components/Title';
import { DatesSlider } from '@/components/DatesSlider';
import { TimeIntervalPagination } from '@/components/TimeIntervalPagination';
import { FamousDatesProvider } from '@/context/FamousDatesProvider';
import { AppContainer } from '@/components/AppContainer';
import { TimeInterval } from '@/components/TimeInterval';
import { CircleNav } from '@/components/CircleNav';
import { Main } from '@/components/Main';

export const App = () => {
  return (
    <FamousDatesProvider>
      <AppContainer>
        <Main>
          <Title />
          <CircleNav />
          <TimeInterval />
          <TimeIntervalPagination />
        </Main>
        <DatesSlider />
      </AppContainer>
    </FamousDatesProvider>
  );
};
