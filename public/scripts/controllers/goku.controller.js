myApp.controller('GokuController', function (CharacterService) {
    console.log('in Goku Controller!', CharacterService);


    var vm = this;

    //when controller loads, calls getServerThigns funciton in our service
    // CharacterService.getServerThings();
    // vm.serverStuff = CharacterService.ServerThings;

    vm.gokuCounter = 0;


    vm.charSkillLevel = CharacterService.numberGen();

    console.log('On page load level ->', vm.charSkillLevel);

    vm.qualityLevel = function () {
       var shakeQuality = CharacterService.numberGen();
       if (shakeQuality => vm.charSkillLevel){
            vm.gokuCounter++;
            CharacterService.totalCounts++; 
       } 
       console.log('On page load Character level ->', vm.charSkillLevel);

    };

    vm.clickHighFive = function () {
        console.log('log in clickHighFive');
        CharacterService.incCounter();
    }

});