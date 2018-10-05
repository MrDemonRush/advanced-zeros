  module.exports = function getZerosCount(number, base) {

    const baseFactors = [];
  
    for(let i=2; i <= base; i++){
      if(base%i != 0) continue;
      var j = 0;
      while(base%i == 0){
        base = base/i;
        j++;
      }
      baseFactors.push({value: i, count: j});
    }
  
    countFactors = [];
  
    baseFactors.forEach(factor => {
      let count = 0;
      let temp = number;
      while(temp/factor.value != 0){
        count = count + Math.floor(temp/factor.value);
        temp = Math.floor(temp/factor.value);      
      }
      countFactors.push(Math.floor(count/factor.count));
    });
    return Math.min.apply(null, countFactors)
  }