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

const throttle = (fn, wait) => {
  let timer = null;
  let create = false;
  let args = [];
  return (...s) => {
    args = s;
    if(!create){
      create = true;
      if(timer) clearTimeout(timer);
      timer = setTimeout(()=>{
        create = false;
        fn(...args);
      }, wait);
    }
  }
}
