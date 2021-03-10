export function generateRandomNumber(count, arr) {
    return arr.slice(0, count - 2).reduce((acc, cur) => acc + cur, 0);
}

export function generateRandomNumbersArray(count) {
    return Array.from({length: count}).map(() => 1 + Math.floor(10 * Math.random()));
}

export function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


