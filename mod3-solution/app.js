
(function(){
  'use strict';
  angular.module('NarrowItDownApp', [])

  .controller('NarrowItDownController', NarrowItDownController)
  .directive('foundItems', FoundItems)
  .service('MenuSearchService', MenuSearchService);

  function FoundItems(){
    var ddo = {
      templateUrl: 'foundItems.html',
      restrict: 'A',
      scope: {
        foundItems: '<',
        onRemove: '&'
      }
    };
    return ddo;
  };

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService){
    var Ctrl = this;
    Ctrl.nothingFound = undefined;

    Ctrl.NarrowDownButton = function(SearchText){
      Ctrl.found = [];
      if(SearchText){
        var promis = MenuSearchService.getMatchedMenuItems(SearchText);
        promis.then(function (result) {

          Ctrl.found = result;
          console.log(Ctrl.found);
          if(Ctrl.found.length > 0){
            Ctrl.nothingFound = false;
          }else {
            Ctrl.nothingFound = true;
          }
        })
      }else{
        Ctrl.nothingFound = true;
      }
    };


Ctrl.removeItem = function (index) {
  Ctrl.found.splice(index,1);
  if(Ctrl.found.length < 1){
    Ctrl.nothingFound = true;
  }
};
  }


  MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http){
      var service = this;

      var strtext = 'chicken';

    service.getMatchedMenuItems = function(SearchText){
      var resData = [];
      return $http(
        {
          method: 'GET',
          url: ('https://davids-restaurant.herokuapp.com/menu_items.json')
        }
      ).then(function (result) {
        // process result and only keep items that match
        // resData = result;
        for(var i = 0; i < result.data.menu_items.length; i++){
          var _obj = {};
          if(result.data.menu_items[i].description.indexOf(SearchText) !== -1 ){
            // console.log(result.data.menu_items[i].description);
            _obj.name = result.data.menu_items[i].name;
            _obj.short_name = result.data.menu_items[i].short_name;
            _obj.description = result.data.menu_items[i].description;

            resData.push(_obj);


          }
        }
        // console.log(resData);
        // console.log(result);
        // return processed items
        return resData;
      })
      .catch(function(error){
        console.log('error');
      }
    );
      // return 0;
    };

  }

})();
