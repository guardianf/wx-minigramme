// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menus: [
      {
        "text": "房屋列表",
        "iconPath": "/static/images/home.png",
        "selectedIconPath": "/static/images/home_active.png",
      }, {
        "text": "我的",
        "iconPath": "/static/images/user.png",
        "selectedIconPath": "/static/images/user_active.png",
      }
    ],
    lists: getApp().globalData.houseList
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  onDetail: function(path) {
    const index = path.target.dataset["index"];
    wx.navigateTo({
      url: `../detail/detail?index=${index}`,
    });
  }
})