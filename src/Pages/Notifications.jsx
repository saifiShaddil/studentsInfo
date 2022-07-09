import React, { useContext, useEffect } from 'react'
import { setActiveLink } from '../store/actions'
import { ContextOne } from '../store/reducer'

const Notifications = () => {
  const { dispatch } = useContext(ContextOne)

  useEffect(() => {
    dispatch(setActiveLink("Notifications"))
  },[])

  return (
    <div className="flex container mt-10">
      <h2 className="font-medium leading-tight tracking-wide text-3xl">Notifications</h2>
    </div>
  )
}

export default Notifications