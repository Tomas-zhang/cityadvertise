//index.js
//获取应用实例

Page({
  data: {
    citylogo: '/images/city.png',
    cityName: '城市角度广告传媒',
    _address: '新罗区龙腾北路西陂街道双路亭269号',
    phoneIcon: '/images/phone.png',
    phoneNum: "13799086171",
    mailIcon: "/images/mail.png",
    mail: "12345678@qq.com",
    arrow: '/images/xiangyou.png',
  },
 
  onLoad: function () {
    
  },
  
  phoneCall: function () {
    wx.makePhoneCall({
      phoneNumber: this.data.phoneNum
    })
  },
  mapCall: function (){
    let _longitude = 117.011238;
    let _latitude = 25.122713;
    wx.openLocation({
      latitude: _latitude,
      longitude: _longitude,
      name: this.data.cityName,
      addrees: this.data._address,
      scale: 13
    })
  }
})
