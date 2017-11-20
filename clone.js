const isObject=o=>toString.call(o)==='[object Object]';
const isObjects=(...o)=>o.reduce((a,b)=>a?isObject(b):false,isObject(o[0]));
const isArrays=(...s)=>s.reduce((a,b)=>a?Array.isArray(b):false,Array.isArray(s[0]));

const clone = o =>{
  let r = o;
  if(isObject(o)){
    r = {};
    Object.keys(o).forEach(k=>r[k]=clone(o[k]))
  }else if(Array.isArray(o)){
    r = o.map(v=>clone(v))
  }
  return r;
}

const assign = (a,b) => {
  const x = clone(a);
  const y = clone(b);
  if(isObjects(x,y)){
    Object.keys(y).forEach(k=>x[k]=assign(x[k],y[k]))
  }else if(isArrays(x,y)){
    y.forEach((v,i)=>x[i]=assign(x[i],v))
  }else{
    return y;
  }
  return x;
}