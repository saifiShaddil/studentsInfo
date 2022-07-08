import { useContext, useEffect, useState } from "react"
import { AddStudentModal, DeleteStudentModal } from "../components"
import StudentList from "../components/StudentList"
import { AiOutlinePlus } from "react-icons/ai"
import { setActiveLink } from "../store/actions"
import { ContextOne } from "../store/reducer"

const Students = () => {
  const [toggle, setToggle] = useState(false)
  const [toggleDelete, setToggleDelete] = useState(false)
  const [formTitle, setFormTitle] = useState("Add Student")

  const [updateId, setUpdateId] = useState(0)

  const { dispatch, state } = useContext(ContextOne)

  const updatedStudentList = (id, type) => {
    setUpdateId(id)
    if (type === "update") {
      setFormTitle("Update Student")
    } else {
      setFormTitle("ADD STUDENT")
    }
    setToggle(!toggle)
  }
  const deletedStudentList = (id) => {
    setUpdateId(id)
    setToggleDelete(true)
  }

  useEffect(() => {
    dispatch(setActiveLink("Students"))
  }, [])
  return (
    <div className="flex flex-col relative" style={{ height: "99vh" }}>
      {toggle && <AddStudentModal setToggle={setToggle} title={formTitle} id={updateId} />}
      {toggleDelete && <DeleteStudentModal setToggle={setToggleDelete} id={updateId} />}
      <div className="flex flex-row mt-10">
        <h2 className="font-medium leading-tight tracking-wide text-3xl mt-0 mb-2 flex-1">
          Students
        </h2>
        <button
          type="button"
          onClick={() => updatedStudentList("id", "add")}
          className="uppercase text-white bg-[#2CA4D8] hover:bg-blue-700 transition ease-in-out focus:ring-4 focus:outline-none focus:ring-[#2CA4D8]/50 font-semibold rounded-lg text-sm px-7 py-3 text-center inline-flex items-center mr-2 mb-2"
        >
          <AiOutlinePlus
            className="w-4 h-4 mr-2 -ml-1 font-bolder"
            aria-hidden="true"
            focusable="false"
            role="img"
          />
          Add
        </button>
      </div>
      <div className="flex justify-center mt-8 flex-1 max-h-[77%]">
        <div className="flex w-full flex-col h-full overflow-y-auto border rounded-xl">
          <div className="w-full">
            <div className="border-b border-gray-200 shadow">
              <table className="divide-y divide-gray-300 w-full relative">
                <thead className="bg-gray-50 p-4">
                  <tr className="sticky top-0 py-3 bg-gray-200 z-10">
                    <th className=" px-6 py-2 text-md font-bold tracking-wide text-gray-500">
                      No.
                    </th>
                    <th className=" px-6 py-2 text-md font-bold tracking-wide text-gray-500">
                      Students Name
                    </th>
                    <th className=" px-6 py-2 text-md font-bold tracking-wide text-gray-500">
                      Class
                    </th>
                    <th className=" px-6 py-2 text-md font-bold tracking-wide text-gray-500">
                      Result
                    </th>
                    <th className=" px-6 py-2 text-md font-bold tracking-wide text-gray-500">
                      Score
                    </th>
                    <th className=" px-6 py-2 text-md font-bold tracking-wide text-gray-500">
                      Grade
                    </th>
                    <th className=" px-6 py-2 text-md font-bold tracking-wide text-gray-500"></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-300">
                  {state.studentsList && state.studentsList.map((item, index) => {
                    return (
                      <StudentList key={index}
                        index={index + 1}
                        updatedStudentList={updatedStudentList}
                        deletedStudentList={deletedStudentList}
                        item={item}
                      />
                    )
                  })}
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-end h-[50px]">
        <p className="text-sm font-medium text-gray-600">Showing {state.studentsList.length} out of {state.studentsList.length}</p>
      </div>
    </div>
  )
}

export default Students
