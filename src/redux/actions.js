import { PLUS, MINUS } from "./actionTypes";

export function increment() {
  return {
    type: PLUS,
  };
}

export function decrement() {
  return {
    type: MINUS,
  };
}
