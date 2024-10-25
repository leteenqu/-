const BASE_URL = 'https://yourserver.com';

const request = (url, method, data = {}) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${BASE_URL}${url}`,
      method,
      data,
      header: {
        'Content-Type': 'application/json',
        Authorization: wx.getStorageSync('token') || ''
      },
      success: (res) => resolve(res.data),
      fail: (err) => reject(err)
    });
  });
};

module.exports = { request };