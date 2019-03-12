import { connect } from 'wechat-weapp-redux'
import { bindActionCreators } from '../../redux/index'
import { getUsers } from '../../repository/index'
const app = getApp()
const { store } = app

function updateData() {
  const { getInitialDataDone } = this.data
  const {
    user: { userInfo, sessionData }
  } = store.getState()

  if (sessionData && !getInitialDataDone) {
    this.dispatchGetUsers()
    this.setData({ getInitialDataDone: true })
  }

  this.setData({ userInfo })
}

function onLoad() {
  this.unsubscribe = store.subscribe(() => this.updateData())
}

function onUnload() {
  this.unsubscribe()
}

function gotoCreateEvent() {
  wx.navigateTo({
    url: '../createEvent/createEvent'
  })
}

function gotoMyEvents() {
  wx.navigateTo({
    url: '../myEvents/myEvents'
  })
}

function gotoMapView() {
  wx.navigateTo({
    url: '../mapView/mapView'
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
  data: {
    getInitialDataDone: false,
    showMenuItems: false
  },
  onLoad,
  onUnload,
  updateData,
  gotoCreateEvent,
  gotoMyEvents,
  gotoMapView
}

Page(connect(mapStateToData, mapDispatchToPage)(pageConfig))
