import JsonP from 'jsonp';
import axios from 'axios';
import { message } from 'antd';

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  config['baseURL'] = 'https://easy-mock.com/mock/5c8b0f7340c1db70992aa9cd/manager'
  return config;
}, (error) => {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(response => {
  if (response.data.code === 0) {
    return response.data.payload
  } else {
    message.error(response.data.msg)
  }
}, error => {
  message.error(error.statusText)
});

axios.JSONP = (options) => {
  return new Promise((resolve, reject) => {
    JsonP(options.url, { param: 'callback' }, (err, res) => {
      if (res.status === 'success') {
        resolve(res.results[0])
      } else {
        reject(res.message)
      }
    })
  })
}

export default axios;