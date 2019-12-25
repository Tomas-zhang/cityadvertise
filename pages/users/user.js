// pages/users/user.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    phone: '',
    isMem: app.globalData.isMember,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    myPoints: 0,
    money: 0
  },
  //事件处理函数
  nameInput: function(e){
    let that = this;
    that.setData({
      name: e.detail.value
    })
  },
  phoneInput: function(e){
    let that = this;
    that.setData({
      phone: e.detail.value
    })
  },
  bindViewTap: function() {
    
    
    // wx.navigateTo({
    //   url: '../logs/logs'
    // })
  },
  userLogin: function(){

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      console.log('user.js-stage1')
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      console.log('user.js-stage2')
      app.userInfoReadyCallback = res => {
        console.log('stage2:'+res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      console.log('user.js-stage3')
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
  },
  getUserInfo: function (e) {
    console.log(e)
    let that = this
    let name = that.data.name
    let phone = that.data.phone
    if (name === '') {
      wx.showModal({
        title: '警告',
        content: '请输入姓名',
        showCancel: false,
        confirmText: '确定',
        confirmColor: '#000000'
      })
      return false
    }
    if (phone === '') {
      wx.showModal({
        title: '警告',
        content: '请输入手机号',
        showCancel: false,
        confirmText: '确认',
        confirmColor: '#000'
      })
      return false
    }
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})