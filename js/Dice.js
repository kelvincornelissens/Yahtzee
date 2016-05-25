Greenfoot = {
    GetRandomNumber: function () {
        return parseInt(Date.now() * Math.random()) % 6 + 1;
    }
};
rolls = 0;
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
        for (var i = 0; i < 5; i++)if (Dices.array[i].willRoll % 2)Dices.array[i].Roll();
        document.getElementById("i1").src = "img/" + Dices.array[0].value + ".png";
        document.getElementById("i2").src = "img/" + Dices.array[1].value + ".png";
        document.getElementById("i3").src = "img/" + Dices.array[2].value + ".png";
        document.getElementById("i4").src = "img/" + Dices.array[3].value + ".png";
        document.getElementById("i5").src = "img/" + Dices.array[4].value + ".png";
        toggleButtons(Validator.diceArrayToIntArray(this.array));
    }
};
for (i = 0; i < 5; i++)Dices.array[i] = new Dice(i + 1);

function toggleButtons(da) {
    if (rolls ==2)document.getElementById("rollBtn").disabled = true;
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
    
    document.getElementById("acebtn").style.visibility = document.getElementById("aces").innerHTML.length == 0 ? 'visible' : 'hidden';
    document.getElementById("twobtn").style.visibility = document.getElementById("twos").innerHTML.length == 0 ? 'visible' : 'hidden';
    document.getElementById("threebtn").style.visibility = document.getElementById("threes").innerHTML.length == 0 ? 'visible' : 'hidden';
    document.getElementById("fourbtn").style.visibility = document.getElementById("fours").innerHTML.length == 0 ? 'visible' : 'hidden';
    document.getElementById("fivebtn").style.visibility = document.getElementById("fives").innerHTML.length == 0 ? 'visible' : 'hidden';
    document.getElementById("sixbtn").style.visibility = document.getElementById("sixes").innerHTML.length == 0 ? 'visible' : 'hidden';
    document.getElementById("threeofakindbtn").style.visibility = document.getElementById("threekind").innerHTML.length == 0 ? 'visible' : 'hidden';
    document.getElementById("fourofakindbtn").style.visibility = document.getElementById("fourkind").innerHTML.length == 0 ? 'visible' : 'hidden';
    document.getElementById("fullhousebtn").style.visibility = document.getElementById("fullhouse").innerHTML.length == 0 ? 'visible' : 'hidden';
    document.getElementById("smallstraightbtn").style.visibility = document.getElementById("smallStraight").innerHTML.length == 0 ? 'visible' : 'hidden';
    document.getElementById("largestraightbtn").style.visibility = document.getElementById("largeStraight").innerHTML.length == 0 ? 'visible' : 'hidden';
    document.getElementById("yahtzeebtn").style.visibility = document.getElementById("yahtzeeScore").innerHTML.length == 0 ? 'visible' : 'hidden';
}
function resetDices(){
    for (i = 0; i < 5; i++)Dices.array[i] = new Dice(i + 1);
    document.getElementById("i1").src = "img/0.png";
    document.getElementById("i2").src = "img/0.png";
    document.getElementById("i3").src = "img/0.png";
    document.getElementById("i4").src = "img/0.png";
    document.getElementById("i5").src = "img/0.png";
    rolls=0;
    document.getElementById('rollBtn').disabled=false;
}