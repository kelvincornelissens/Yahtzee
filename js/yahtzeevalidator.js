Validator = {
    diceArrayToIntArray: function (d) {
        return [d[0].value, d[1].value, d[2].value, d[3].value, d[4].value];
    },
    isValidOne: function (dices) {
        var val = 1;
        console.log('1?');
        console.log(dices);
        var result = dices[0] == val || dices[1] == val || dices[2] == val || dices[3] == val || dices[4] == val;
        console.log(result);
        return result;
    },
    isValidTwo: function (dices) {
        var val = 2;
        console.log('2?');
        console.log(dices);
        var result = dices[0] == val || dices[1] == val || dices[2] == val || dices[3] == val || dices[4] == val;
        console.log(result);
        return result;
    },
    isValidThree: function (dices) {
        var val = 3;
        console.log('3?');
        console.log(dices);
        var result = dices[0] == val || dices[1] == val || dices[2] == val || dices[3] == val || dices[4] == val;
        console.log(result);
        return result;
    },
    isValidFour: function (dices) {
        var val = 4;
        console.log('4?');
        console.log(dices);
        var result = dices[0] == val || dices[1] == val || dices[2] == val || dices[3] == val || dices[4] == val;
        console.log(result);
        return result;
    },
    isValidFive: function (dices) {
        var val = 5;
        console.log('5?');
        console.log(dices);
        var result = dices[0] == val || dices[1] == val || dices[2] == val || dices[3] == val || dices[4] == val;
        console.log(result);
        return result;
    },
    isValidSix: function (dices) {
        var val = 6;
        console.log('6?');
        console.log(dices);
        var result = dices[0] == val || dices[1] == val || dices[2] == val || dices[3] == val || dices[4] == val;
        console.log(result);
        return result;
    },
    isValidThreeOfAKind: function (dices) {
        console.log('3ofakind?');
        console.log(dices);
        var val = 2;
        var same = [0, 0, 0, 0, 0, 0];
        same[dices[0] - 1]++;
        same[dices[1] - 1]++;
        same[dices[2] - 1]++;
        same[dices[3] - 1]++;
        same[dices[4] - 1]++;
        console.log(same);
        var result = same[0] > val || same[1] > val || same[2] > val || same[3] > val || same[4] > val || same[5] > val;
        console.log(result);
        return result;
    },
    isValidFourOfAKind: function (dices) {
        console.log('4ofakind?');
        console.log(dices);
        var val = 3;
        var same = [0, 0, 0, 0, 0, 0];
        same[dices[0] - 1]++;
        same[dices[1] - 1]++;
        same[dices[2] - 1]++;
        same[dices[3] - 1]++;
        same[dices[4] - 1]++;
        console.log(same);
        var result = same[0] > val || same[1] > val || same[2] > val || same[3] > val || same[4] > val || same[5] > val;
        console.log(result);
        return result;
    },
    isValidFullHouse: function (dices) {
        console.log('fullhouse?');
        console.log(dices);
        var val = false;
        var same = [0, 0, 0, 0, 0, 0];
        same[dices[0] - 1]++;
        same[dices[1] - 1]++;
        same[dices[2] - 1]++;
        same[dices[3] - 1]++;
        same[dices[4] - 1]++;
        console.log(same);
        if (same[0] > 2)val = same[1] > 1 || same[2] > 1 || same[3] > 1 || same[4] > 1 || same[5] > 1 || val;
        if (same[1] > 2)val = same[0] > 1 || same[2] > 1 || same[3] > 1 || same[4] > 1 || same[5] > 1 || val;
        if (same[2] > 2)val = same[0] > 1 || same[1] > 1 || same[3] > 1 || same[4] > 1 || same[5] > 1 || val;
        if (same[3] > 2)val = same[0] > 1 || same[1] > 1 || same[2] > 1 || same[4] > 1 || same[5] > 1 || val;
        if (same[4] > 2)val = same[0] > 1 || same[1] > 1 || same[2] > 1 || same[3] > 1 || same[5] > 1 || val;
        if (same[5] > 2)val = same[0] > 1 || same[1] > 1 || same[2] > 1 || same[3] > 1 || same[4] > 1 || val;
        console.log(val);
        return val;
    },
    isValidSmallStraight: function (dices) {
        console.log('smallstraight?');
        console.log(dices);
        var same = [0, 0, 0, 0, 0, 0];
        same[dices[0] - 1]++;
        same[dices[1] - 1]++;
        same[dices[2] - 1]++;
        same[dices[3] - 1]++;
        same[dices[4] - 1]++;
        console.log(same);
        var result = (same[2] > 0 && same[3] > 0) && ((same[0] > 0 && same[1] > 0) || (same[1] > 0 && same[4] > 0) || (same[4] > 0 && same[5] > 0));
        console.log(result);
        return result;
    },
    isValidLargeStraight: function (dices) {
        console.log('largestraight?');
        console.log(dices);
        var same = [0, 0, 0, 0, 0, 0];
        same[dices[0] - 1]++;
        same[dices[1] - 1]++;
        same[dices[2] - 1]++;
        same[dices[3] - 1]++;
        same[dices[4] - 1]++;
        console.log(same);
        var result = same[1] == 1 && same[2] == 1 && same[3] == 1 && same[4] == 1 && (same[0] == 1 || same[5] == 1);
        console.log(result);
        return result;
    },
    isValidYahtzee: function (dices) {
        console.log('yahtzee?');
        console.log(dices);
        var result = dices[0] == dices[1] && dices[1] == dices[2] && dices[2] == dices[3] && dices[3] == dices[4];
        console.log(result);
        return result;
    }
};