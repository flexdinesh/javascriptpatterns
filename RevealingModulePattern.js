var module = (function() {
  var _this = this;

  var _privateVariable = '';

  var _privateMethod = function() {
    // private method def
    // can use _this._privateVariable
    console.log('Inside a private method!');
  }

  var methodToExpose = function() {
    // method def
    console.log('This is a method I want to expose!');
  }

  var anotherMethodIWantToExpose = function() {
    // method def
    _privateMethod();
  }

  return {
      first: methodToExpose,
      second: anotherMethodIWantToExpose
  };
})();


module.first();  // Output: This is a method I want to expose!
module.second(); // Output: Inside a private method!
