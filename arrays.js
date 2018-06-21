var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'];
  
  function addElementToBeginningOfArray() {
    chocolateBars.unshift("starburst")
    return chocolateBars
  }
 
  function destructivelyAddElementToBeginningOfArray() {["spree",...chocolateBars];
     return chocolateBars
  }
  
  function addElementToEndOfArray() {
    chocolateBars.push("starburst");
    return chocolateBars
  }
  
  function destructivelyAddElementToEndOfArray() {
    [...chocolateBars, "spree"]
    return chocolateBars
  }
  
  function accessElementInArray(){
    var names = "Kevin", "Kari", "Wyatt";
    return names[2]
  }
  