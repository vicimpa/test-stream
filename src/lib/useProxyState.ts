import { useState } from "react";
import { proxy, useSnapshot } from "valtio";

export const useProxyState = <T extends {}>(initialState: T) => {
  const [state] = useState(() => proxy(initialState));
  return (useSnapshot(state), state);
};