(function () {
'use strict';

angular.module('MenuApp')
.component('itemDetailComponent', {
  templateUrl: 'src/itemDetail.component.html',
  bindings: {
    itemDetail: '<'
  }
});

})();
