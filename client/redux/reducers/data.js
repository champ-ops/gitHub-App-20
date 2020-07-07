import axios from 'axios'

const initialState = {
  user: {},
  repoList: [],
  readme: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return { ...state, user: { ...action.user } }
    case 'REPO_LIST':
      return { ...state, repoList: [...action.repoList] }
    case 'READ_ME':
      return { ...state, readme: action.readme }
    default:
      return state
  }
}

export function user(userName) {
  return (dispatch) => {
    axios(`https://api.github.com/users/${userName}`).then(({ data }) => {
      dispatch({ type: 'ADD_USER', user: data })
    })
  }
}

export function repoList(userName) {
  return (dispatch) => {
    axios(`https://api.github.com/users/${userName}/repos`).then(({ data }) => {
      dispatch({ type: 'REPO_LIST', repoList: data })
    })
  }
}

export function readme(userName, repositoryName) {
  return (dispatch) => {
    axios(
      `https://api.github.com/repos/${userName}/${repositoryName}/readme`,
      {
        headers: { Accept: 'application/vnd.github.VERSION.raw' }
      },
      []
    ).then(({ data }) => {
      dispatch({ type: 'READ_ME', readme: data })
    })
  }
}
