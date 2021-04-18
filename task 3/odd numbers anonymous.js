var odd=function(a){
    var  res="";
    for(i=0;i<a.length-1;i++)
    {
        if(a[i]%2!==0)
        {
            res+=a[i]+" ";
        }
    }
    res+=a[a.length-1];
    return res;
}
console.log(odd([1,2,3,4,5]))