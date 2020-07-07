import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

const Main = () => {
  const [user, setUser] = useState('')
  return (
    <div className="h-screen  flex">
      <div className="m-auto bg-teal-400 p-3 border rounded opacity-75 border-4 border-purple-600 ">
        <input
          type="text"
          className="bg-teal-100 py border rounded border-4 border-purple-600 px-1"
          value={user}
          placeholder="Enter repository..."
          onChange={(e) => setUser(e.target.value)}
        />
        <Link
          to={`/${user}`}
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py px-4 border border-gray-400 rounded shadow ml-3 border-4 border-purple-600"
        >
          View
        </Link>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main
