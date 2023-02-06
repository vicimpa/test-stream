import { useLayoutEffect, useState } from "react";

export const makeSharedState = <T>(initialState: T | (() => T)) => {
  const subscribes = new Set<(v: T) => any>();
  let state = initialState instanceof Function ? initialState() : initialState;

  const setSharedState = (newState: T | ((v: T) => T)) => {
    state = newState instanceof Function ? newState(state) : newState;

    for (const sub of subscribes) {
      sub(state);
    }
  };

  const useSharedState = () => {
    const [localState, setLocalState] = useState<T>(state);

    useLayoutEffect(() => {
      subscribes.add(setLocalState);

      return () => {
        subscribes.delete(setLocalState);
      };
    }, []);

    return [localState, setSharedState] as [
      typeof localState,
      typeof setSharedState
    ];
  };

  return {
    get state() { return state; },
    set state(v) { setSharedState(v); },
    useState() { return useSharedState(); }
  };
};