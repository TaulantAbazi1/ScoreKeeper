const p1 = {
  score: 0,
  button: document.querySelector("#p1Button"),
  display: document.querySelector("#p1Display"),
};

const p2 = {
  score: 0,
  button: document.querySelector("#p2Button"),
  display: document.querySelector("#p2Display"),
};

const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playto");
const p1Name = document.querySelector("#p1Name");
const p2Name = document.querySelector("#p2Name");

let winningScore = 3;
let isGameOver = false;

p1Name.addEventListener("input", function () {
  p1.button.innerHTML = `+1 ${p1Name.value}`;
});

p2Name.addEventListener("input", function () {
  p2.button.innerHTML = `+1 ${p2Name.value}`;
});

function updateScore(player, opponent) {
  if (!isGameOver) {
    player.score += 1;

    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

p1.button.addEventListener("click", function () {
  updateScore(p1, p2);
});

p2.button.addEventListener("click", function () {
  updateScore(p2, p1);
});

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});

resetButton.addEventListener("click", reset);

function reset() {
  isGameOver = false;

  for (const p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove("has-text-success", "has-text-danger");
    p.button.disabled = false;
  }

  p1Name.value = "";
  p2Name.value = "";
  p1.button.innerHTML = "+1 Player One";
  p2.button.innerHTML = "+1 Player Two";
}
