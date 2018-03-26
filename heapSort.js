
function heapSort(list){
  var len = list.length;
  var swap = function(a,b){
    var temp = list[a];
    list[a] = list[b];
    list[b] = temp;
  }
  var adjust = function(i, j){
    var curr = i;
    var left = 2*i+1;
    var right = 2*i+2;
    if(left<j&&list[curr]<list[left]) curr = left;
    if(right<j&&list[curr]<list[right]) curr = right;
    if(curr!=i){
      swap(i, curr);
      adjust(curr, j);
    }
  }
  for(var i=Math.floor(len/2)-1; i>=0; i--){
    adjust(i, len);
  }
  while(len--){
    swap(0, len);
    adjust(0, len);
  }
  return list
}
