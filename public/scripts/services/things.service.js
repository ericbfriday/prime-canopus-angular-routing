myApp.service('ThingService', function () {
    console.log('in ThingService');

    var self = this;

    // static data
    self.blueThings = ['blueberries', 'blue men group', 'smurf', 'blue moon', 'sky'];
    self.redThings = ['raspberries', 'red man group', 'clown noses', 'tomato', 'litte red corvette'];

    // not static!!!! 
    // dynamic data MUST BE IN AN OBJECT
    self.countObj = { count: 0 };

    self.incCounter = function () {
        self.countObj.count++;
    }

});