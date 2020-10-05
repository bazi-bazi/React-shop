import { INCREASE, DECREASE } from "./actioncreator";

let initialstate = 0;

export const Reducer = (state = initialstate, action) => {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;

    default:
      return state;
  }
};
