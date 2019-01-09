import userActions from '../redux/actions/user/index'

function getUserInfo() {
  return dispatch => {
    dispatch(userActions.setUserInfoLoading())
    return wx.pro
      .getUserInfo()
      .then(({ userInfo }) => dispatch(userActions.setUserInfo(userInfo)))
      .catch(() => dispatch(userActions.setUserInfoError()))
  }
}

export { getUserInfo }
