/*
 * @Author: STATICHIT 2394412110@qq.com
 * @Date: 2024-02-21 15:12:49
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2024-02-21 15:14:05
 * @FilePath: \面试手写题\08实现Proimse方法.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function myPromise(constructor) {
  let self = this;
  self.status = "pending";
  self.value = undefined;
  self.reason = undefined;
  function reslove(value) {
    if (self.status == "pending") {
      self.value = value;
      self.status = "resolved";
    }
  }
  function reject(reason) {
    if (self.status == "pending") {
      self.reason = reason;
      self.status = "rejected";
    }
  }

  try {
    constructor(reslove, reject);
  } catch (e) {
    reject(e);
  }
}
myPromise.prototype.then = function (onFullfilled, onRejected) {
  let self = this;
  switch (self.status) {
    case "resloved":
      onFullfilled(self.value);
      break;
    case "rejected":
      onRejected(self.reason);
      break;
    default:
  }
}