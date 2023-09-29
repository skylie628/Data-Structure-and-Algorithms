var isHappy = function(n) {
    squaredSet = new Set([2,4,16,37])
    while(true){
    let rst =0;
    let temp = n;
   while(temp >0){
     rst += (temp%10)*(temp%10);
     temp = (temp-temp%10)/10;
    }
    if(rst == 1){
        return true
    }
    if(squaredSet.has(rst)){
        return false;
    }
    n = rst;
    }
};