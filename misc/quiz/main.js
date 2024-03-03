let qs = questions[q];

let ids = [];
let correct = 0;


function endQuiz() {
  choices.style.display = 'none';
}

function randomQuestion() {
    while (true) {
        var chosen = qs[Math.floor(Math.random() * qs.length)];
      if (ids.length => 10) {
        var chosen = {"id": -1};
        break;
      }
        if (!(ids.includes(chosen["id"]))) {
            break;
        }
    }
if (chosen[id] !== -1){
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