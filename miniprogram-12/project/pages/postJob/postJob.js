Page({
  data: {
    title: '',
    description: '',
    successMsg: '',
    errorMsg: ''
  },
  onTitleInput(e) {
    this.setData({ title: e.detail.value });
  },
  onDescriptionInput(e) {
    this.setData({ description: e.detail.value });
  },
  async postJob() {
    const { title, description } = this.data;
    if (!title || !description) {
      this.setData({ errorMsg: '请填写完整的职位信息' });
      return;
    }
    try {
      const response = await wx.request({
        url: 'https://yourserver.com/jobs',
        method: 'POST',
        data: { title, description },
        header: { 
          'Content-Type': 'application/json',
          Authorization: wx.getStorageSync('token')
        }
      });
      if (response.statusCode === 200) {
        this.setData({ successMsg: '职位发布成功', errorMsg: '' });
      } else {
        this.setData({ errorMsg: '发布失败，请稍后重试' });
      }
    } catch (error) {
      this.setData({ errorMsg: '网络错误，请稍后重试' });
    }
  }
});