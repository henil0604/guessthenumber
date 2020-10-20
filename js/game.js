var game = {}

game.computer = {}
game.user = {}

game.computer.number = {}

game.user.compare = {}
game.user.html = {}

game.randomnumber = 0
game.compare = 0
game.mingenerate = 10
game.maxgenerate = 100

var form = document.getElementById("form")
var number = document.getElementById("number")
var submitnumber = document.getElementById("submitnumber")
var winstatus = document.getElementById("winstatus")

game._init = () => {
    game.randomnumber = game.computer.number.generate(game.mingenerate, game.maxgenerate)
    game.eventListener()
}


game.eventListener = () => {

    form.addEventListener("submit", (e) => {
        e.preventDefault()

        if(number.value != ""){
            game.compare = game.computer.number.compare(parseInt(number.value))
            game.user.compare._init(game.compare)
        }

        number.value = ""
    });
    
}

game.restart = () => {
    game.maxgenerate += 10
    game.user.html.changeInputMinMax(game.mingenerate, game.maxgenerate)
    game.user.html.restart()
    game._init()
    game.user.html.changeStatus("Game Restarted", 2000)
}
