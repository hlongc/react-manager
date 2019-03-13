import JsonP from 'jsonp'
export default class Axios {
  static JSONP(options) {
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
}