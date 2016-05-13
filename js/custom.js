Count = {
    CountAce: function (DiceArray) {
        var Score = 0;
        for(i = 0; i < DiceArray.length; i++){
            if(DiceArray[i].value === 1){
                Score+=1;
                document.getElementById("aces").innerHTML = Score;
                return Score;
            }
        }
    },
    CountTwo: function (DiceArray) {
        Score = 0;
        for(i = 0; i < DiceArray.length; i++){
            if(DiceArray[i].value === 2){
                Score+=2;
                return Score;
            }
        }
    },
    CountThree: function (DiceArray) {
        Score = 0;
        for(i = 0; i < DiceArray.length; i++){
            if(DiceArray[i].value === 3){
                Score+=3;
                return Score;
            }
        }
    },
    CountFour: function (DiceArray) {
        Score = 0;
        for(i = 0; i < DiceArray.length; i++){
            if(DiceArray[i].value === 4){
                Score+=4;
                return Score;
            }
        }
    },
    CountFive: function (DiceArray) {
        Score = 0;
        for(i = 0; i < DiceArray.length; i++){
            if(DiceArray[i].value === 5){
                Score+=5;
                return Score;
            }
        }
    },
    CountSix: function (DiceArray) {
        Score = 0;
        for(i = 0; i < DiceArray.length; i++){
            if(DiceArray[i].value === 6){
                Score+=6;
                return Score;
            }
        }
    }
};




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