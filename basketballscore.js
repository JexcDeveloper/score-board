const homeScore = document.querySelector(".score");
const guestScore = document.querySelector(".guest");

let homeScorePt = 0;
let guestScorePt = 0;

function addScore(event) {
  if (event.target.matches(".homeBtn")) {
    homeScorePt += Number.parseInt(event.target.value, 10);
    homeScore.textContent = homeScorePt;
  } else if (event.target.matches(".guestBtn")) {
    guestScorePt += Number.parseInt(event.target.value, 10);
    guestScore.textContent = guestScorePt;
  }
}

document.addEventListener("click", addScore);
