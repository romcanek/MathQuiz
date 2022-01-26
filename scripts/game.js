/*
=======================================================================================
                    -------------------------------------------

                    IF YOU SEE THIS YOU PROBABLY WANT TO CHEAT.
                    GO AHEAD, BUT YOU WILL GET NOTHING FROM IT.

                    -------------------------------------------
=======================================================================================
*/

// variables
const btn_exit = document.getElementById("btn_exit")
const game_head = document.getElementById("game_head")
const dis_btn = document.getElementById("dis_btn");
const otazka = document.getElementById("otazka");
const opt1 = document.getElementById("opt1");
const opt2 = document.getElementById("opt2");
const opt3 = document.getElementById("opt3");
const opt4 = document.getElementById("opt4");
const options = [opt1, opt2, opt3, opt4];
// prog
const prog = document.getElementById("progress")
const prog_bar = document.getElementById("prog");
const prog_text = document.getElementById("prog_text");
let otazkyCount = 0;
const otazkyCelkem = 20;
// renew
let vyber;
let randomL;
// return
let end = false;
// score
let score = 0;
console.log(localStorage.getItem("highscore"))
if (localStorage.getItem("highscore") == null)
    localStorage.setItem("highscore", 0)

// =========================================== otazky ================================== //
const questions = [
    {
        "question": "Kolik je 5 + 7?",
        "opt1": "12",
        "opt2": "2",
        "opt3": "13",
        "opt4": "35",

        "correct": "opt1"
    },
    {
        "question": "Kolik je 32 - 4?",
        "opt1": "36",
        "opt2": "18",
        "opt3": "28",
        "opt4": "26",

        "correct": "opt3"
    },
    {
        "question": "Kolik je 46 × 3?",
        "opt1": "128",
        "opt2": "142",
        "opt3": "136",
        "opt4": "138",

        "correct": "opt4"
    },
    {
        "question": "Kolik je 27 ÷ 3?",
        "opt1": "7",
        "opt2": "9",
        "opt3": "30",
        "opt4": "14",

        "correct": "opt2"
    },
    {
        "question": "Jak se říká výsledku po použítí dělena ?",
        "opt1": "součin",
        "opt2": "součet",
        "opt3": "podíl",
        "opt4": "rozdíl",

        "correct": "opt3"
    },
    {
        "question": "Jak se říká výsledku po použití plusu ?",
        "opt1": "součin",
        "opt2": "součet",
        "opt3": "podíl",
        "opt4": "rozdíl",

        "correct": "opt2"
    },
    {
        "question": "Jak se říká výsledku po použití mínusu ?",
        "opt1": "součin",
        "opt2": "součet",
        "opt3": "podíl",
        "opt4": "rozdíl",

        "correct": "opt4"
    },
    {
        "question": "Jak se říká výsledku po použití krát ?",
        "opt1": "součin",
        "opt2": "součet",
        "opt3": "podíl",
        "opt4": "rozdíl",

        "correct": "opt1"
    },
    {
        "question": "Co označuje písmeno i někdy také j ?",
        "opt1": "Komplexní číslo s neurčitou hodnotou",
        "opt2": "Imaginární jednotku s hodnotou √(-1)",
        "opt3": "Neznámou bez jakéhokoliv rozdílu od například x",
        "opt4": "Neznámou pouze pro lichá čísla",

        "correct": "opt2"
    },
    {
        "question": "Kolik měsíců je v 6 letech ?",
        "opt1": "72",
        "opt2": "60",
        "opt3": "144",
        "opt4": "12",

        "correct": "opt1"
    },
    {
        "question": "Jak bude pokračovat řada: 16, 24, 36, 54, 81... ?",
        "opt1": "121",
        "opt2": "114",
        "opt3": "106",
        "opt4": "Odpoveď není ve výběru",

        "correct": "opt4"
    },
    {
        "question": "Pokud pro oběd pro 4 lidi potřebujeme 400 gramů brambor, kolik kilogramů brambor by bylo potřeba pro 12 lidí ?",
        "opt1": "1200",
        "opt2": "1,2",
        "opt3": "800",
        "opt4": "1,6",

        "correct": "opt2"
    },
    {
        "question": "Kolik je 2^3?",
        "opt1": "6",
        "opt2": "8",
        "opt3": "24",
        "opt4": "16",

        "correct": "opt2"
    },
    {
        "question": "Šaty po slevě 30% stojí 63€ kolik stály před slevou?",
        "opt1": "90€",
        "opt2": "75€",
        "opt3": "70€",
        "opt4": "93€",

        "correct": "opt1"
    },
    {
        "question": "Kolik je 2^6 ?",
        "opt1": "12",
        "opt2": "32",
        "opt3": "128",
        "opt4": "64",

        "correct": "opt4"
    },
    {
        "question": "Kolik je 16^2 ?",
        "opt1": "236",
        "opt2": "256",
        "opt3": "266",
        "opt4": "246",

        "correct": "opt2"
    },
    {
        "question": "Myslím si čislo vynásobím ho 10 přičtu 5 a podíl tohoto čísla s číslem 5 je 7. Jaké je mé číslo?",
        "opt1": "2,5",
        "opt2": "4",
        "opt3": "3,5",
        "opt4": "3",

        "correct": "opt3"
    },
    {
        "question": "Kolik je [] + 35 = 42?",
        "opt1": "77",
        "opt2": "7",
        "opt3": "17",
        "opt4": "8",

        "correct": "opt2"
    },
    {
        "question": "Kolik je 73 - [] = 16?",
        "opt1": "52",
        "opt2": "63",
        "opt3": "57",
        "opt4": "89",

        "correct": "opt3"
    },
    {
        "question": "Kolik je [] - 26 = 54?",
        "opt1": "28",
        "opt2": "32",
        "opt3": "84",
        "opt4": "80",

        "correct": "opt4"
    },
    {
        "question": "Kolik je 9/10 z 2000?",
        "opt1": "2200",
        "opt2": "1900",
        "opt3": "1500",
        "opt4": "1800",

        "correct": "opt4"
    },
    {
        "question": "Kolik je 6 × 5(4-2) - 3 × 2 + 1?",
        "opt1": "55",
        "opt2": "115",
        "opt3": "53",
        "opt4": "128",

        "correct": "opt1"
    },
    {
        "question": "Kolik je 30% z 20% ?",
        "opt1": "50%",
        "opt2": "6%",
        "opt3": "60%",
        "opt4": "10%",

        "correct": "opt2"
    },
    {
        "question": "Kolik je 50% z 50% ?",
        "opt1": "75%",
        "opt2": "100%",
        "opt3": "35,5%",
        "opt4": "25%",

        "correct": "opt4"
    },
    {
        "question": "Kolik je 7% z 1250 ?",
        "opt1": "80",
        "opt2": "12,5",
        "opt3": "87,5",
        "opt4": "72,5",

        "correct": "opt3"
    },
    {
        "question": "Kolik je [] - 45 = 37 ?",
        "opt1": "82",
        "opt2": "8",
        "opt3": "83",
        "opt4": "77",

        "correct": "opt1"
    },
    {
        "question": "Kolik je [] - 72 = 16 ?",
        "opt1": "84",
        "opt2": "88",
        "opt3": "56",
        "opt4": "92",

        "correct": "opt2"
    },
    {
        "question": "Kolik je 63 + [] = 77 ?",
        "opt1": "35",
        "opt2": "140",
        "opt3": "14",
        "opt4": "24",

        "correct": "opt3"
    },
    {
        "question": "Kolik je [] + 34 = 77 ?",
        "opt1": "111",
        "opt2": "41",
        "opt3": "97",
        "opt4": "43",

        "correct": "opt4"
    },
    {
        "question": "Pokud 1=3; 2=3; 3=5; 4=4; 5=4, kolik je 6 ?",
        "opt1": "5",
        "opt2": "3",
        "opt3": "8",
        "opt4": "6",

        "correct": "opt2"
    },
    {
        "question": "Kolik je 3^4 ÷ 3^2 ?",
        "opt1": "729",
        "opt2": "2",
        "opt3": "9",
        "opt4": "6",

        "correct": "opt3"
    },
    {
        "question": "Kolik je 8,563 + 4,8292 ?",
        "opt1": "12,3913",
        "opt2": "13,3913",
        "opt3": "12,3922",
        "opt4": "13,3922",

        "correct": "opt4"
    },
    {
        "question": "Včero mi bylo 25, příští rok mi bude 28, kdy mám narozeniny ?",
        "opt1": "31. 12.",
        "opt2": "28. 2.",
        "opt3": "1. 1.",
        "opt4": "Odpoveď není ve výběru",

        "correct": "opt1"
    },
    {
        "question": "Kolik je 3/5 v desetinném čísle?",
        "opt1": "0.3",
        "opt2": "0.6",
        "opt3": "0.8",
        "opt4": "0.15",

        "correct": "opt2"
    },
]
// =========================================== otazky ================================== //

