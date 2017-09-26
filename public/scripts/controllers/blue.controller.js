myApp.controller('BlueController', function (ThingService) {
    console.log('in blue controller', ThingService.blueThings);

    var vm = this;

    // when controller loads, call getServerThings function in our service
    ThingService.getServerThings();
    vm.serverStuff = ThingService.serverThings;

    vm.blueStuff = ThingService.blueThings;
    vm.countObj = ThingService.countObj;

    vm.clickUpdate = function () {
        console.log('log in clickUpdate');
        ThingService.incCounter();
    }

});