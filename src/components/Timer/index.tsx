import { useStream } from "hooks/useStream";
import { RDate } from "lib/RDate";
import { FC } from "react";

export const Timer: FC<{ time: Date; }> = ({ time }) => {
  const deltatime = useStream(() => {
    const delta = +time - Date.now();

    if (delta < 0)
      return 0;

    return delta;
  }, [+time]);

  console.log('Rerender');

  return (
    <>
      Remaining: {new RDate(deltatime).getMinimum()}
    </>
  );
};