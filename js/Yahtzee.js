imageswitch = function(dice, block){
    var een = "<img src=\"img/een.png\">";
    var twee = "<img src=\"img/twee.png\">";
    var drie = "<img src=\"img/drie.png\">";
    var vier = "<img src=\"img/vier.png\">";
    var vijf = "<img src=\"img/vijf.png\">";
    var zes = "<img src=\"img/zes.png\">";

    switch(dice){
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
            alert(42);
            break;
    }
};

setTimeout(function(){
    var Button = document.getElementById("rollBtn");
    var count = 0;
    r1=0,r2=0,r3=0,r4=0,r5=0;

    Button.onclick=function(){
        var d = new Date();
        var dice1 = Math.round(Math.random()* d.getTime())%6+1;
        var dice2 = Math.round(Math.random()* d.getTime())%6+1;
        var dice3 = Math.round(Math.random()* d.getTime())%6+1;
        var dice4 = Math.round(Math.random()* d.getTime())%6+1;
        var dice5 = Math.round(Math.random()* d.getTime())%6+1;

        console.log(dice1 + ' ' + dice2 + ' ' + dice3 + ' ' + dice4 + ' ' + dice5);

        imageswitch(dice1,"block1");
        imageswitch(dice2,"block2");
        imageswitch(dice3,"block3");
        imageswitch(dice4,"block4");
        imageswitch(dice5,"block5");

    };

    $("#rollBtn").click(function(){
            count++;
            console.log(count);
            if(count === 3){
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
if(subtotal > 63) valueBonus = 30;

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



