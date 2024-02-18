//bind也是考查this的指向问题，bind会创建一个新的函数（返回函数，可以传入参数）
// context 是 bind 传入的 this
// args 是 bind 传入的各个参数
// this表示调用bind的函数
Function.prototype.myBind = function (context = window, ...args) {
  let self = this;//发fn.bind(obj),self就是fn
  
  let fBound = function(...innerArgs){
    return self.apply(
      this instanceof fBound?this:context,
      args.concat(innerArgs)
    )
  }
  fBound.prototype=Object.create(this.prototype);
  return fBound;
}

//这个还看不到太懂 https://www.bilibili.com/video/BV16c411Q7VM/?p=10&spm_id_from=pageDriver&vd_source=3e01e797e31c13dcbf5cfdb62e929ccf

Function.prototype.bind2=function(target,...args){
  target = target ||window;
  let self=this;

  let fBound= function(...innerArgs){ 
    return self.apply(this instanceof fBound?this:target,
      args.concat(innerArgs)
      );//相当于target.apply(obj);即obj.target()
  }
  fBound.prototype=Object.create(this.prototype);//不能直接=this.prototype,不然绑定的函数也会被修改掉
  return fBound;
}