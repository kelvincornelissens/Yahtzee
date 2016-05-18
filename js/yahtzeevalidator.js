Validator = {
    diceArrayToIntArray: function (d) {
        return [d[0].value, d[1].value, d[2].value, d[3].value, d[4].value];
    },
    isValidOne: function (dices) {
        var val = 1;
        return dices[0] == val || dices[1] == val || dices[2] == val || dices[3] == val || dices[4] == val;
    },
    isValidTwo: function (dices) {
        var val = 2;
        return dices[0] == val || dices[1] == val || dices[2] == val || dices[3] == val || dices[4] == val;
    },
    isValidThree: function (dices) {
        var val = 3;
        return dices[0] == val || dices[1] == val || dices[2] == val || dices[3] == val || dices[4] == val;
    },
    isValidFour: function (dices) {
        var val = 4;
        return dices[0] == val || dices[1] == val || dices[2] == val || dices[3] == val || dices[4] == val;
    },
    isValidFive: function (dices) {
        var val = 5;
        return dices[0] == val || dices[1] == val || dices[2] == val || dices[3] == val || dices[4] == val;
    },
    isValidSix: function (dices) {
        var val = 6;
        return dices[0] == val || dices[1] == val || dices[2] == val || dices[3] == val || dices[4] == val;
    },
    isValidThreeOfAKind: function (dices) {
        var val = 2;
        var same = [0, 0, 0, 0, 0, 0];
        same[dices[0]]++;
        same[dices[1]]++;
        same[dices[2]]++;
        same[dices[3]]++;
        same[dices[4]]++;
        return same[0] > val || same[1] > val || same[2] > val || same[3] > val || same[4] > val || same[5] > val;
    },
    isValidFourOfAKind: function (dices) {
        var val = 3;
        var same = [0, 0, 0, 0, 0, 0];
        same[dices[0] - 1]++;
        same[dices[1] - 1]++;
        same[dices[2] - 1]++;
        same[dices[3] - 1]++;
        same[dices[4] - 1]++;
        return same[0] > val || same[1] > val || same[2] > val || same[3] > val || same[4] > val || same[5] > val;
    },
    isValidFullHouse: function (dices) {
        var val = false;
        var same = [0, 0, 0, 0, 0, 0];
        same[dices[0] - 1]++;
        same[dices[1] - 1]++;
        same[dices[2] - 1]++;
        same[dices[3] - 1]++;
        same[dices[4] - 1]++;
        if (same[0] > 2)val = same[1] > 1 || same[2] > 1 || same[3] > 1 || same[4] > 1 || same[5] > 1 || val;
        if (same[1] > 2)val = same[0] > 1 || same[2] > 1 || same[3] > 1 || same[4] > 1 || same[5] > 1 || val;
        if (same[2] > 2)val = same[0] > 1 || same[1] > 1 || same[3] > 1 || same[4] > 1 || same[5] > 1 || val;
        if (same[3] > 2)val = same[0] > 1 || same[1] > 1 || same[2] > 1 || same[4] > 1 || same[5] > 1 || val;
        if (same[4] > 2)val = same[0] > 1 || same[1] > 1 || same[2] > 1 || same[3] > 1 || same[5] > 1 || val;
        if (same[5] > 2)val = same[0] > 1 || same[1] > 1 || same[2] > 1 || same[3] > 1 || same[4] > 1 || val;
        return val;
    },
    isValidSmallStraight: function (dices) {
        var same = [0, 0, 0, 0, 0, 0];
        same[dices[0] - 1]++;
        same[dices[1] - 1]++;
        same[dices[2] - 1]++;
        same[dices[3] - 1]++;
        same[dices[4] - 1]++;
        return (same[2]>0&&same[3]>0)&&((same[0]>0&&same[1]>0)||(same[1]>0&&same[4]>0)||(same[4]>0&&same[5]>0));
    },
    isValidLargeStraight: function (dices) {
        var same = [0, 0, 0, 0, 0, 0];
        same[dices[0] - 1]++;
        same[dices[1] - 1]++;
        same[dices[2] - 1]++;
        same[dices[3] - 1]++;
        same[dices[4] - 1]++;
        return same[1] == 1 && same[2] == 1 && same[3] == 1 && same[4] == 1 && (same[0] == 1 || same[5] == 1);
    },
    isValidYahtzee: function (dices) {
        return dices[0] == dices[1] && dices[1] == dices[2] && dices[2] == dices[3] && dices[3] == dices[4];
    }
};