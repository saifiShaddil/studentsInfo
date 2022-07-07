import StudentList from "../components/StudentList"

const Students = () => {
  return (
    <div className="container mt-10 flex justify-center mx-10 w-full">
      <div className="flex w-full flex-col">
        <div className="w-full">
          <div className="border-b border-gray-200 shadow">
            <table className="divide-y divide-gray-300 w-full relative">
              <thead className="bg-gray-50 p-4">
                <tr>
                  <th className="sticky top-0 px-6 py-2 text-sm font-bold text-gray-500">ID</th>
                  <th className="sticky top-0 px-6 py-2 text-sm font-bold text-gray-500">Name</th>
                  <th className="sticky top-0 px-6 py-2 text-sm font-bold text-gray-500">Email</th>
                  <th className="sticky top-0 px-6 py-2 text-sm font-bold text-gray-500">
                    Created_at
                  </th>
                  <th className="sticky top-0 px-6 py-2 text-sm font-bold text-gray-500">Edit</th>
                  <th className="sticky top-0 px-6 py-2 text-sm font-bold text-gray-500">Delete</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-300">
                <StudentList />
                <StudentList />
                <StudentList />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Students
