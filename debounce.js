const debounce = (fn, delay) => {
  let timer = null;
  return (...s) => {
    if(timer) clearTimeout(timer);
    timer = setTimeout(()=>{
      fn(...s);
    }, delay);
  }
}
