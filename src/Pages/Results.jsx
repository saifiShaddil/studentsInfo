import React, { useContext } from 'react'
import { setActiveLink } from '../store/actions'
import { ContextOne } from '../store/reducer'

const Results = () => {
    const { dispatch } = useContext(ContextOne)

    useEffect(() => {
      dispatch(setActiveLink("Results"))
    },[])

    return (
      <div className="flex container py-5">
        <h2 className="text-3xl font-bolder text-gray-600 tracking-widest">Results</h2>
      </div>
    )
  }
export default Results