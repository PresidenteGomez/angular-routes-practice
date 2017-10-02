myApp.service('CharacterService', function () {
    console.log('in CharacterService');

    var serv = this;
    //static data

    //not static!!!
    //dynamic data MUST BE IN AN OBJECT

    serv.totalCounts = {count: 0};
    
    serv.incCounter = function () {
        serv.totalCounts.count++;
    }

    serv.numberGen = function () {
        return Math.floor((Math.random() * 10) + 1);
        console.log('numberGen ->', numberGen);
    };


    // serv.highFiveButton = function () {
    //    console.log('log in highFiveButton');
       
    // }
    

});