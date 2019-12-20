// pages/location/map.js
// var QQMmapWX = require("../../utils/qqmap-wx-jssdk.js");
// var qqmapsdk;
Page({
  data: {
    // city: "龙岩市",
    // longitude: 117.011238,
    // latitude: 25.122713,
    // markers: [{
    //   id: 0,
    //   // iconPath: "/images/local.png",
    //   latitude: 25.122713,
    //   longitude: 117.011238,
    //   width: 40,
    //   height: 40
    // }]
  },
  onLoad: function (option) {
    // let that = this;
    let _longitude = 117.011238;
    let _latitude = 25.122713;
    wx.openLocation({
      latitude: _latitude,
      longitude: _longitude,
          scale: 18
    })
    // qqmapsdk = new QQMmapWX({
    //   key: "XE5BZ-GOBWW-N3FRR-RFOEO-ANQRV-2AF7A"
    // });
    // wx.openLocation({
    //   latitude: 25.122713,
    //   longitude: 117.011238,
    //   scale: 18
    // })
    // qqmapsdk.geocoder()
    // wx.showLoading({
    //   title: "定位中",
    //   mask: true
    // })
    // wx.getLocation({
    //   type: "gcj02",
    //   altitude: true,
    //   success: function(res) {
        // wx.openLocation({
        //   latitude: _latitude,
        //   longitude: _longitude,
        //   scale: 18
        // })
      // },
      // fail: function () {
      //   wx.showToast({
      //     title: "定位失败",
      //     icon: "none"
      //   })
      // },
      // complete: function () {
      //   //隐藏定位中信息进度
      //   wx.hideLoading()
      // }
    // })
  },
  onReady: function (e) {
    
  }
})