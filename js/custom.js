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
        document.getElementById("largeStraight").innerHTML = Score;
        return Score;
    },
    CountYahtzee: function (DiceArray) {
        Score = 0;
        if(Validator.isValidYahtzee(Validator.diceArrayToIntArray(DiceArray))){
            Score = 50;
        }
        document.getElementById("yahtzeeScore").innerHTML = Score;
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




