const dishScores = [5, 4, 1, 3, 3, 4, 2, 4, 1];


function addScore(number1, number2) {
    //Schrijf de code zoals gevraagd in de beschrijving;
    newNumber = number1 + number2;
    return newNumber;
}


function calculateAverageScore(array) {
    //Schrijf de code zoals gevraagd in de beschrijving
    totalScore = 0;
    for (const number of array) {
        totalScore += number;
    }
    totalScore /= array.length
    return totalScore;
}