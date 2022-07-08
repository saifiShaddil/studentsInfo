import * as React from "react";

let ContextOne = React.createContext();

export let initialState = {
  count: 10,
  height: 0,
  width: 0,
  studentsList: [],
  currentColor: "#bada55"
};

export let reducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return initialState;
    case "setSize":
      return { ...state, height: action.payload.height, width: action.payload.width };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "set-color":
      return { ...state, currentColor: action.payload };
  }
};

function ContextOneProvider(props) {
  // [A]
  let [state, dispatch] = React.useReducer(reducer, initialState);
  let value = { state, dispatch };


  // [B]
  return (
    <ContextOne.Provider value={value}>{props.children}</ContextOne.Provider>
  );
}

let ContextOneConsumer = ContextOne.Consumer;

// [C]
export { ContextOne, ContextOneProvider, ContextOneConsumer };