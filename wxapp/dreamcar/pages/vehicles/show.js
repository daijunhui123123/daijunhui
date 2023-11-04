// pages/vehicles/show.js
// 全局的getApp函数拿到整个应用对象
const app=getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    design:[]

  },
  testDrive() {
    wx.showToast({
      title: '我们的工作人员会和你联系',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    //api  data 数据修改，自动更新页面  MVVM
    this.setData({
      design: app.globalData.vehicles[0]
      .meta.exterior_design
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})