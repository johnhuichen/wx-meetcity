import { connect } from 'wechat-weapp-redux'
import { bindActionCreators } from '../../redux/index'
import { getUsers } from '../../repository/index'
const app = getApp()
const { store } = app

function updateData() {
  const { getUsersDone } = this.data
  const {
    user: { userInfo, sessionData }
  } = store.getState()

  if (sessionData) {
    if (!getUsersDone) {
      this.dispatchGetUsers()
      this.setData({ getUsersDone: true })
    }
  }

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

const mapDispatchToPage = dispatch =>
  bindActionCreators(
    {
      dispatchGetUsers: getUsers
    },
    dispatch
  )

const pageConfig = {
  data: { motto: 'Hello World', getUsersDone: false },
  bindViewTap,
  onLoad,
  onUnload,
  updateData
}

Page(connect(mapStateToData, mapDispatchToPage)(pageConfig))
