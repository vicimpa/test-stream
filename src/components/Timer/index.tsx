import { useStream } from "hooks/useStream";
import { FC, useLayoutEffect, useState } from "react";

interface ITimerProps {
  time: Date;
  onChange?: (runned: boolean) => any;
}

export const Timer: FC<ITimerProps> = ({
  time,
  onChange = () => { }
}) => {
  const deltatime = useStream(() => {
    const delta = +time - Date.now();

    if (delta < 0)
      return 0;

    return delta;
  }, [+time]);

  const [runned, setRunned] = useState(deltatime > 0);

  useLayoutEffect(() => {
    if (deltatime > 0 && !runned)
      setRunned(true);
    if (deltatime == 0 && runned)
      setRunned(false);
  }, [deltatime]);

  useLayoutEffect(() => {
    onChange(runned);
  }, [runned]);

  return (
    <>
      Remaining: {deltatime}
    </>
  );
};