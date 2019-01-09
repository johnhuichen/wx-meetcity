import 'wx-promise-pro'
import userActions from '../redux/actions/user/index'
import config from '../config/config-loader'

function getSessionData(code) {
  return dispatch => {
    dispatch(userActions.setSessionDataLoading())
    return wx.pro
      .request({
        url: `${config.graphqlHost}/session-data`,
        data: { code },
        method: 'GET'
      })
      .then(({ data: sessionData }) =>
        dispatch(userActions.setSessionData(sessionData))
      )
      .catch(() => dispatch(userActions.setSessionDataError()))
  }
}

export { getSessionData }
