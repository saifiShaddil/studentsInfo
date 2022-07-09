import React, { useContext } from 'react'
import { setActiveLink } from '../store/actions'
import { ContextOne } from '../store/reducer'

const Exams = () => {
    const { dispatch } = useContext(ContextOne)

    useEffect(() => {
      dispatch(setActiveLink("Exam"))
    },[])

    return (
      <div className="flex container mt-10">
        <h2 className="font-medium leading-tight tracking-wide text-3xl">Exams</h2>
      </div>
    )
  }
export default Exams