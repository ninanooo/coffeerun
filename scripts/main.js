(function(window) {
  'use strict';

  var FORM_SELECTOR = '[data-coffee-order="form"]';
  var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';

  var App = window.App;
  var Truck = App.Truck;
  var DB = App.DB;
  var FormHandler = App.FormHandler;
  var CheckList = App.Check;

  //console.log(App);

  var myTruck = new Truck('ncc-1701', new DB());
  window.myTruck = myTruck;
  var checkList = new CheckList(CHECKLIST_SELECTOR);
  checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));
  var formHandler = new FormHandler(FORM_SELECTOR);
  //formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));
  formHandler.addSubmitHandler(function (data) {
    myTruck.createOrder.call(myTruck, data);
    checkList.addRow.call(checkList, data);
  });
})(window);
