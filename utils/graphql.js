import { GraphQL } from 'wxapp-graphql'

const gql = GraphQL(
  { url: 'http://localhost:9000/graphql', header: () => {} },
  true
)

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

function getUsers() {
  const getUsersQuery = `
    query {
      getUsers {
        userId
        name
      }
    }
  `
  return gql.query({
    query: getUsersQuery
  })
}

export { getSessionData, getUsers }
