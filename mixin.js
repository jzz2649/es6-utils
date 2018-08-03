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

const debounce = (fn, wait) => {
  let timer = null;
  const done = wait ? cb => setTimeout(cb, wait) : requestAnimationFrame;
  const cancel = wait ? clearTimeout : cancelAnimationFrame;
  return (...s) => {
    if (timer) cancel(timer);
    timer = done(() => fn(...s));
  };
};

const delayMixin = {
  data() {
    return {
      tWait: 200,
      dWait: 200
    };
  },
  created() {
    this.throttle = throttle((callback,...s) => callback(...s), this.tWait);
    this.debounce = debounce((callback,...s) => callback(...s), this.dWait);
    this.rAFIimit = throttle((callback,...s) => callback(...s));
    this.rAFOnce = debounce((callback,...s) => callback(...s));
  }
};
