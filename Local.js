function Local(store){
  let local = {};
  const storage = {
    set(k, v) {
      local[k] = v;
      localStorage.setItem(k, v);
    },
    get(k) {
      return k ? local[k]: local;
    },
    rm(k) {
      delete local[k];
      localStorage.removeItem(k);
    },
    cls() {
      local = {};
      localStorage.clear();
    }
  }
  Object.keys(localStorage).forEach(k=>{
      local[k] = localStorage.getItem(k);
  })
  if(store){
    storage.cls();
    for(const k in store){
      storage.set(k, store[k]);
    }
  }
  return storage;
}
