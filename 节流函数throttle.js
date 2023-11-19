//func是用户传入需要防抖的函数
//wait是等待时间
function throttle(func, wait=50) {
  let lastTime = 0;//上一次执行该函数的时间
  let timer = null;

  return function () {
    //如果存在定时器要先清除
    if (timer) {
      clearInterval(timer);
      timer = null;
    }

    let self = this;
    let args = arguments;
    let nowTime = +new Date();

    //剩余等待时间
    const remainWaitTime = wait - (nowTime - lastTime);

    if (remainWaitTime <= 0) {
      lastTime = nowTime;
      //apply() 是 JavaScript 函数的一个方法，它用于调用函数并设置函数内部 this 关键字的指向。
      func.apply(self, args);
    } else {
      //继续等待remainWaitTime再执行
      timer = setTimeout(function () {
        lastTime = +new Date();
        func.apply(self, args);
        timer = null;//重置定时器
      }, remainWaitTime)
    }
  }
}