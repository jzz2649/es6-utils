const distinct=s=>[...new Set(s)];

const toTwoArr = (index, col) => {
  const x = Math.floor(index/col);
  const y = index%col;
  return [x,y];
}

const toOneArr = (x, y, col) => {
  return x*col + y;
}