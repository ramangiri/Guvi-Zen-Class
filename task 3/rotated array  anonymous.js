var rotate=function(a,k){
    n=a.length;
 c=[];
  d="";
  for(i=0;i<n;i++)
  {
      c[(i+k)%(n)]=a[i]
  }
  for(i=0;i<c.length-1;i++)
  {
      d+=c[i]+" "
  }
  d+=c[c.length-1]
  return d;
}
console.log(rotate([1,2,3,4,5],2))