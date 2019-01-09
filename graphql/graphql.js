import { GraphQL } from 'wxapp-graphql'
import config from '../config/config-loader'

const gql = GraphQL(
  {
    url: `${config.graphqlHost}/graphql`,
    header: () => {}
  },
  true
)

const query = options => {
  const app = getApp()
  const {
    user: { sessionData }
  } = app.store.getState()

  gql
    .query({
      ...options,
      variables: { sessionData }
    })
    .catch(() => {
      // TODO: handle error here
    })
}

export { gql, query }
