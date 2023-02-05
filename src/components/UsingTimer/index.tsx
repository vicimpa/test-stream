import { Timer } from "components/Timer";
import { FDate } from "lib/FDate";
import { useCallback, useState } from "react";

export const UsingTimer = () => {
  const [time, setTime] = useState(new FDate());

  const updateTime = useCallback((cb: (v: FDate) => any) => {
    setTime(v => (cb(v), new FDate(v)));
  }, []);

  return (
    <>
      <p>Need Time: {time.toString()}</p>
      <p><Timer {...{ time }} /></p>
      <button onClick={updateTime.bind(null, v => v.s += 10)}>+10s</button>
      <button onClick={updateTime.bind(null, v => v.s += 30)}>+30s</button>
      <button onClick={updateTime.bind(null, v => v.m += 1)}>+1m</button>
      <button onClick={updateTime.bind(null, v => v.m += 5)}>+5m</button>
      <button onClick={updateTime.bind(null, v => v.m += 30)}>+30m</button>
      <button onClick={updateTime.bind(null, v => v.h += 1)}>+1h</button>
    </>
  );
};