(function(window) {
  'use strict';

  var App = window.App || {};

  var Validation = {
    isCompanyEmail: function (email) {
      return /.+@sch\.ac\.kr$/.test(email);
    }
  };

  App.Validation = Validation;
  window.App = App;
})(window);
