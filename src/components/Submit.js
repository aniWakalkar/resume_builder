import React from 'react'
import {useSelector} from 'react-redux';

function Submit() {
    const isDisplay = useSelector((state) => state.isDisplay)
  return (
    <div className={isDisplay === 5 ? "flex items-center justify-evenly p-8" : "hidden items-center justify-center p-12"}>
        Submit
    </div>
  )
}

export default Submit