// renew progress
const renewProgress = () => {
    prog_bar.style.width = ((otazkyCount / otazkyCelkem) * 100) + "%"
    prog_text.innerText = `${otazkyCount} z ${otazkyCelkem}`
}
// predelat otazku
const renewQuestion = (randomizing) => {
    // restart everything
    options.forEach(e => {
        e.classList.remove("btn-disabled")
        e.classList.remove("btn-good-disabled")
        e.classList.remove("btn-bad-disabled")
    })
    dis_btn.classList.add("btn-disabled")
    // give new question
    questions.splice(randomizing, 1)
    otazka.innerText = vyber.question;
    opt1.innerText = vyber.opt1;
    opt2.innerText = vyber.opt2;
    opt3.innerText = vyber.opt3;
    opt4.innerText = vyber.opt4;
    // update progres bar
    renewProgress()
}
// first actions
randomL = Math.floor(Math.random() * questions.length)
vyber = questions[randomL]
renewQuestion(randomL)

// ------ EventListeners --------- //
options.forEach(x => x.addEventListener("click", e => {
    // disable other btns
    options.forEach(f => {
        f.classList.add("btn-disabled")
        f.ariaDisabled = true
    })
    // btn actions
    if (`opt${e.target.dataset.num}` == vyber.correct) {
        e.target.classList.add("btn-good-disabled")
        score += 10;
    }
    else {
        e.target.classList.add("btn-bad-disabled")
    }
    e.target.classList.remove("btn-disabled")
    // btn next
    dis_btn.classList.remove("btn-disabled")
    dis_btn.ariaDisabled = false

    otazkyCount++;
    renewProgress()
}))
// go to next
dis_btn.addEventListener("click", () => {
    if (end) {
        window.location.href = "./index.html"
    }
    if (otazkyCount >= otazkyCelkem) {
        // highscore change
        if (score > localStorage.getItem("highscore")) {
            localStorage.setItem("highscore", score)
        }
        // end screen
        prog.remove()
        game_head.style.justifyContent = "center"
        otazka.innerText = `KONEC \n získal si ${score} bodů`
        otazka.style.textAlign = "center"
        options.forEach(e => e.remove())
        btn_exit.remove()
        dis_btn.innerText = "Zpátky do menu"
        end = true
        return
    }
    randomL = Math.floor(Math.random() * questions.length)
    vyber = questions[randomL]
    renewQuestion(randomL)
})