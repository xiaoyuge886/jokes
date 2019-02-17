const util = require("../utils/util.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    util.showLoading();
    var that = this;
    var parameters = "a=square&c=topic";
    util.request(parameters, function (res) {
      that.setData({
        dataList: res.data.square_list
      });
      setTimeout(function () {
        util.hideToast();
        wx.stopPullDownRefresh();
      }, 1000);
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },
  //登录
  taplogin: function () {
    wx.navigateTo({
      url: '../login/login',
      success: function (res) {
        // success
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  mutualEvent: function (obj) {
    util.alertView("提示", "加速开发中...", function () {
      console.log("点击了确定")
    })
  }
})