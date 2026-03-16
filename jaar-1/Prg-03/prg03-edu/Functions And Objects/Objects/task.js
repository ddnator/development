let dish = {
    name: 'spaghetti',
    scores: [3, 5, 2, 2, 4],
    addScore: function (number) {
        this.scores.push(number);
    },
    calculateAverageScore: function () {
        let totalScore = 0;
        for (const number of this.scores) {
            totalScore += number;
        }
        averageScore = totalScore / this.scores.length
        return averageScore;
    }
};