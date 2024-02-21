//通过 for in 遍历传入参数的属性值
//如果值是引用类型则再次递归调用该函数，
//如果是基础数据类型就直接复制
function deepClone(target){
  let cloneTarget={};
  for(let key in target){
    if(typeof key ==='object'){
      cloneTarget=deepClone(target[key]);
    }else{
      cloneTarget=target[key];
    }
  }
  return cloneTarget;
}

// 也有局限性！
// 这个深拷贝函数并不能复制不可枚举的属性以及 Symbol 类型；
// 这种方法只是针对普通的引用类型的值做递归复制，而对于 Array、Date、RegExp、Error、Function 这样的引用类型并不能正确地拷贝；
// 对象的属性里面成环，即循环引用没有解决。