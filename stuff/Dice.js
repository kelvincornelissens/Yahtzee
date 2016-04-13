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
        document.getElementById("i1").src = Dices.array[0].value + ".png";
        document.getElementById("i2").src = Dices.array[1].value + ".png";
        document.getElementById("i3").src = Dices.array[2].value + ".png";
        document.getElementById("i4").src = Dices.array[3].value + ".png";
        document.getElementById("i5").src = Dices.array[4].value + ".png";
    },
    Yahtzee: function () {
        console.log("begin");
        setTimeout(function () {
                w = 0;
                Dices.Roll();
                w++;
                while (
                    !(
                        Dices.array[0].value == Dices.array[1].value &&
                        Dices.array[1].value == Dices.array[2].value &&
                        Dices.array[2].value == Dices.array[3].value &&
                        Dices.array[3].value == Dices.array[4].value
                    )
                    ) {
                    Dices.Roll();
                    w++;
                }
                document.getElementById("i1").src = Dices.array[0].value + ".png";
                document.getElementById("i2").src = Dices.array[1].value + ".png";
                document.getElementById("i3").src = Dices.array[2].value + ".png";
                document.getElementById("i4").src = Dices.array[3].value + ".png";
                document.getElementById("i5").src = Dices.array[4].value + ".png";
                setTimeout(console.log("end " + Dices.array[0].value + " | " + w + "w"), 0);
            }
            , 0);
    }
};
for (i = 0; i < 5; i++)Dices.array[i] = new Dice(i + 1);