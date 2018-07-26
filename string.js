const fill = (s, v, l, cb) => {
  let rl = l - v.length; //Remaining length
  rl = rl > 0 ? rl : 0;
  return cb(s.repeat(rl), v.slice(0, l));
}
