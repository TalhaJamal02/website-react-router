import React, { useEffect, useState } from 'react'

export default function Github() {

  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://api.github.com/users/TalhaJamal02')
      .then((res) => res.json())
      .then(data => {
        setData(data)
      })
  })

  return (
    <div className="flex items-center m-2 shadow-2xl mt-8 mb-8  ">
      <img
        src={data.avatar_url}
        alt="image-github"
        width={200}
        className="rounded-xl mr-4"
      />
      <div>
        <h1 className="text-3xl font-bold mb-2 px-3">Github</h1>
        <h3 className="font-semibold px-3">Name: {data.name}</h3>
        <h3 className="font-semibold px-3">Followers: {data.followers}</h3>
      </div>
    </div>

  )
}
