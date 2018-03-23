function Tree(list){
  this.tree = [];
  this.layer = -1;
  this.max = 0;
  for(var i = 0; i < list.length; i++) {
    this.switch(this.push(list[i]), this.layer, this.max);
  }
}

Tree.prototype.get = function() {
  return this.tree;
}

Tree.prototype.push = function(v){
  var len = this.tree.push(v);
  if (this.max < len) {
    this.layer += 1;
    this.max += Math.pow(2, this.layer);
  }
  return len - 1;
}

Tree.prototype.switch = function(currIndex, layer, max){
  var parentMax = max - Math.pow(2, layer);
  var maxV = parentMax - Math.pow(2, layer-1);
  var parentIndex = Math.ceil((currIndex+1-parentMax)/2) + maxV - 1;
  var parentV = this.tree[parentIndex];
  var currV = this.tree[currIndex];
  if(layer > 0 && parentV < currV) {
    this.tree[parentIndex] = currV;
    this.tree[currIndex] = parentV;
    this.switch(parentIndex, layer-1, parentMax);
  }
}

function heapSort(list){
  var sort = function(list) {
    var tree = new Tree(list);
    return tree.get();
  }
  var sortList = JSON.parse(JSON.stringify(list));
  var result = [];

  while(sortList.length) {
   sortList = sort(sortList);
   result.unshift(sortList.shift());
  }

  return result;
}
