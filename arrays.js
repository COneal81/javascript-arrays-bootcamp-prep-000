var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'];
  
  function addElementToBeginningOfArray() {
   ["spree",...chocolateBars];
    return chocolateBars
  }
 
  function destructivelyAddElementToBeginningOfArray() { chocolateBars.unshift("starburst")
     return chocolateBars
  }
  
  function addElementToEndOfArray() {
    [...chocolateBars, "spree"]
    return chocolateBars
  }
  
  function destructivelyAddElementToEndOfArray() {
    chocolateBars.push("starburst");
    return chocolateBars
  }
  
  
  function accessElementInArray(){
    var names = ["Kevin","Kari","Wyatt"];
    return names[2]
  }
  