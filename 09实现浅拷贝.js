function shallowClone(target){
  if(typeof target === 'object' && target!==null){
    const cloneTarget = Array.isArray(target)?[]:{};
    for(let prop of target){
      // 过滤掉原型链上的属性，避免将原型链上的属性复制到新对象中
      if(target.hasOwnProperty(prop)){
        cloneTarget[prop]=target[prop];
      }
    }
    return cloneTarget;
  }else{
    //如果是基础类型或空对象直接返回
    return target;
  }
}