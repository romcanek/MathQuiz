const high = document.getElementById("highscore_text")
const clear = document.getElementById("clear")
high.innerText = `Tvoje nejvyšší skóre je ${localStorage.getItem("highscore")}, dáš lepší?`

clear.addEventListener("click", () => {
    localStorage.setItem("highscore", 0)
    high.innerText = `Tvoje nejvyšší skóre je ${localStorage.getItem("highscore")}, dáš lepší?`
})
