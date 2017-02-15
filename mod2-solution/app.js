angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
  $scope.msg = '';
  $scope.arraylength = 0;
  $scope.array = '';

  $scope.checkArray = function() {
    var _array = $scope.array.split(',');
    if(_array.length < 4 && _array.length > 1){
      $scope.msg = 'Enjoy';
    }else if(_array.length > 3){
      $scope.msg = 'Too Much';
    }else if(_array.length === 1){
      if(_array[0] === ''){
        $scope.msg = 'Please enter data first';
      }
      else{
        $scope.msg = 'Enjoy';
      }
    }


  };
}
