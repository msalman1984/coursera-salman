angular.module('MenuApp')
.controller('itemDetailController', itemDetailController);

itemDetailController.$inject = ['items'];
function itemDetailController(items) {
this.result = [];
  // console.log(items);
  this.result = items.data.menu_items;
};
