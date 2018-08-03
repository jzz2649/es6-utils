const debounce = (fn, wait) => {
  let timer = null;
  const done = wait ? cb => setTimeout(cb, wait) : requestAnimationFrame;
  const cancel = wait ? clearTimeout : cancelAnimationFrame;
  return (...s) => {
    if (timer) cancel(timer);
    timer = done(() => fn(...s));
  };
};
