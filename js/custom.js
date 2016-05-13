Count = {
    CountAce: function (DiceArray) {
        var Score = 0;
        for(i = 0; i < DiceArray.length; i++){
            if(DiceArray[i].value === 1){
                Score++;
            }

        }
        document.getElementById("aces").innerHTML = Score;
        return Score;
    },
    CountTwo: function (DiceArray) {
        Score = 0;
        for(i = 0; i < DiceArray.length; i++){
            if(DiceArray[i].value === 2){
                Score+=2;

            }
        }
        document.getElementById("twos").innerHTML = Score;
        return Score;
    },
    CountThree: function (DiceArray) {
        Score = 0;
        for(i = 0; i < DiceArray.length; i++){
            if(DiceArray[i].value === 3){
                Score+=3;

            }
        }
        document.getElementById("threes").innerHTML = Score;
        return Score;
    },
    CountFour: function (DiceArray) {
        Score = 0;
        for(i = 0; i < DiceArray.length; i++){
            if(DiceArray[i].value === 4){
                Score+=4;

            }
        }
        document.getElementById("fours").innerHTML = Score;
        return Score;
    },
    CountFive: function (DiceArray) {
        Score = 0;
        for(i = 0; i < DiceArray.length; i++){
            if(DiceArray[i].value === 5){
                Score+=5;
            }
        }
        document.getElementById("fives").innerHTML = Score;
        return Score;
    },
    CountSix: function (DiceArray) {
        Score = 0;
        for(i = 0; i < DiceArray.length; i++){
            if(DiceArray[i].value === 6){
                Score+=6;
            }
        }
        document.getElementById("sixes").innerHTML = Score;
        return Score;
    },
    CountThreeOfAKind: function (DiceArray) {
        Score = 0;
        if(Validator.isValidThreeOfAKind(Validator.diceArrayToIntArray(DiceArray))){
            for(i = 0; i < DiceArray.length; i++){
                Score += DiceArray[i].value;
            }
        }
        document.getElementById("threekind").innerHTML = Score;
        return Score;
    },
    CountFourOfAKind: function (DiceArray) {
        Score = 0;
        if(Validator.isValidFourOfAKind(Validator.diceArrayToIntArray(DiceArray))){
            for(i = 0; i < DiceArray.length; i++){
                Score += DiceArray[i].value;
            }
        }
        document.getElementById("fourkind").innerHTML = Score;
        return Score;
    },
    CountFullHouse: function (DiceArray) {
        Score = 0;
        if(Validator.isValidFullHouse(Validator.diceArrayToIntArray(DiceArray))){
            Score = 25;
        }
        document.getElementById("fullhouse").innerHTML = Score;
        return Score;
    },
    CountSmallStraight: function (DiceArray) {
        Score = 0;
        if(Validator.isValidSmallStraight(Validator.diceArrayToIntArray(DiceArray))){
            Score = 30;
        }
        document.getElementById("smallStraight").innerHTML = Score;
        return Score;
    },
    CountLargeStraight: function (DiceArray) {
        Score = 0;
        if(Validator.isValidLargeStraight(Validator.diceArrayToIntArray(DiceArray))){
            Score = 40;
        }
        document.getElementById("smallStraight").innerHTML = Score;
        return Score;
    },
    CountYahtzee: function (DiceArray) {
        Score = 0;
        if(Validator.isValidYahtzee(Validator.diceArrayToIntArray(DiceArray))){
            Score = 50;
        }
        document.getElementById("yahtzee").innerHTML = Score;
        return Score;
    },
    CountChance: function (DiceArray) {
        Score = 0;
        for(i = 0; i < DiceArray.length; i++){
            Score += DiceArray[i].value;
        }
        document.getElementById("chance").innerHTML = Score;
        return Score;
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
/*document.getElementById("aces").innerHTML = valueAce;
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
document.getElementById("total").innerHTML = valueTotal;*/