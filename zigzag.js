
var convert = function(s, numRows) {
    /*
    left = 2*(numRows-1)*cellIndex+level
    right = 2*(numRows-1)*(cellIndex+1)-level 
 \*/
    let rst ="";
    let rowIndex = 0;
    let cellIndex = 0;
    if(numRows == 1){
      return s
    }
    while(rowIndex<numRows){
      let leftIndex = 2*(numRows -1)*cellIndex+rowIndex; 
      if( leftIndex>= s.length ){
        rowIndex++;
        cellIndex =0;
        continue;
      }
      rst+=s[leftIndex]
      if(rowIndex == numRows-1 || rowIndex == 0 ){
        cellIndex++ ;
        continue
      }
      let rightIndex = 2*(numRows -1)*(cellIndex+1)-rowIndex;
       if(rightIndex >= s.length){
        rowIndex++;
        cellIndex =0;
        continue;
      }
      rst+= s[rightIndex]
      cellIndex++ ;
      }
    return rst
};