/**
 *@func getV 获取对象的值
 *@param {object} [obj] 对象
 *@return {function} [...args] 属性
 */

const getV=o=>(...s)=>s.reduce((a,b)=>a?a[b]:''.u,o)

const getS = k => {
  const s = window.location.search.split('?')[1];
  const a = s ? s.split('&') : [];
  const r = a.reduce((o, e) => {
    const kv = e.split('=');
    const k = kv[0];
    if (kv.length > 1 && k) o[k] = kv[1];
    return o;
  }, {})
  return k ? r[k] : r;
}

const filterV = o => {
  let v, d = o;
  const set = () =>
    Object.keys(o).forEach(k=>{
      if(!isEmpty(v=filterV(o[k])))d[k]=v
    });
  if(isObject(o)) set(d={});
  else if(isArray(o)) set(d=[]);
  return d;
}
