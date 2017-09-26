myApp.controller('BlueController', function (ThingService) {
    console.log('in blue controller', ThingService.blueThings);

    var vm = this;

    vm.blueStuff = ThingService.blueThings;
    vm.countObj = ThingService.countObj;

    vm.clickUpdate = function () {
        console.log('log in clickUpdate');
        ThingService.incCounter();
    }
});