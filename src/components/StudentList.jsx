const StudentList = () => {
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
          <a
            href="#"
            className="px-4 py-1 text-sm text-blue-600 bg-blue-200 rounded-full"
          >
            Edit
          </a>
        </td>
        <td className="px-6 py-6">
          <a
            href="#"
            className="px-4 py-1 text-sm text-red-400 bg-red-200 rounded-full"
          >
            Delete
          </a>
        </td>
      </tr>
    
    </>
  )
}

export default StudentList
