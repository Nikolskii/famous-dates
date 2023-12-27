interface ArgsType {
  stage: number;
  amountItems: number;
}

interface ReturnType {
  top: number;
  left: number;
}

export const calculateNavItemPosition = ({
  stage,
  amountItems,
}: ArgsType): ReturnType => {
  const angle = (360 / amountItems) * (stage + 4);
  const x = 100 * Math.cos((angle * Math.PI) / 180);
  const y = 100 * Math.sin((angle * Math.PI) / 180);

  return {
    top: 50 + y,
    left: 50 + x,
  };
};
