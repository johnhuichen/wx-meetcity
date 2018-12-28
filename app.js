import 'wx-promise-pro'
import { getSessionData } from './repository/index'

const globalData = {
  userInfo: null,
  sessionData: null
}

function getUserAndSessionData() {
  wx.showLoading({
    title: '加载中',
    mask: true
  })

  Promise.all([wx.pro.login(), wx.pro.getSetting()])
    .then(([{ code }, { authSetting }]) => {
      if (authSetting['scope.userInfo']) {
        return Promise.all([getSessionData(code), wx.pro.getUserInfo()])
      }

      return Promise.all([
        getSessionData(code),
        Promise.resolve({ userInfo: null })
      ])
    })
    .then(([{ getSessionData: sessionData }, { userInfo }]) => {
      this.globalData.sessionData = sessionData
      this.globalData.userInfo = userInfo
    })
    .finally(wx.hideLoading)
}

function onLaunch() {
  getUserAndSessionData()

  // Demo codes below
  // 展示本地存储能力
  var logs = wx.getStorageSync('logs') || []
  logs.unshift(Date.now())
  wx.setStorageSync('logs', logs)
}

App({
  onLaunch,
  globalData
})
