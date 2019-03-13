// мой вариант
// let scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69,
//             34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61,
//             46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];

// let costs = [.25, .27, .25, .25, .25, .25, .33, .31, .25, .29,
//             .27, .22, .31, .25, .25, .33, .21, .25, .25, .25,
//             .28, .25, .24, .22, .20, .25, .30, .25, .24, .25,
//             .25, .25, .27, .25, .26, .29];

// function printAndGetHighScore (scores) {
//     scores.forEach(function (item, i, scores) {
//         console.log(`Bubble solution #${i} score: ${item}`);
//     });
//     let highScore = Math.max(...scores);
//     return highScore;    
// }               

// function getBestResults (scores, highScore) {
//     let bestSolutions = [];
//     scores.forEach(function (item, i, scores) {
//         if (item == highScore) {
//             bestSolutions.push(i);
//         }
//     });
//     return bestSolutions;
// }

// function getCheepestSolution (costs, bestSolutions) {
//     let cheepestSolutionCost = costs[bestSolutions[0]];
//     bestSolutions.forEach(function (item, i, mass) {
//         if (costs[item] < cheepestSolutionCost) {
//             cheepestSolutionCost = costs[item];
//         }
//     });
//     bestSolutions.forEach(function (item, i, mass) {
//         if (costs[item] == cheepestSolutionCost) {
//             console.log("The cheepest solution number: " + item);
//         }
//     });
//     return cheepestSolutionCost;
// }

// let highScore = printAndGetHighScore (scores);
// console.log(`Bubbles tests: ${scores.length}`);
// console.log(`Highest bubble score: ${highScore}`);

// let bestSolutions = getBestResults (scores, highScore);
// console.log(`Solutions with the highest score: ${bestSolutions.join(', ')}`);

// let cheepestSolutionCost = getCheepestSolution (costs, bestSolutions);
// console.log('The cheepest solution costs: ' + cheepestSolutionCost);
// вариант из книги
var scores  = [60, 50, 60, 58, 54, 54,
                58, 50, 52, 54, 48, 69,
                34, 55, 51, 52, 44, 51,
                69, 64, 66, 55, 52, 61,
                46, 31, 57, 52, 44, 18,
                41, 53, 55, 61, 51, 44];

var costs = [.25, .27, .25, .25, .25, .25, .33, .31, .25, .29,
             .27, .22, .31, .25, .25, .33, .21, .25, .25, .25,
             .28, .25, .24, .22, .20, .25, .30, .25, .24, .25,
             .25, .25, .27, .25, .26, .29];

function printAndGetHighScore (scores) {
    var highScore = 0;
    var output;
    for (var i = 0; i < scores.length; i++) {
        output = "Bubble solution #" + i + " score: " + scores[i];
        console.log(output);
        if (scores[i] > highScore) {
            highScore = scores[i];
        }
    }
    return highScore;
}

function getBestResults (scores, highScore) {
    var bestSolutions = [];
    for (var i = 0; i < scores.length; i++) {
        if (scores[i] == highScore) {
            bestSolutions.push(i);
        }
    }
    return bestSolutions;
}

function getMostCostEffectiveSolution (scores, costs, highscore) {
    var cost = 100;
    var index;
    for (var i = 0; i < scores.length; i++) {
        if (scores[i] == highScore) {
            if (cost > costs[i]) {
                index = i;
                cost = costs[i];
            }
        }
    }
    return index;
}

var highScore = printAndGetHighScore (scores);
console.log("Bubbles tests: " + scores.length);
console.log("Highest bubble score: " + highScore);

var bestSolutions = getBestResults (scores, highScore);
console.log("Solutions with the highest score: " + bestSolutions);

var mostCostEffective = getMostCostEffectiveSolution (scores, costs, highScore);
console.log("Bubble Solution #" + mostCostEffective + " is the most cost effective");