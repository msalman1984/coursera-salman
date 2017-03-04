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
        return $http({
          method: "GET",
          url: ("https://davids-restaurant.herokuapp.com/menu_items.json?category=")
        })
        .then(function (result) {
               var resData = [];
               for(var i = 0; i < result.data.menu_items.length; i++){

                 if(result.data.menu_items[i].name.indexOf(categoryShortName) !== -1 ){
                   var name = result.data.menu_items[i].name;
                   console.log(name);
                   resData.push(name);
                 }
               }
               return resData;
             })
             .catch(function(error){
               console.log('error service');
             }
           );
      };
  }
  })();
