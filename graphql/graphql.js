import { GraphQL } from 'wxapp-graphql'
import config from '../config/config-loader'

const gql = GraphQL(
  {
    url: config.graphqlUrl,
    header: () => {}
  },
  true
)

const query = options => {
  const app = getApp()

  gql
    .query({
      ...options,
      variables: { sessionData: app.globalData.sessionData }
    })
    .catch(() => {
      // TODO: handle error here
    })
}

export { gql, query }
