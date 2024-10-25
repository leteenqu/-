Page({
  data: {
    email: '',
    password: '',
    errorMsg: ''
  },
  onEmailInput(e) {
    this.setData({ email: e.detail.value });
  },
  onPasswordInput(e) {
    this.setData({ password: e.detail.value });
  },
  async login() {
    const { email, password } = this.data;
    if (!email || !password) {
      this.setData({ errorMsg: '请填写完整的登录信息' });
      return;
    }
    try {
      const response = await wx.request({
        url: 'https://yourserver.com/auth/login',
        method: 'POST',
        data: { email, password },
        header: { 'Content-Type': 'application/json' },
      });
      if (response.data.token) {
        wx.setStorageSync('token', response.data.token);
        wx.navigateTo({ url: '/pages/postJob/postJob' });
      } else {
        this.setData({ errorMsg: '登录失败，请检查您的信息' });
      }
    } catch (error) {
      this.setData({ errorMsg: '网络错误，请稍后重试' });
    }
  }
});