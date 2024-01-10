interface ArgsType {
  stage: number;
  amountItems: number;
}

export const calculateRotateCircle = ({
  stage,
  amountItems,
}: ArgsType): number => {
  const step = 360 / amountItems;
  return step * stage - step;
};
