var module = (function() {
  var _this = this;

  var _privateVariable = '';

  var _privateMethod = function() {
    // private method def
    // can use _this._privateVariable
    console.log('Inside a private method!');
  }

  return {
    publicMethod: function() {
      // public method def
      // can use _this._privateVariable
      // can call _privateMethod();
    }
  };
})();

module.publicMethod();  // can only invoke public methods
