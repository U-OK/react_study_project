import { PLUS, MINUS } from "../actionTypes";

const initialState = {
  count: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case PLUS: {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case MINUS: {
      return {
        ...state,
        count: state.count - 1,
      };
    }
    default:
      return state;
  }
}
