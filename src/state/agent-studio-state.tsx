export enum Screen {
  INPUT_SCREEN = "inputScreen",
  SIMULATOR_SCREEN = "simulatorScreen"
}

export interface Notification {
  message?: string;
  open: boolean;
}

export interface AgentStudioState {
  screen: Screen;
  notification: Notification;
}

export const initialState: AgentStudioState = {
  screen: Screen.INPUT_SCREEN,
  notification: {
    message: undefined,
    open: false
  }
};

export default function reducer(
  state: AgentStudioState,
  action: { type: string; payload?: any }
) {
  switch (action.type) {
    case "test":
      return state;
    default:
      throw new Error();
  }
}
