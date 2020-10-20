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

var wrapper = document.getElementById("wrapper")
var form = document.getElementById("form")
var number = document.getElementById("number")
var submitnumber = document.getElementById("submitnumber")
var winstatus = document.getElementById("winstatus")
var restart = document.getElementById("restart")

var gameTemp = `
    <div id="winstatus" class="winstatus"></div>

    <form id="form">
        <div class="text-input">
            <input type="number" id="number" min="10" max="100" placeholder="Enter Your Guessed Number" required>
            <label for="input1">Guess Number</label>
        </div>
        <br><br>
        <button type="submit" class="submitnumber">Guess</button>
    </form>
`;

game._init = () => {
    game.randomnumber = game.computer.number.generate(game.mingenerate, game.maxgenerate)
    setTimeout(() => {
        game.eventListener()
    }, 1000);
}

game.start = () => {
    // wrapper.innerHTML = gameTemp;
    form.style.display = "block"
    winstatus.style.display = "block"
    start.style.display = "none"
    restart.style.display = "none"

    game._init()
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
