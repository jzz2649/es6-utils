/**
 *@func getV 获取对象的值
 *@param {object} [obj] 对象
 *@return {function} [...args] 属性
 */

const getV=o=>(...s)=>s.reduce((a,b)=>a?a[b]:''.u,o)

const filterV = o => {
  let v, d = o;
  if(isObject(o)){
    d = {};
    Object.keys(o).forEach(k=>{
      if(!isEmpty(v=filterV(o[k])))d[k]=v
    })
  }else if(isArray(o)){
    d = [];
    o.forEach((e,i)=>{
      if(!isEmpty(v=filterV(e)))d.push(v)
    })
  }
  return d;
}