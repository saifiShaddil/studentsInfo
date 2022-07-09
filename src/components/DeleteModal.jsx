import React, { useContext, useEffect, useState } from "react"
import { removeStudent } from "../store/actions"
import { ContextOne } from "../store/reducer"

const DeleteModal = ({ setToggle, id }) => {

  const { state, dispatch } = useContext(ContextOne)

  const [ data, setData ] = useState({ name: '', className: ""})

  const deleteStudentId = (e) => {
    e.preventDefault()
    dispatch(removeStudent(id))
    setTimeout(()=> {
      setToggle(false)
    },200)
  }

  useEffect(() =>{
    let res = state.studentsList.filter(students => students.id === id)
    setData({...data, name: res[0].name, className: res[0].className})
  },[id])
  return (
    <div
      id="popup-modal"
      tabindex="-1"
      className="overflow-y-auto shadow justify-center items-center grid overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full"
      style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
    >
      <div className="relative p-4 w-full max-w-lg h-full md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            onClick={() => setToggle(false)}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="p-6">
            <h3 className="mb-5 text-lg font-bold text-gray-500">
              Remove Student
            </h3>
            <hr className="my-2 font-semibold text-xs bg-gray-300" />
            <div className="flex flex-col my-5 space-y-2">
              <h4 className="mb-2 text-lg font-bold text-gray-500">
                Are you sure you want to remove the current student from the
                list?
              </h4>
              <div>
                <h4 className="font-medium text-lg text-light">STUDENT NAME</h4>
                <p className="text-gray-500 tracking-wide text-md font-medium">{data?.name}</p>
              </div>
              <div>
                <h4 className="font-medium text-light text-lg tracking-wide">CLASS</h4>
                <p className="text-gray-500 tracking-wide text-md">{data?.className}</p>
              </div>
            </div>
            <hr className="my-1 font-semibold text-xs bg-gray-300" />
            <div className="flex flex-1 mt-4 items-center justify-end">
              <button
                type="button"
                onClick={() => setToggle(false)}
                className="text-blue-400 shadow mr-3 bg-white border-blue-400 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border text-md font-medium px-5 py-2.5 focus:z-10 "
              >
                CANCEL
              </button>
              <button
                type="button"
                onClick={(e) => deleteStudentId(e)}
                className=" shadow text-white bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-md inline-flex items-center px-5 py-2.5 text-center mr-2"
              >
                CONFIRM
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal
