import { Provider } from 'wechat-weapp-redux'
import 'wx-promise-pro'
import { store } from './redux/index'
import { getSessionData, getUserInfo } from './repository/index'

function getUserAndSessionData(app) {
  const {
    store: { dispatch }
  } = app

  wx.showLoading({
    title: '加载中',
    mask: true
  })

  Promise.all([wx.pro.login(), wx.pro.getSetting()])
    .then(([{ code }, { authSetting }]) => {
      if (authSetting['scope.userInfo']) {
        return Promise.all([
          getSessionData(code)(dispatch),
          getUserInfo()(dispatch)
        ])
      }

      // TODO: handle user login error
      throw new Error('user is not logged in')
    })
    .finally(wx.hideLoading)
}

function onLaunch() {
  getUserAndSessionData(this)
}

App(
  Provider(store)({
    onLaunch
  })
)
