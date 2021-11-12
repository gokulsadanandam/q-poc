import React from "react";
import { AgentStudioState } from "./agent-studio-state";

export interface ProviderStateInterface {
  state: AgentStudioState;
  dispatch: React.Dispatch<{
    type: string;
    payload?: any;
  }>;
}

const StoreContext = React.createContext<ProviderStateInterface>(
  {} as ProviderStateInterface
);

export function useStoreContext() {
  return React.useContext<ProviderStateInterface>(StoreContext);
}

export default StoreContext;
