const throttle = (fn, wait) => {
  let start = Date.now() - wait;
  return (...s) => {
    const now = Date.now();
    if(now - start >= wait){
      start = now;
      fn(...s);
    }
  }
}
