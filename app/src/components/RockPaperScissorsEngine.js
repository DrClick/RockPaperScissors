define(function(require, exports, module) {
    "use strict";

    /*
     this table handles the markov model
     R   P   S (next move)
     R   0   0   0
     (last)P   0   0   0
     S   0   0   0
     */
    var moveNames = ['rock', 'paper', 'scissors'];
    var markov = [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]];


    function suggestMove(markov, player, opponent) {
        var justReturnRandom = Math.random() > .92;

        //sometimes just give a random result or if there is not enough info
        if (player.length < 2 || justReturnRandom) return Math.floor(3 * Math.random());

        var playerLastMove = player[player.length - 1];
        var playerSecondLastMove = player[player.length - 2];

        var opponentLastMove = opponent[opponent.length - 1];
        var opponentSecondLastMove = opponent[opponent.length - 2];

        var secondLastMoveIndex = opponentSecondLastMove * 3 + playerSecondLastMove;
        console.log(secondLastMoveIndex);
        markov[secondLastMoveIndex][playerLastMove]++;

        //lookup
        var prediction = Math.max.apply(null, markov[playerSecondLastMove]);
        return (prediction + 1) % 3;
    }


    var player = [0, 1, 1, 0, 2, 2, 1, 0, 0, 1, 2, 2, 1, 0, 0, 1, 2, 0, 0];
    var opponent = [2, 1, 2, 0, 2, 0, 0, 2, 2, 0, 0, 2, 2, 1, 2, 2, 2, 1, 2];

    for (var i = 0; i < player.length; i++) {
        var playerHistory = player.slice(0, i + 1);
        var opponentHistory = opponent.slice(0, i + 1);
        console.log(moveNames[suggestMove(markov, playerHistory, opponentHistory)]);
        console.log(markov);
    }


    module.exports = {
        suggest: suggestMove,
        moveNames: moveNames,
        model: markov
    }

});