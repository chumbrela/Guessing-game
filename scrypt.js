const numberRandom = Math.round(Math.random() * 10)
let xAttempts = 1;

document.getElementById('guessForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const inputNumber = document.querySelector("#attempt");

  if (Number(inputNumber.value) == numberRandom) {
    document.querySelector(".screen1").classList.add("hide");
    document.querySelector(".screen2").classList.remove("hide");

    document.querySelector(".screen2 h2").innerHTML = `Acertou em ${xAttempts} tentativas`; 
  } else {
    document.querySelector("#attempt").value = "";
    document.querySelector("#attempt").focus();
  }

  xAttempts++;
});

document.getElementById('resetBtn').addEventListener('click', function() {
  document.querySelector(".screen1").classList.remove("hide")
  document.querySelector(".screen2").classList.add("hide")

  document.querySelector("#attempt").value = '';

  xAttempts = 1;
})
