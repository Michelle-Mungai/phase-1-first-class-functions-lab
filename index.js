// Code your solution in this file!
const returnFirstTwoDrivers = function anonymousFunction(){
    return (["Antonia", "Nuru"]);
}
const returnLastTwoDrivers = function anonymousFunction(){
    return (["Amari", "Mo"]);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(number){
    return function (cash){
    return cash * number
    }
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function (arrayofDrivers, driversToReturn){
    return driversToReturn(arrayofDrivers);
}