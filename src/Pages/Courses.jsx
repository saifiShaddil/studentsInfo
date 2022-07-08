import React, { useContext, useEffect } from 'react'
import { setActiveLink } from '../store/actions'
import { ContextOne } from '../store/reducer'

const Courses = () => {

  const { dispatch } = useContext(ContextOne)

  useEffect(() => {
    dispatch(setActiveLink("Courses"))
  },[])
  return (
    <div>Courses</div>
  )
}

export default Courses