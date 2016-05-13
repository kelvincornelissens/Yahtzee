Greenfoot = {
    GetRandomNumber: function () {
        return parseInt(Date.now() * Math.random()) % 6 + 1;
    }
};
Dice = function (index) {
    this.ind = index;
    this.value = 0;
    this.willRoll = 1;
    this.Roll = function () {
        this.value = Greenfoot.GetRandomNumber();
    }
};
Dices = {
    array: [],
    Roll: function () {
        for (i = 0; i < 5; i++)if (Dices.array[i].willRoll % 2)Dices.array[i].Roll();
        document.getElementById("i1").src = "img/" + Dices.array[0].value + ".png";
        document.getElementById("i2").src = "img/" + Dices.array[1].value + ".png";
        document.getElementById("i3").src = "img/" + Dices.array[2].value + ".png";
        document.getElementById("i4").src = "img/" + Dices.array[3].value + ".png";
        document.getElementById("i5").src = "img/" + Dices.array[4].value + ".png";
        toggleButtons(Validator.diceArrayToIntArray(this.array));
    },
    Validate: function (DiceArray) {
        if(Validator.isValidFullHouse(DiceArray)){
            console.log("Valid Full House");
        }
        else{
            console.log("Invalid Full House");
        }
    }
};
for (i = 0; i < 5; i++)Dices.array[i] = new Dice(i + 1);

function toggleButtons(da) {
    document.getElementById("acebtn").disabled = Validator.isValidOne(da) ? false : true;
    document.getElementById("twobtn").disabled = Validator.isValidTwo(da) ? false : true;
    document.getElementById("threebtn").disabled = Validator.isValidThree(da) ? false : true;
    document.getElementById("fourbtn").disabled = Validator.isValidFour(da) ? false : true;
    document.getElementById("fivebtn").disabled = Validator.isValidFive(da) ? false : true;
    document.getElementById("sixbtn").disabled = Validator.isValidSix(da) ? false : true;
    document.getElementById("threeofakindbtn").disabled = Validator.isValidThreeOfAKind(da) ? false : true;
    document.getElementById("fourofakindbtn").disabled = Validator.isValidFourOfAKind(da) ? false : true;
    document.getElementById("fullhousebtn").disabled = Validator.isValidFullHouse(da) ? false : true;
    document.getElementById("smallstraightbtn").disabled = Validator.isValidSmallStraight(da) ? false : true;
    document.getElementById("largestraightbtn").disabled = Validator.isValidLargeStraight(da) ? false : true;
    document.getElementById("yahtzeebtn").disabled = Validator.isValidYahtzee(da) ? false : true;
}