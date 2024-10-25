Page({
  data: {
    projects: [],
    errorMsg: ''
  },
  onLoad() {
    this.fetchProjects();
  },
  async fetchProjects() {
    try {
      const response = await wx.request({
        url: 'https://yourserver.com/projects',
        method: 'GET',
        header: { Authorization: wx.getStorageSync('token') }
      });
      if (response.statusCode === 200) {
        this.setData({ projects: response.data });
      } else {
        this.setData({ errorMsg: '无法加载项目列表' });
      }
    } catch (error) {
      this.setData({ errorMsg: '网络错误，请稍后重试' });
    }
  }
});