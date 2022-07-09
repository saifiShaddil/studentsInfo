import React, { useContext, useEffect } from 'react'
import { setActiveLink } from '../store/actions'
import { ContextOne } from '../store/reducer'

const Results = () => {
    const { dispatch } = useContext(ContextOne)

    useEffect(() => {
      dispatch(setActiveLink("Results"))
    },[])

    return (
      <div className="flex container mt-10">
        <h2 className="font-medium leading-tight tracking-wide text-3xl">Results</h2>
      </div>
    )
  }
export default Results