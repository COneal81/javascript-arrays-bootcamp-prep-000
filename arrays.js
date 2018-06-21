var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'];
  
  function addElementToBeginningOfArray() {
    chocolateBars.unshift("starburst")
    return chocolateBars
  }
  var n = chocolateBars
  function destructivelyAddElementToBeginningOfArray(n) {["spree",...chocolateBars];
     return chocolateBars
  }