import { GraphQL } from 'wxapp-graphql'

const gql = GraphQL(
  { url: 'http://localhost:9000/graphql', header: () => {} },
  true
)

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

export { getUsers }
