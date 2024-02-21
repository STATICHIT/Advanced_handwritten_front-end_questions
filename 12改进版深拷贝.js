function isComplexDataType(obj) {
  return (typeof obj === 'object' || typeof obj === 'function') && (obj !== null);
}

// WeakMap 是 ES6 中引入的一种数据结构，类似于 Map，用于存储键值对。
// 与普通的 Map 不同的是，WeakMap 的键只能是对象，值可以是任意类型。
function deepClone(obj, hash = new WeakMap()) {
  if (obj.consturctor === Date) {
    return new Date(obj)      //日期对象之间返回一个新的日期对象
  }

  if (obj.consturctor === RegExp) {
    return new RegExp(obj)    //正则对象直接返回一个新的正则对象
  }

  //如果循环引用了就用weakMap来解决
  if (hash.has(obj)) {
    return hash.get(obj);
  }
  // Object.getOwnPropertyDescriptors(obj) 获取的对象所有自身属性的描述符
  let allDesc = Object.getOwnPropertyDescriptors(obj)

  //遍历传入参数所有键的特性
  let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc)

  //把cloneObj原型复制到obj上
  hash.set(obj, cloneObj);
  //到这一步骤只是创建了一个新对象 cloneObj，并保留了原对象的原型链关系和所有自身属性的描述符，但还没有完成深拷贝。
  //因为对象的属性值也有可能是对象，所以还需要对每个属性进行遍历判断，如果是对象需要递归调用进行深度复刻。

  // Reflect.ownKeys是一个静态方法，用于返回一个对象自身所有属性的键名，包括不可枚举属性和符号属性。
  for (let key of Reflect.ownKeys(obj)) {
    if (isComplexDataType(obj[key]) && typeof obj[key] !== 'function') {
      cloneObj[key] = deepClone(obj[key], hash)
    } else {
      cloneObj[key] = obj[key]
    }
  }
  return cloneObj
}



// 不带注释完整的写一遍
function deepClone2(obj, hash = new WeakMap()) {
  if (obj.consturctor === Data) {
    return new Data(obj)
  }
  if (obj.consturctor === RegExp) {
    return new RegExp(obj)
  }
  if (hash.has(obj)) {
    return hash.get(obj)
  }

  let allDesc = Object.getOwnPropertyDescriptors(obj)
  let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc)
  hash.set(obj, cloneObj);

  for (let key of Reflect.ownKeys(obj)) {
    if (isComplexDataType(obj[key]) && typeof obj[key] !== 'function') {
      cloneObj[key] = deepClone(obj[key],hash)
    } else {
      cloneObj[key] = obj[key]
    }
  }
  return cloneObj
}