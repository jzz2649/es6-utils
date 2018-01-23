const isObject=o=>toString.call(o)==='[object Object]';
const isObjects=(...o)=>o.reduce((a,b)=>a?isObject(b):false,isObject(o[0]));
const isArrays=(...s)=>s.reduce((a,b)=>a?Array.isArray(b):false,Array.isArray(s[0]));

const clone = o =>{
  let r = o;
  const set = () =>
    Object.keys(o).forEach(k=>r[k]=clone(o[k]))
  if(isObject(o)) set(r={});
  else if(Array.isArray(o)) set(r=[]);
  return r;
}

const assign = (a,b) => {
  const x = clone(a);
  const y = clone(b);
  if(isObjects(x,y)||isArrays(x,y))
    Object.keys(y).forEach(k=>x[k]=assign(x[k],y[k]))
  else
    return y;
  return x;
}
