import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = (props) => {
  const user = useSelector((s) => s.data.user)
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-800 p-6 opacity-75">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img src={`${user.avatar_url}`} className="w-20 h-20 rounded" alt="" />
        <h4 className="uppercase text-4xl ml-5">{`${user.login}`}</h4>
      </div>
      <div>
        <Link
          to="/"
          className="inline-block mr-6 text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
        >
          Main
        </Link>
        {props.repositoryName && (
          <Link
            to={`/${props.userName}`}
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            Repositories
          </Link>
        )}
      </div>
    </nav>
  )
}
export default Header
