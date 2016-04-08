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
        //console.log(this.ind);
        //document.getElementById("i" + this.ind).src = this.value + ".png";
    }
};
Dices = {
    array: [],
    Roll: function () {
        for (i = 0; i < 10; i++)if (Dices.array[i].willRoll % 2)Dices.array[i].Roll();
        document.getElementById("i1").src = Dices.array[0].value;
        document.getElementById("i2").src = Dices.array[1].value;
        document.getElementById("i3").src = Dices.array[2].value;
        document.getElementById("i4").src = Dices.array[3].value;
        document.getElementById("i5").src = Dices.array[4].value;
        document.getElementById("i6").src = Dices.array[5].value;
        document.getElementById("i7").src = Dices.array[6].value;
        document.getElementById("i8").src = Dices.array[7].value;
        document.getElementById("i9").src = Dices.array[8].value;
        document.getElementById("i10").src = Dices.array[9].value;
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
                        Dices.array[3].value == Dices.array[4].value &&
                        Dices.array[4].value == Dices.array[5].value &&
                        Dices.array[5].value == Dices.array[6].value &&
                        Dices.array[6].value == Dices.array[7].value &&
                        Dices.array[7].value == Dices.array[8].value &&
                        Dices.array[8].value == Dices.array[9].value
                    )
                    ) {
                    Dices.Roll();
                    w++;
                }
                document.getElementById("i1").src = Dices.array[0].value;
                document.getElementById("i2").src = Dices.array[1].value;
                document.getElementById("i3").src = Dices.array[2].value;
                document.getElementById("i4").src = Dices.array[3].value;
                document.getElementById("i5").src = Dices.array[4].value;
                document.getElementById("i6").src = Dices.array[5].value;
                document.getElementById("i7").src = Dices.array[6].value;
                document.getElementById("i8").src = Dices.array[7].value;
                document.getElementById("i9").src = Dices.array[8].value;
                document.getElementById("i10").src = Dices.array[9].value;
                setTimeout(console.log("end " + Dices.array[0].value + " | " + w + "w"), 0);
            }
            , 0);
    }
};
for (i = 0; i < 10; i++)Dices.array[i] = new Dice(i + 1);