angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to tab 1 if no other URL matches
  $urlRouterProvider.otherwise('/');

  // Set up UI states
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'src/home.html'
    })
    .state('catagories', {
      url: '/catagories'
      ,templateUrl: 'src/catagories.html'
      ,controller: 'catagoriesController as catctrl'
      ,resolve: {
        items: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories()
            .then(function(result){
              return result;
            }).catch(function (error) {
              console.log('error in resolve');
              return 0;
            });
            }]
            }
    })

    .state('itemDetail', {
      url: '/item-detail/{itemId}'
      ,templateUrl: 'src/itemDetail.html'
      ,controller: 'itemDetailController as itemDetailCtrl'
      ,resolve: {
        items: ['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
            return MenuDataService.getItemsForCategory($stateParams.itemId)
            .then(function(result){
              // console.log(result);
              return result;
            })
            .catch(function (error) {
              console.log('error in resolve');
              return 0;
            })
            ;
            }]
            }
    })

    ;
}
