import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userid} = useParams()
  return (
    <div className=' bg-emerald-500 p-4 rounded-lg text-black font-medium text-center'>User:{userid}</div>
  )
}

export default User