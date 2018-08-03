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
  const done = wait ? cb => setTimeout(cb, wait) : requestAnimationFrame;
  const cancel = wait ? clearTimeout : cancelAnimationFrame;
  return (...s) => {
    args = s;
    if (!create) {
      create = true;
      if (timer) cancel(timer);
      timer = done(() => {
        create = false;
        fn(...args);
      });
    }
  };
};
