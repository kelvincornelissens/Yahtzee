imageswitch = function (dice, block, obj) {
    var een = "<img src=\"img/een.png\" onclick=\"" + obj + ".toggle++;\">";
    var twee = "<img src=\"img/twee.png\" onclick=\"" + obj + ".toggle++;\">";
    var drie = "<img src=\"img/drie.png\" onclick=\"" + obj + ".toggle++;\">";
    var vier = "<img src=\"img/vier.png\" onclick=\"" + obj + ".toggle++;\">";
    var vijf = "<img src=\"img/vijf.png\" onclick=\"" + obj + ".toggle++;\">";
    var zes = "<img src=\"img/zes.png\" onclick=\"" + obj + ".toggle++;\">";

    switch (dice) {
        case 1:
            document.getElementById(block).innerHTML = een;
            break;
        case 2:
            document.getElementById(block).innerHTML = twee;
            break;
        case 3:
            document.getElementById(block).innerHTML = drie;
            break;
        case 4:
            document.getElementById(block).innerHTML = vier;
            break;
        case 5:
            document.getElementById(block).innerHTML = vijf;
            break;
        case 6:
            document.getElementById(block).innerHTML = zes;
            break;
        case "default":
            alert(420);
            break;
    }
};
Dice = function () {
    this.value = 0;
    this.toggle = 1;
    this.Roll = function () {
        this.value = this.toggle % 2 ? this.value : this.value = Math.round(Math.random() * Date().now()) % 6 + 1;
    }
};
setTimeout(function () {
    var Button = document.getElementById("rollBtn");
    var count = 0;
    var dices = [new Dice(), new Dice(), new Dice(), new Dice(), new Dice()];
    Button.onclick = function () {
        dices[0].Roll();
        dices[1].Roll();
        dices[2].Roll();
        dices[3].Roll();
        dices[4].Roll();

        console.log(dices[0].value + ' ' + dices[1].value + ' ' + dices[2].value + ' ' + dices[3].value + ' ' + dices[4].value);

        imageswitch(dices[0].value, "block1", "dices[0]");
        imageswitch(dices[1].value, "block2", "dices[1]");
        imageswitch(dices[2].value, "block3", "dices[2]");
        imageswitch(dices[3].value, "block4", "dices[3]");
        imageswitch(dices[4].value, "block5", "dices[4]");

    };

    $("#rollBtn").click(function () {
            count++;
            console.log(count);
            if (count === 3) {
                $("#rollBtn").prop('disabled', true);
            }
        }
    );

}, 0);


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



