let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencompchoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIDx = Math.floor(Math.random() * 3);
    return options[randIDx];

}

const drawgame = () => {
    // console.log("game was draw");
    msg.innerText = "game draw";
    msg.style.backgroundColor = "#081b31";
}

const showwinner = ((userwin, userchoice, compchoices) => {
    if (userwin) {
        msg.innerText = `you win! your  ${userchoice} beats ${compchoices}`;
        msg.style.backgroundColor = "green";
        userscore++;
        userscorepara.innerText = userscore;

    } else {
        msg.innerText = `you lose ${compchoices} beats your  ${userchoice}`;
        msg.style.backgroundColor = "red";
        compscore++;
        compscorepara.innerText = compscore;
    }
})

const playgame = (userchoice) => {
    const compchoices = gencompchoice();

    if (userchoice === compchoices) {
        drawgame();
    }
    else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoices === "paper" ? false : true;

        } else if (userchoice === "paper") {
            user = compchoices === "scissors" ? false : true;
        } else {
            userwin = compchoices === "rock" ? false : true;
        }
        showwinner(userwin, userchoice, compchoices);
    }
}



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);

    })
});



