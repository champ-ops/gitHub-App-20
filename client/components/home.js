import React, { useEffect } from 'react'
import { Route, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import RepoList from './repo-list'
import ReadMe from './readme'
import Header from './header'
import { user, repoList, readme } from '../redux/reducers/data'

const Home = () => {
  const dispatch = useDispatch()
  const { userName, repositoryName } = useParams()
  useEffect(() => {
    if (typeof repositoryName !== 'undefined') {
      dispatch(readme(userName, repositoryName))
    }
  }, [dispatch, repositoryName, userName])

  useEffect(() => {
    dispatch(user(userName))
    dispatch(repoList(userName))
  }, [dispatch, userName])
  return (
    <div>
      <Header userName={userName} repositoryName={repositoryName} user={user} />
      <div className="container mx-auto py-20">
        <Route
          exact
          path="/:userName/:repositoryName"
          component={() => <ReadMe readme={readme} />}
        />
        <Route
          exact
          path="/:userName"
          component={() => <RepoList repoList={repoList} userName={userName} />}
        />
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home
