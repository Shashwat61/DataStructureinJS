function makeAnagram(a,b){
    var aCount=getCharCount(a);
    var bCount=getCharCount(b);
    
    var deleteCount=0;
      for(var i = 0; i < aCount.length; i++) {
            var min = Math.min(aCount[i], bCount[i]);
            var max = Math.max(aCount[i], bCount[i]);
            deleteCount += (max - min)
        }
        console.log(deleteCount)
    }
    function getCharCount(str){
    const arr=new Array(26);
    arr.fill(0)
     for(var i = 0; i < str.length; i++) {
            var index = str[i].charCodeAt() - 97;
            arr[index] = arr[index] + 1;
        }
       return arr;
    }
    
    makeAnagram('cde','abc')

