angular.module('MenuApp')
.controller('itemDetailController', itemDetailController);

itemDetailController.$inject = ['items'];
function itemDetailController(items) {
this.result = [];
  console.log(items);
  this.result = items;
  // for(var i = 0; i < items.length; i++){
  //   this.result.push(items.data[i].name);
  // }
  // console.log(this.result);
  // this.result = items.data ;

};
