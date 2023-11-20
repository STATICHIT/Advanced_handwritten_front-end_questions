function debounce(func, wait) {
  let timer = null;

  return function () {
    //检查是否存在定时器
    if (timer) {
      //清除定时器
      clearInterval(timer);
      timer = null;
    }

    let self = this;
    let args = arguments;//args 是用户函数的参数列表

    timer = setTimeout(function () {
      func.apply(self, args);//执行用户函数
      timer = null;//重置定时器
    }, wait)
  }
}