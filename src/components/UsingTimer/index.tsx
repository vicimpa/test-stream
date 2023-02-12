import { Timer } from "components/Timer";
import { FDate } from "lib/FDate";
import { MouseEventHandler, useCallback, useState } from "react";

const values = ['10s', '30s', '1m', '5m', '30m', '1h', '2h', '6h', '1D', '7D', '1M'];

export const UsingTimer = () => {
  const [time, setTime] = useState(new FDate());

  const append = useCallback<MouseEventHandler>(
    (e) => {
      const { target } = e;
      if (target instanceof HTMLButtonElement) {
        const { innerText } = target;
        setTime(v => new FDate(+v).append(innerText));
      }
    },
    []
  );

  const reset = useCallback(() => {
    setTime(new FDate());
  }, []);

  return (
    <div onClick={append}>
      <p>Need Time: {time.toString()}</p>
      <p><Timer {...{ time }} /></p>
      <p>
        <button onClick={reset}>Now</button>
      </p>
      <p>
        {values.map(e => (
          <button key={e}>+{e}</button>
        ))}
      </p>
      <p>
        {values.map(e => (
          <button key={e}>-{e}</button>
        ))}
      </p>
    </div>
  );
};