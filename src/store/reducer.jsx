import * as React from "react"

let ContextOne = React.createContext()

export let initialState = {
  studentsList: [{
    id: 1,
    name: "Joe Doe",
    className: "10",
    score: 70,
    grade: "Good",
    result: "Passed"
  }],
  activeLink: "",
}

export let reducer = (state, action) => {

  switch (action.type) {
    case "ADD_NEW_STUDENT":
      return { ...state, studentsList: [...state.studentsList, action.payload] }
    case "REMOVE_STUDENT":
      let index = state.studentsList.findIndex(list => list.id === action.payload)
      if (index !== -1) {
        let newList = [...state.studentsList]
        newList.splice(index, 1)
        return { ...state, studentsList: newList }
      }
    case "UPDATE_STUDENT":
      let newArr = [...state.studentsList]
      let ind = -1
      let data = state.studentsList.filter((x, index) => {
        {
          ind = index
          return x.id === action.payload.id
        }
      })
      if (ind > -1) {
        newArr[ind] = action.payload
        return {
          ...state, 
          studentsList : newArr
        }
      }
    case "SET_ACTIVE_LINK":
      return { ...state, activeLink: action.payload }
    default:
      return state
  }
}

function ContextOneProvider(props) {
  // [A]
  let [state, dispatch] = React.useReducer(reducer, initialState)
  let value = { state, dispatch }

  // [B]
  return (
    <ContextOne.Provider value={value}>{props.children}</ContextOne.Provider>
  )
}

let ContextOneConsumer = ContextOne.Consumer

// [C]
export { ContextOne, ContextOneProvider, ContextOneConsumer }
