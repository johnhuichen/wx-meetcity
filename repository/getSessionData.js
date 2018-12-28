import { gql } from '../graphql/graphql'

function getSessionData(code) {
  const getSessionDataQuery = `
    query($code: String) {
      getSessionData(code: $code)
    }
  `

  return gql.query({
    query: getSessionDataQuery,
    variables: { code }
  })
}

export { getSessionData }
