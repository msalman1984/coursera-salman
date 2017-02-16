
(function(){
  angular.module('CheckOffList', [])

  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var ToBuy = this;
    ToBuy.ToBuyArr = ShoppingListCheckOffService.getToBuyArr();

    ToBuy.itemBought = function(idx){
      ShoppingListCheckOffService.ItemBought(idx);
    };
  }


  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var Bought = this;
    Bought.BoughtArr = ShoppingListCheckOffService.getBoughtArr();

  }

  function ShoppingListCheckOffService(){
    var service = this;

    var ToBuyArr = [{name: "cookies", quantity: 10},{name: "Milk", quantity: 5},{name: "Meat", quantity: 2}];
    var BoughtArr = [];

    service.getToBuyArr = function(){
      return ToBuyArr;
    };

    service.getBoughtArr = function(){
      return BoughtArr;
    };

    service.ItemBought = function(idx){
      var _obj = {};
      _obj.name = ToBuyArr[idx].name;
      _obj.quantity = ToBuyArr[idx].quantity;
      BoughtArr.push(_obj);
      ToBuyArr.splice(idx,1);
    };

  }

})();
