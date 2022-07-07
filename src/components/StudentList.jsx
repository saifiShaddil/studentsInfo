import { useState } from "react"

const StudentList = ({ updatedStudentList, deletedStudentList }) => {

  return (
    <>
      <tr className="whitespace-nowrap text-center">
        <td className="px-6 py-6 text-sm text-gray-500">1</td>
        <td className="px-6 py-6">
          <div className="text-sm  text-gray-900">Jon doe</div>
        </td>
        <td className="px-6 py-6">
          <div className="text-sm text-gray-500">jhondoe@example.com</div>
        </td>
        <td className="px-6 py-6 text-sm text-gray-500">2021-1-12</td>
        <td className="px-6 py-6">
          <button
          onClick={() => updatedStudentList("id is here")}
            className="px-4 py-1 text-sm text-green-200 bg-green-700 rounded-full"
          >
            Edit
          </button>
        </td>
        <td className="px-6 py-6">
          <button
          onClick={deletedStudentList}
            className="px-4 py-1 text-sm text-red-200 bg-red-700 rounded-full"
          >
            Delete
          </button>
        </td>
      </tr>
    
    </>
  )
}

export default StudentList
