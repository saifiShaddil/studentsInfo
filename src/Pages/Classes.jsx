import React, { useContext, useEffect } from 'react'
import { setActiveLink } from '../store/actions'
import { ContextOne } from '../store/reducer'

const Classes = () => { 
  const { dispatch } = useContext(ContextOne)

useEffect(() => {
  dispatch(setActiveLink("Courses"))
},[])
  return (
    <div>Classes</div>
  )
}

export default Classes