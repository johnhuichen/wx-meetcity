const app = getApp()

const data = {
  motto: 'Hello World',
  userInfo: {},
  hasUserInfo: false,
  canIUse: wx.canIUse('button.open-type.getUserInfo')
}

function onLoad() {
  if (app.globalData.userInfo) {
    this.setData({
      userInfo: app.globalData.userInfo,
      hasUserInfo: true
    })
  } else if (this.data.canIUse) {
    // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    // 所以此处加入 callback 以防止这种情况
    app.userInfoReadyCallback = userInfo => {
      this.setData({
        userInfo,
        hasUserInfo: true
      })
    }
  } else {
    // 在没有 open-type=getUserInfo 版本的兼容处理
    wx.getUserInfo({
      success: res => {
        app.globalData.userInfo = res.userInfo
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  }
}

function bindViewTap() {
  wx.navigateTo({
    url: '../logs/logs'
  })
}

function getUserInfo(e) {
  // eslint-disable-next-line
  console.log(e)
  app.globalData.userInfo = e.detail.userInfo
  this.setData({
    userInfo: e.detail.userInfo,
    hasUserInfo: true
  })
}

Page({
  data,
  bindViewTap,
  onLoad,
  getUserInfo
})
