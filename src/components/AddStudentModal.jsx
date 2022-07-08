import React, { useState, useEffect, useContext } from "react"
import { addNewStudent, updateStudent } from "../store/actions"
import { ContextOne } from "../store/reducer"

const AddStudentModal = ({ setToggle, title, id }) => {
  let { state, dispatch } = useContext(ContextOne)

  var updatedStudentList = []
  if(id && id > 0){
    let found = state.studentsList.filter(student => student.id === id)
    updatedStudentList.push({...found}[0])
  }


  const [formData, setFormData] = useState({
    name: updatedStudentList.length > 0 ? updatedStudentList[0].name : "",
    className: updatedStudentList.length > 0 ? updatedStudentList[0].className : "",
    grade: updatedStudentList.length > 0 ? updatedStudentList[0].grade : "",
    score: updatedStudentList.length > 0 ? updatedStudentList[0].score : "",
    result: updatedStudentList.length > 0 ? updatedStudentList[0].result : "",
  })

  const [error, setError] = useState({
    nameErr: false,
    classErr: false,
    scoreErr: false,
  })

  const { nameErr, classErr, scoreErr } = error
  const { name, className, grade, score, result } = formData

  const getResult = (score) => {
    let results = { result: "", grade: "" }
    if (score > 75) {
      results.result = "Passed"
      results.grade = "Excellent"
      return results
    } else if (score <= 75 && score >= 31) {
      setFormData({ ...formData, result: "Passed", grade: "Good" })
      results.result = "Passed"
      results.grade = "Good"
      return results
    } else {
      results.result = "Failed"
      results.grade = "Poor"
      return results
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })

    if (e.target.name === "name") {
      if (e.target.value === "") {
        setError({ ...error, nameErr: true })
        return
      } else setError({ ...error, nameErr: false })
    }
    if (e.target.name === "className") {
      if (e.target.value === "") {
        setError({ ...error, classErr: true })
        return
      } else if (
        parseInt(e.target.value) < 1 ||
        parseInt(e.target.value) > 12
      ) {
        setError({ ...error, classErr: true })
        return
      } else setError({ ...error, classErr: false })
    }
    if (e.target.name === "score") {
      if (e.target.value === "") {
        setError({ ...error, scoreErr: true })
        return
      } else if (e.target.value < 0 || e.target.value > 100) {
        setError({ ...error, scoreErr: true })
        return
      } else {
        setError({ ...error, scoreErr: false })
      }
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    if (nameErr || classErr || scoreErr) {
      return
    }
    if(title === "Update Student"){
      dispatch(updateStudent( updatedStudentList[0].id, name, parseInt(className), grade, parseInt(score), result))
    } else {
      dispatch(addNewStudent(name, parseInt(className), grade, parseInt(score), result))
    }
    setFormData({ name: "", className: "", grade: "", score: "", result: "" })
    setToggle(false)
  }

  useEffect(() => {
    let { result, grade } = getResult(parseInt(score))
    setFormData({ ...formData, result, grade })
  }, [score])

  return (
    <div
      id="modal"
      tabIndex="1"
      aria-hidden="true"
      className="overflow-y-auto shadow justify-center items-center grid overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full"
      style={{
        backgroundColor: "rgba(0,0,0,0.4)",
      }}
    >
      <div className="h-auto  md:w-[500px] lg:w-[550px] rounded-lg shadow-md">
        <div className="max-w-xl bg-white relative rounded-lg shadow-lg ">
          <button
            onClick={() => setToggle(false)}
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="py-4 px-6 lg:px-8">
            <h3 className="text-xl font-semibold text-gray-600">{title}</h3>
            <form className="space-y-6 mt-4">
              <div className="mb-2">
                <label
                  htmlFor="fullname"
                  className={
                    "block mb-1 tracing-wider uppercase tracking-widest text-sm font-medium" +
                    (nameErr ? " text-red-500" : " text-gray-900")
                  }
                >
                  Student Name*
                </label>
                <input
                  value={name}
                  onChange={(e) => handleChange(e)}
                  name="name"
                  type="text"
                  id="fullname"
                  aria-describedby="helper-text-explanation"
                  className={`bg-gray-50 border text-sm rounded-lg block w-full p-2.5 ${
                    nameErr
                      ? "border-red-500 outline-red-500 text-red-900"
                      : "border-gray-300 text-gray-900"
                  }`}
                />
                <p
                  id="helper-text-explanation"
                  className="mt-1 text-xs text-red-500"
                  style={{ height: "0.25em" }}
                >
                  {nameErr && "Student Name can not be blank."}
                </p>
              </div>

              <div className="mt-3">
                <label
                  htmlFor="className"
                  className={
                    "block mb-1 tracking-widest text-sm font-medium" +
                    (classErr ? " text-red-500" : " text-gray-900")
                  }
                >
                  CLASS*
                </label>
                <input
                  value={className}
                  name="className"
                  type="text"
                  id="className"
                  onChange={(e) => handleChange(e)}
                  aria-describedby="helper-text-explanation"
                  className={`bg-gray-50 border text-sm rounded-lg focus:ring-blue-500 focus:border-red-500 block w-full p-2.5 ${
                    classErr
                      ? "border-red-500 outline-red-500 text-red-900"
                      : "border-gray-300 text-gray-900"
                  }`}
                />
                <p
                  id="helper-text-explanation"
                  className={
                    "mt-1 text-xs" +
                    (classErr ? " text-red-500" : " text-gray-500")
                  }
                >
                  {classErr
                    ? "Error: Please input values between 1 & 12"
                    : "Please input values between 1 & 12"}
                </p>
              </div>

              <div className="mt-3">
                <label
                  htmlFor="score"
                  className={
                    "block mb-1 tracking-widest uppercase text-sm font-medium" +
                    (scoreErr ? " text-red-500" : " text-gray-900")
                  }
                >
                  Score*
                </label>
                <input
                  value={score}
                  onChange={(e) => handleChange(e)}
                  name="score"
                  type="text"
                  id="score"
                  aria-describedby="score-text-explanation"
                  className={`bg-gray-50 border  text-sm rounded-lg focus:ring-blue-500 focus:border-red-500 block w-full p-2.5 ${
                    scoreErr
                      ? "border-red-500 outline-red-500 text-red-900"
                      : "border-gray-300 text-gray-900"
                  }`}
                />
                <p
                  id="score-text-explanation"
                  className={`mt-1 text-xs text-${
                    scoreErr ? "red" : "gray"
                  }-500`}
                >
                  {scoreErr
                    ? "Error: Please input values between 1 & 100"
                    : "Please input values between 1 & 100"}
                </p>
              </div>
              <div className="mt-3">
                <label
                  htmlFor="result"
                  className="block mb-1 text-sm font-semibold tracking-wider text-gray-900"
                >
                  Result
                </label>
                <button
                  className={`px-4 py-1 text-xs tracking-wide font-semibold text-gray-100 rounded-full + ${
                    result === "Passed" ? "bg-green-400" : "bg-red-500"
                  }`}
                >
                  {result !== "" ? result : "---"}
                </button>
              </div>
              <div>
                <label
                  htmlFor="result"
                  className="block mb-0 text-md font-semibold tracking-wider text-gray-900"
                >
                  Grade
                </label>
                <button
                  className={`py-1 text-md tracking-wider font-semibold rounded-full + ${
                    grade === "Excellent"
                      ? "text-green-600"
                      : grade === "Good"
                      ? "text-blue-600"
                      : "text-red-500"
                  }`}
                >
                  {grade !== "" ? grade : "---"}
                </button>
              </div>
              <hr  className="mt-2 mb-2"/>
              <div className="flex w-full mt-0 justify-end items-center">
                <button
                  type="button"
                  onClick={() => setToggle(false)}
                  className="text-blue-400 mr-3 bg-white border-blue-400 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border text-md font-medium px-5 py-2.5 focus:z-10 "
                >
                  CANCEL
                </button>
                <button
                  type="button"
                  onClick={(e) => handleSubmit(e)}
                  className="text-white bg-blue-400 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-md inline-flex items-center px-5 py-2.5 text-center mr-2"
                >
                  CONFIRM
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddStudentModal
