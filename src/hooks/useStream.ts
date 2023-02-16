import { useLayoutEffect, useState } from "react";

interface IStream {
  preview: any;
  callbackChange: (res: any) => any;
  calcFunction: () => any;
}

const STREAMS = new Set<IStream>();

function tick() {
  requestAnimationFrame(tick);

  for (const stream of STREAMS) {
    const { preview, calcFunction, callbackChange } = stream;
    const newResult = calcFunction();

    if (preview !== newResult) {
      callbackChange(newResult);
      stream.preview = newResult;
    }
  }
}

tick();

export const useStream = <T>(cf: () => T, deps: any[]) => {
  const [value, setValue] = useState<T>(cf());

  useLayoutEffect(() => {
    const stream: IStream = {
      preview: value,
      callbackChange: setValue,
      calcFunction: cf
    };

    STREAMS.add(stream);

    return () => {
      STREAMS.delete(stream);
    };
  }, deps);

  return value;
};
