//feetToMile // info: 1 mile = 5280 feet

function feetToMile(feet) {
    var mile = feet / 5280;
    return mile;
}

var result = feetToMile(90000);
result = result.toFixed(2) //**extra part for bonus marks .toFixed */
console.log("Mile is:", result)



//woodCalculator info: chair = 1 ci, table = 3 ci; bed = 5 ci (ci = cubic inches)

function woodCalculator(chair, table, bed) {
    var chairWoodCount = chair * 1;
    var tableWoodCount = table * 3;
    var bedWoodCount = bed * 5;
    var totalWood = chairWoodCount + tableWoodCount + bedWoodCount;
    return totalWood;
}

var totalWoodResult = woodCalculator(11,2,3);
console.log("Total Wood Need in Cubic Inches:", totalWoodResult);
// **put extra speech "Total Wood Need in Cubic Inches:" for bonus*/




//brickCalculator info: firstTenFloor: noOfFloorx15x100 ; secondTenFloor: noOfFloorx12x100 ; restofTopFloor: noOfFloorx10x100; floor must be greater than 0.


function brickCalculator(numberOfFloor){
    var firstTenFloor = 10;
    var secondTenFloor = 10;
    if (numberOfFloor>20){
        numberOfBricks = (firstTenFloor * 15 * 1000) + (secondTenFloor * 12 * 1000) +  ((numberOfFloor-20)*10*1000) ;  
    }
    else if(numberOfFloor>10){
        numberOfBricks =  (firstTenFloor * 15 * 1000)+  ((numberOfFloor-10)*12*1000) ;
    }
    else if(numberOfFloor>0){
        numberOfBricks = (numberOfFloor * 15 * 1000);
    }
    else {   
        console.log("Number of floor > 0");
    }
    return numberOfBricks;
}
var totalBreakCount = brickCalculator(11);
console.log("Total Bricks:", totalBreakCount);

//**put console.log extra inside else statement. */




//tinyFriend

function tinyFriend(names) {
    var shortest = names[0];

    for (var i = 0; i < names.length; i++) {
        var currentName = names[i];
        if (currentName.length < shortest.length) {
            shortest = currentName;
        }
    }
    return shortest;
}


var shortestNameFriend = tinyFriend(['bruno', 'pedro', 'ana', 'rio', 'yen', 'je']);
console.log("My tiny named friend is:", shortestNameFriend);

//**finish with extra speech My tiny named friend is: */