import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './styles.scss'
import '../assets/scss/main.scss'

const RepoList = (props) => {
  const repositoryList = useSelector((s) => s.data.repoList)
  const [search, setSearch] = useState('')
  const filteredList = repositoryList.filter((el) => el.name.includes(search))
  return (
    <div>
      <input
        type="text"
        placeholder="search..."
        className="border-solid border-green-300 border-2 rounded-lg search"
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredList.map((el) => (
        <div key={el.name} className=" mb-5 text-lg rounded-lg border-2 border-green-300 px-3 py-1 ">
          <Link
            className=" style d-none d-lg-block mt-6 mr-3 Popover top-0 right-0 box-shadow-medium col-3 text-white"
            to={`/${props.userName}/${el.name}`}
          >
            {el.name}
          </Link>
        </div>
      ))}
    </div>
  )
}

RepoList.propTypes = {}

export default RepoList
