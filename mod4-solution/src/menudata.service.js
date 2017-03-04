// angular.module('data')
// .service('MenuDataService', MenuDataService);
//
// MenuDataService.$inject = ['$http'];
// function MenuDataService($http){
//     var service = this;
//
//     service.getAllCategories = function(){
    //   var resData = [];
    //   return $http(
    //     {
    //       method: 'GET',
    //       url: ('https://davids-restaurant.herokuapp.com/categories.json')
    //     }
    //   ).then(function (result) {
    //     console.log(result);
    //     return result;
    //   })
    //   .catch(function(error){
    //     console.log('error');
    //   }
    // );

    // };


    // service.getItemsForCategory() = function(categoryShortName){
      // var resData = [];
      // return $http(
      //   {
      //     method: 'GET',
      //     url: ('https://davids-restaurant.herokuapp.com/menu_items.json?category='+categoryShortName)
      //   }
      // ).then(function (result) {
      //   console.log(result);
      //   return result;
      // })
      // .catch(function(error){
      //   console.log('error');
      // }
    // );
  //   };
  //
  // }

  (function () {
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http']
  function MenuDataService($http) {
      var service = this;

      service.getAllCategories = function(){
        var promise = $http({
          method: "GET",
          url: "https://davids-restaurant.herokuapp.com/categories.json"
        });
        return promise;

      };
      service.getItemsForCategory = function(categoryShortName){
        console.log("categoryShortName "+categoryShortName);
        var promise = $http({
          method: "GET",
          url: ("https://davids-restaurant.herokuapp.com/menu_items.json?category="+categoryShortName)
        });
        return promise;
      };
  }
  })();
