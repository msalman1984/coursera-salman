angular.module('MenuApp')
.controller('catagoriesController', catagoriesController);

catagoriesController.$inject = ['items'];
function catagoriesController(items) {
this.result = [];
  console.log(items);
  for(var i = 0; i < items.data.length; i++){
    this.result.push(items.data[i].name);
  }
  console.log(this.result);
  // this.result = items.data ;

};
