Page({
  data: {
    amount: 0,
    errorMsg: '',
    successMsg: ''
  },
  onAmountInput(e) {
    this.setData({ amount: e.detail.value });
  },
  async makePayment() {
    const { amount } = this.data;
    if (!amount || amount <= 0) {
      this.setData({ errorMsg: '请输入有效的支付金额' });
      return;
    }
    try {
      const response = await wx.request({
        url: 'https://yourserver.com/pay',
        method: 'POST',
        data: { amount },
        header: { 
          'Content-Type': 'application/json',
          Authorization: wx.getStorageSync('token')
        }
      });
      if (response.statusCode === 200) {
        this.setData({ successMsg: '支付成功', errorMsg: '' });
      } else {
        this.setData({ errorMsg: '支付失败，请稍后重试' });
      }
    } catch (error) {
      this.setData({ errorMsg: '网络错误，请稍后重试' });
    }
  }
});