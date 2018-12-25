function getFix(n){
  let fix = 1;
  let f = Math.floor(n);
  while(f<n){
    if(f-n!==0){
      const p = Number.EPSILON*fix;
      const min = Math.abs(f-n);
      const max = Math.abs(1-min);
      if(min<p){
        n = f;
        break;
      }
      if(max<p){
        n = f+1;
        break;
      }
    }
    fix *= 10;
    n *= 10;
    f = Math.floor(n);
  }
  return [n, fix];
}
function operate(a, b){
  const [x, xfix] = getFix(a);
  const [y, yfix] = getFix(b);
  if(xfix>yfix){
    return [x, y*(xfix/yfix), xfix];
  }
  return [x*(yfix/xfix), y, yfix];
}
function add(a, b){
  const [x, y, fix] = operate(a, b);
  return (x+y)/fix;
}
function minus(a, b){
  const [x, y, fix] = operate(a, b);
  return (x-y)/fix;
}
function div(a, b){
  const [x, y, fix] = operate(a, b);
  return x/y;
}
function times(a, b){
  const [x, y, fix] = operate(a, b);
  return x*y/(fix*fix);
}
