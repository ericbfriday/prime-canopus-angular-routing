myApp.controller('BlueController', function(ThingService) {
   console.log('in blue controller', ThingService.blueThings);

   var vm = this;

   vm.blueStuff = ThingService.blueThings;

});