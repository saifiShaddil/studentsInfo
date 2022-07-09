import React, { useContext, useEffect } from "react"
import { setActiveLink } from "../store/actions"
import { ContextOne } from "../store/reducer"

const Classes = () => {
  const { dispatch } = useContext(ContextOne)

  useEffect(() => {
    dispatch(setActiveLink("Classes"))
  }, [])
  return (
    <div className="flex container py-5">
      <h2 className="text-3xl font-bolder text-gray-600 tracking-widest">
        Classes
      </h2>
    </div>
  )
}

export default Classes
