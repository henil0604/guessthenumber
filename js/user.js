game.user.compare._init = (compare) => {

    if (compare == -1) {
        game.user.compare.less()
    } else if (compare == 0) {
        game.user.compare.equal()
    } else if (compare == 1) {
        game.user.compare.grater()
    }
    
}

game.user.compare.less = () => {
    game.user.html.changeStatus("Entered Number is Less Then Computer Generated Number!!! Choose Some Higher Number...")
}

game.user.compare.equal = () => {
    game.user.html.changeStatus("YAY!!! You Guessed The Number...")
    
    setTimeout(() => {
        game.user.html.addrestart()
    }, 3000);
}

game.user.compare.grater = () => {
    game.user.html.changeStatus("Entered Number is Grater Then Computer Generated Number!!! Choose Some Lower Number...")
}

game.user.html.changeStatus = (str, timer=null) => {
    winstatus.innerHTML = str

    if (timer != null) {
        setTimeout(() => {
            winstatus.innerHTML = ""    
        }, timer);
    }
}

game.user.html.restart = () => {
    form.style.display = "block"
    winstatus.style.display = "block"
    start.style.display = "none"
    restart.style.display = "none"
    winstatus.innerHTML = ""
}

game.user.html.addrestart = () => {
    form.style.display = "none"
    winstatus.style.display = "none"
    start.style.display = "none"
    restart.style.display = "block"
}

game.user.html.changeInputMinMax = (min, max) => {
    number.setAttribute("min", min)
    number.setAttribute("max", max)
}
