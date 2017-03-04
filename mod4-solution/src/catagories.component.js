(function () {
'use strict';

angular.module('MenuApp')
.component('catagoryComponent', {
  templateUrl: 'src/catagories.component.html',
  bindings: {
    catagory: '<'
  }
});

})();
