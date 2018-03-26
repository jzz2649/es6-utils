function heapSort(list){
  var len = list.length;
  var swap = function(a,b){
    var temp = list[a];
    list[a] = list[b];
    list[b] = temp;
  }
  while(len){
    for(var i=Math.floor(len/2)-1; i>=0; i--){
      var curr = i;
      var left = 2*i+1;
      var right = 2*i+2;
      if(left<len&&list[curr]<list[left]) curr = left;
      if(right<len&&list[curr]<list[right]) curr = right;
      if(curr!=i) swap(i, curr);
    }
    swap(0, len-1);
    len -= 1;
  }
  return list
}
