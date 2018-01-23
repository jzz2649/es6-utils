const fill = (s, v, l, callback=()=>{}) => {
  let rl = l - v.length; //Remaining length
  rl = rl > 0 ? rl : 0;
  return callback(s.repeat(rl), v.slice(0, l));
}
