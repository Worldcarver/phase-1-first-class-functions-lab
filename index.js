// Code your solution in this file!
const returnFirstTwoDrivers = function(names, firstTwo){
    names = ['Antonia', 'Nuru', 'Amari', 'Mo']
    return firstTwo=names.slice(0,2)
}

const returnLastTwoDrivers = function(names, lastTwo){
    names = ['Antonia', 'Nuru', 'Amari', 'Mo']
    return lastTwo=names.slice(2)
}

    
const selectingDrivers =[returnFirstTwoDrivers, returnLastTwoDrivers]
    
function createFareMultiplier(fare) {
    return function fareMultiplier(multiplier){
        return (fare*multiplier)
    }
}
const fareDoubler = function(fare){
    return (fare * 2);
}

const fareTripler = function(fare){
    return (fare * 3);
}
const selectDifferentDrivers = function (arrayOfDrivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(arrayOfDrivers)
}