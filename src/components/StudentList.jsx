import { useRef } from "react"
import { AiOutlineDelete } from "react-icons/ai"
import { FiEdit2 } from "react-icons/fi"

const StudentList = ({
  updatedStudentList,
  deletedStudentList,
  item,
  index,
}) => {
  const lastCol = useRef(null)
  const showEditIcon = () => {
    lastCol.current.classList.remove("hidden")
    lastCol.current.classList.add("flex")
    lastCol.current.firstChild.classList.add("text-blue-600")
    lastCol.current.lastChild.classList.add("text-red-600")
  }
  const hideEditIcon = () => {
    lastCol.current.classList.remove("flex")
    lastCol.current.classList.add("hidden")
    lastCol.current.firstChild.classList.remove("text-blue-600")
    lastCol.current.lastChild.classList.remove("text-red-600")
  }
  return (
    <>
      <tr
        className="whitespace-nowrap text-center font-semibold tracing-wider hover:bg-gray-200"
        onMouseEnter={showEditIcon}
        onMouseLeave={hideEditIcon}
      >
        <td className="px-6 py-3 text-sm text-gray-500">{index}</td>
        <td className="px-6 py-3">
          <div className="text-sm  text-gray-900">{item.name}</div>
        </td>
        <td className="px-6 py-3">
          <div className="text-sm text-gray-500">{item.className}th</div>
        </td>
        <td className="px-6 py-3 text-sm text-gray-500">
          <button className={`px-4 py-1 text-xs font-semibold text-gray-100rounded-full + ${item.result === "Passed" ? "bg-green-400" : "bg-red-500"}`}>
            {item.result}
          </button>
        </td>
        <td className="px-6 py-3">{item.score}/100</td>

        <td
          className={`px-6 py-3 font-semibold + ${
            item.grade === "Excellent"
              ? "text-green-600"
              : item.grade === "Good"
              ? "text-blue-600"
              : "text-red-500"
          }`}
        >
          {item.grade}
        </td>
        <td className="px-6 py-3 max-w-[80px] min-w-[80px] overflow-hidden">
          <div ref={lastCol} className="hidden justify-center ">
            <FiEdit2
              onClick={() => updatedStudentList(item.id, "update")}
              className="cursor-pointer"
            />
            <AiOutlineDelete
              onClick={() => deletedStudentList(item.id)}
              className="ml-5 cursor-pointer"
            />
          </div>
        </td>
      </tr>
    </>
  )
}

export default StudentList
