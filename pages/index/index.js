import { connect } from 'wechat-weapp-redux'
const app = getApp()
const { store } = app

function updateData() {
  const {
    user: { userInfo }
  } = store.getState()
  this.setData({ userInfo })
}

function onLoad() {
  this.unsubscribe = store.subscribe(() => this.updateData())
}

function onUnload() {
  this.unsubscribe()
}

function bindViewTap() {
  wx.navigateTo({
    url: '../logs/logs'
  })
}

const mapStateToData = state => ({
  userInfo: state.user.userInfo
})

const pageConfig = {
  data: { motto: 'Hello World' },
  bindViewTap,
  onLoad,
  onUnload,
  updateData
}

Page(connect(mapStateToData)(pageConfig))
