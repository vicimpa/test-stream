import { useStream } from "lib/useStream";
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
      Time: {deltatime}
    </>
  );
};