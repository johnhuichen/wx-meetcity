import { gql } from '../graphql/graphql'
import userActions from '../redux/actions/user/index'

function getSessionData(code) {
  return dispatch => {
    const getSessionDataQuery = `
    query($code: String) {
      getSessionData(code: $code)
    }
  `

    dispatch(userActions.setSessionDataLoading())
    return gql
      .query({ query: getSessionDataQuery, variables: { code } })
      .then(({ getSessionData: sessionData }) =>
        dispatch(userActions.setSessionData(sessionData))
      )
      .catch(() => dispatch(userActions.setSessionDataError()))
  }
}

export { getSessionData }
