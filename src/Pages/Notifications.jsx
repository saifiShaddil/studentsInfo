import React, { useContext, useEffect } from 'react'
import { setActiveLink } from '../store/actions'
import { ContextOne } from '../store/reducer'

const Notifications = () => {
  const { dispatch } = useContext(ContextOne)

  useEffect(() => {
    dispatch(setActiveLink("Notifications"))
  },[])

  return (
    <div className="flex container py-5">
      <h2 className="text-3xl font-bolder text-gray-600 tracking-widest">Notifications</h2>
    </div>
  )
}

export default Notifications