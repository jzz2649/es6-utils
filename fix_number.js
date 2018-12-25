function getFix(n){
  let fix = 1;
  while(Math.floor(n)<n){
    fix *= 10;
    n *= 10;
  }
  return fix;
}
function operate(a, b){
  const fix = Math.max(getFix(a), getFix(b));
  a *= fix;
  b *= fix;
  return [a, b, fix];
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
