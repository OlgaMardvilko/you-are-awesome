// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (property) => {return property};

const createNotEnumerableProperty = (property) => {
  Object.defineProperty (Object.prototype, property, {
    set:(value) => {this.value = value},
    get:() => {return this.value},
    enumerable: false  
  });
  return property; 
};

const createProtoMagicObject = () => {
  let protoMagicObject = new Function();
  protoMagicObject.prototype = protoMagicObject.__proto__;
  return protoMagicObject;
};

let increm = 0;
const incrementor = () => {
    increm++;
    Function.prototype.toString = function() {
      return increm;
    }
    return incrementor;
};

let AsincIncrem = 0;
const asyncIncrementor = () => {
    return new Promise((resolve) => {
      AsincIncrem++;
      return resolve(AsincIncrem);
    });
};

const createIncrementer = (initialValue) => {
    let incrementer = [];
    incrementer.value = 0;
    incrementer.next = () => {
        incrementer.value++;
        return incrementer;
    };
    return incrementer;
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (res) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(res),1000);
    });
};
const getDeepPropertiesCount = () => {return null;};
const createSerializedObject = () => {
    let object = null;
    return object;
};
const toBuffer = () => {};
const sortByProto = (objProto) => {
    return objProto.sort((a,b) => {
      a.__proto__-b.__proto__;
    });
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;