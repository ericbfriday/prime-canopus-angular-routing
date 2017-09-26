myApp.controller('RedController', function(ThingService) {
    console.log('in red controller');
    var vm = this;
    vm.redItems = ThingService.redThings;

    vm.blueItems = ThingService.blueThings;

 });