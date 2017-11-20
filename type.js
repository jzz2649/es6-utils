const type = o => toString.call(o)

const isArray = arr => Array.isArray(arr)

const isNumber = n => type(n) === '[object Number]'

const isNaN = n => Number.isNaN(n)

const isString = str => type(str) === '[object String]'

const isFun = fun => type(fun) === '[object Function]'

const isBoolean = bool => type(bool) === '[object Boolean]'

const isObject = obj => type(obj) === '[object Object]'

const strIsEmpty = str => str.trim === ''

const objIsEmpty = obj => Object.keys(obj).length === 0

const arrIsEmpty = arr => arr.length === 0

const isEmpty = o => {
  switch(true){
    case o === undefined || o === null:
    case isString(o) && strIsEmpty(o):
    case isObject(o) && objIsEmpty(o):
    case isArray(o) && arrIsEmpty(o):
    case isNaN(o): return true;
    default: return false;
  }
}