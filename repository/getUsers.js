import { query } from '../graphql/graphql'

function getUsers() {
  return () => {
    const getUsersQuery = `
    query {
      getUsers {
        userId
        name
      }
    }
  `
    return query({
      query: getUsersQuery
    })
  }
}

export { getUsers }
