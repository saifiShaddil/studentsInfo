import React, { useContext } from 'react'
import { setActiveLink } from '../store/actions'
import { ContextOne } from '../store/reducer'

const Exams = () => {
    const { dispatch } = useContext(ContextOne)

    useEffect(() => {
      dispatch(setActiveLink("Exam"))
    },[])

    return (
      <div className="flex container py-5">
        <h2 className="text-3xl font-bolder text-gray-600 tracking-widest">Exams</h2>
      </div>
    )
  }
export default Exams