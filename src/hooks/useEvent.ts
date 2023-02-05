import { useMemo } from "react";

export const useEvent = <F extends (...args: any) => any>(cb: F) => {
  const memoFunc = useMemo(() => (
    (...args) => {
      return memoFunc.cb(...args);
    }
  ) as F, []) as F & { cb: F; };

  memoFunc.cb = cb;

  return memoFunc as F;
};