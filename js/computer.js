game.computer.number.generate = (min, max) => {
    return parseInt(Math.random() * (max - min) + min); 
}

game.computer.number.compare = (num) => {

    if (num > game.randomnumber) {
        return 1;
    } else if (num < game.randomnumber) {
        return -1;
    } else if (num == game.randomnumber) {
        return 0;
    }

}