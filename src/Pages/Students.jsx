import { useState } from "react"
import { AddStudentModal, DeleteStudentModal } from "../components"
import StudentList from "../components/StudentList"
import { AiOutlinePlus } from "react-icons/ai"

const Students = () => {
  const [toggle, setToggle] = useState(false)
  const [toggleDelete, setToggleDelete] = useState(false)
  const [formTitle, setFormTitle] = useState("Add Student")

  const updatedStudentList = (id, type) => {
    if (type === "update") {
      setFormTitle("Update Student")
    }
    setToggle(!toggle)
  }
  const deletedStudentList = (id) => {
    setToggleDelete(true)
  }
  return (
    <div className="flex flex-col relative" style={{ height: "99vh" }}>
      {toggle && <AddStudentModal setToggle={setToggle} title={formTitle} />}
      {toggleDelete && <DeleteStudentModal setToggle={setToggleDelete} />}
      <div className="flex flex-row mt-10">
        <h2 className="font-medium leading-tight text-3xl mt-0 mb-2 flex-1">
          Students
        </h2>
        <button
          type="button"
          onClick={() => updatedStudentList("id", "add")}
          className="uppercase text-white bg-blue-500 hover:bg-blue-700 transition ease-in-out focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-semibold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
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
      <div className="flex justify-center border mt-10 flex-1 rounded-lg">
        <div className="flex w-full  flex-col">
          <div className="w-full">
            <div className="border-b border-gray-200 shadow">
              <table className="divide-y divide-gray-300 w-full relative">
                <thead className="bg-gray-50 p-4">
                  <tr>
                    <th className="sticky top-0 px-6 py-2 text-sm font-bold text-gray-500">
                      No.
                    </th>
                    <th className="sticky top-0 px-6 py-2 text-sm font-bold text-gray-500">
                      Students Name
                    </th>
                    <th className="sticky top-0 px-6 py-2 text-sm font-bold text-gray-500">
                      Class
                    </th>
                    <th className="sticky top-0 px-6 py-2 text-sm font-bold text-gray-500">
                      Result
                    </th>
                    <th className="sticky top-0 px-6 py-2 text-sm font-bold text-gray-500">
                      Score
                    </th>
                    <th className="sticky top-0 px-6 py-2 text-sm font-bold text-gray-500">
                      Grade
                    </th>
                    <th className="sticky top-0 px-6 py-2 text-sm font-bold text-gray-500"></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-300">
                  <StudentList
                    updatedStudentList={updatedStudentList}
                    deletedStudentList={deletedStudentList}
                  />
                  <StudentList
                    updatedStudentList={updatedStudentList}
                    deletedStudentList={deletedStudentList}
                  />
                  <StudentList
                    updatedStudentList={updatedStudentList}
                    deletedStudentList={deletedStudentList}
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-end">
        <p className="text-sm font-medium text-gray-600">Showing 7 out of 7</p>
      </div>
    </div>
  )
}

export default Students
