


// Behaalbare scores
valueAce = 10;
valueTwos = 20;
valueThrees = 30;
valueFours = 40;
valueFives = 50;
valueSixes = 60;
subtotal = valueAce + valueTwos + valueThrees + valueFours + valueFives + valueSixes;
valueBonus = 0;
if (subtotal > 63) valueBonus = 30;

valueThreeKind = 30;
valueFourKind = 40;
valueFullHouse = 25;
valueSmallStr = 30;
valueLargeStr = 40;
valueChance = 50;
valueYahtzee = 60;
valueTotalUpper = valueAce + valueTwos + valueThrees + valueFours + valueFives + valueSixes + valueBonus;
valueTotal = valueTotalUpper + valueThreeKind + valueFourKind + valueFullHouse + valueSmallStr + valueLargeStr + valueChance + valueYahtzee;

// Zet score in tabel
document.getElementById("aces").innerHTML = valueAce;
document.getElementById("twos").innerHTML = valueTwos;
document.getElementById("threes").innerHTML = valueThrees;
document.getElementById("fours").innerHTML = valueFours;
document.getElementById("fives").innerHTML = valueFives;
document.getElementById("sixes").innerHTML = valueSixes;
document.getElementById("threekind").innerHTML = valueThreeKind;
document.getElementById("fourkind").innerHTML = valueFourKind;
document.getElementById("fullhouse").innerHTML = valueFullHouse;
document.getElementById("smallStraight").innerHTML = valueSmallStr;
document.getElementById("largeStraight").innerHTML = valueLargeStr;
document.getElementById("chance").innerHTML = valueChance;
document.getElementById("yahtzeeScore").innerHTML = valueYahtzee;
document.getElementById("totalUpper").innerHTML = valueTotalUpper;
document.getElementById("bonus").innerHTML = valueBonus;
document.getElementById("total").innerHTML = valueTotal;



