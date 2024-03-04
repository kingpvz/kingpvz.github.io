let qs = questions[q];

let ids = [];
let correct = 0;
pts = 0;

function endQuiz() {
  choices.style.display = 'none';
}

function randomQuestion() {
    while (true) {
        var chosen = qs[Math.floor(Math.random() * qs.length)];
      if (ids.length >= 10) {
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
  next.innerHTML = chosen["n"];
} else {
  endQuiz();
}
}

function answer(num){
  if (num === correct){
    pts += 100;
  } else {
    pts -= 10;
  }

  next.style.display = 'block';
  choices.style.pointerEvents = 'none';

  switch (num) {
     case 1:
      c1.style.scale = '1.1';
        break;
    case 2:
      c2.style.scale = '1.1';
      break;
    case 3:
      c3.style.scale = '1.1';
      break;
    case 4:
      c4.style.scale = '1.1';
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