let qs = questions[q]["qr"];
let sts = questions[q]["settings"];

let ids = [];
let correct = 0;
let stats = {
  "points": 0,
  "correct": 0,
  "wrong": 0
}


function readyUp() {
  next.innerHTML = sts["n"];
}

function endQuiz() {
  choices.style.display = 'none';
}

function randomQuestion() {
    while (true) {
        var chosen = qs[Math.floor(Math.random() * qs.length)];
      if (ids.length >= sts["ask"]) {
        var chosen = {"id": -1};
        break;
      }
        if (!ids.includes(chosen["id"])) {
            break;
        }
    }
if (chosen["id"] !== -1){
ids.push(chosen["id"]);
  command.innerHTML = chosen["command"];
  query.innerHTML = chosen["query"];
  c1.innerHTML = chosen["c1"];
  c2.innerHTML = chosen["c2"];
  c3.innerHTML = chosen["c3"];
  c4.innerHTML = chosen["c4"];
  correct = chosen["c"];
} else {
  endQuiz();
}
}

function answer(num){
  if (num === correct){
    stats["points"] += 100;
    stats["correct"] += 1;
  } else {
    stats["points"] -= 10;
    stats["wrong"] += 1;
  }

  next.style.visibility = 'visible';
  choices.style.pointerEvents = 'none';

  switch (num) {
     case 1:
      c1.style.scale = '1.1';
      c2.style.scale = '0.8';
      c3.style.scale = '0.8';
      c4.style.scale = '0.8';
        break;
    case 2:
      c2.style.scale = '1.1';
      c1.style.scale = '0.8';
      c3.style.scale = '0.8';
      c4.style.scale = '0.8';
      break;
    case 3:
      c3.style.scale = '1.1';
      c1.style.scale = '0.8';
      c2.style.scale = '0.8';
      c4.style.scale = '0.8';
      break;
    case 4:
      c4.style.scale = '1.1';
      c1.style.scale = '0.8';
      c2.style.scale = '0.8';
      c3.style.scale = '0.8';
      break;
  }

  c1.style.background = 'linear-gradient(to bottom right, #a00, #f33)';
  c1.style.border = 'solid #f00 0.5vw';
  c2.style.background = 'linear-gradient(to bottom right, #a00, #f33)';
  c2.style.border = 'solid #f00 0.5vw';
  c3.style.background = 'linear-gradient(to bottom right, #a00, #f33)';
  c3.style.border = 'solid #f00 0.5vw';
  c4.style.background = 'linear-gradient(to bottom right, #a00, #f33)';
  c4.style.border = 'solid #f00 0.5vw';

  switch (correct) {
    case 1:
      c1.style.background = 'linear-gradient(to bottom right, #060, #0d0)';
      c1.style.border = 'solid #0f0 0.5vw';
      break;
    case 2:
      c2.style.background = 'linear-gradient(to bottom right, #060, #0d0)';
      c2.style.border = 'solid #0f0 0.5vw';
      break;
    case 3:
      c3.style.background = 'linear-gradient(to bottom right, #060, #0d0)';
      c3.style.border = 'solid #0f0 0.5vw';
      break;
    case 4:
      c4.style.background = 'linear-gradient(to bottom right, #060, #0d0)';
      c4.style.border = 'solid #0f0 0.5vw';
      break;
  }
}

function handleNext() {
  next.style.visibility = 'hidden';
  choices.style.pointerEvents = 'auto';
  c1.style.scale = '1';
  c2.style.scale = '1';
  c3.style.scale = '1';
  c4.style.scale = '1';

  c1.style.background = 'linear-gradient(to bottom right, #333, #555)';
  c1.style.border = 'solid #44f 0.5vw';
  c2.style.background = 'linear-gradient(to bottom right, #333, #555)';
  c2.style.border = 'solid #44f 0.5vw';
  c3.style.background = 'linear-gradient(to bottom right, #333, #555)';
  c3.style.border = 'solid #44f 0.5vw';
  c4.style.background = 'linear-gradient(to bottom right, #333, #555)';
  c4.style.border = 'solid #44f 0.5vw';

  randomQuestion();
}