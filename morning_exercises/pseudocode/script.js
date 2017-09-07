//*************************
// Problem 1:
// Barrels O' RUM

var barrels = function(small, large, total){
  let smallB = 60;
  let largeB = (total - (small * smallB)) / large;

  return largeB;

};

barrels(2, 3, 825);
//=> '235'

//*************************
// Problem 2:
// Sailing the Seas

var shipFuelCost = function(fuelPrice, milesPerGallon){
  let earthC = 24901;
  let galUsed = earthC / milesPerGallon;
  let total = galUsed * fuelPrice;

  return total;
};

shipFuelCost(3, 12);
//=> '6225.25'

//*************************
// Problem 3:
// GROG

var calcFruitJuice = function(costcoGal, costcoPerc, kirkGal, kirkPerc){
  let costcoT = (costcoPerc / 100) * costcoGal;
  let kirkT = (kirkPerc / 100) * kirkGal;
  let grandPercT = costcoT + kirkT;
  let galT = costcoGal + kirkGal;
  let finalPerc = (grandPercT) / (galT);
  
  return finalPerc;
};

calcFruitJuice(3, 20, 2, 55);
//=> '0.34'

//DO NOT EDIT BELOW THIS LINE//
module.exports = {
  barrels: barrels,
  shipFuelCost: shipFuelCost,
  calcFruitJuice: calcFruitJuice
};


