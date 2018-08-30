let serverPath = 'http://vrmaker.com.cn:8080'   //http://vrmaker.com.cn:8080/process/getNeedAuditing
let serverPath1 = "http://5windy.com"
export function post(url,body) {
    return new Promise((resolve,reject) => {
        wx.request({
              url: serverPath1 + url,    // 拼接完整的url
              data: body,
              method:'POST',
              header: {
                  'content-type': 'application/json'
              },
              success(res) {
                resolve(res.data)  // 把返回的数据传出去
              },
              fail(ret) {
                reject(ret)   // 把错误信息传出去
              }
            })
    })
}