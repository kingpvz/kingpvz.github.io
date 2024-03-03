let qs = questions[q];

let command = document.getElementById('command');
let query = document.getElementById('query');
let c1 = document.getElementById('c1');
let c2 = document.getElementById('c2');
let c3 = document.getElementById('c3');
let c4 = document.getElementById('c4');
let next = document.getElementById('next');
let choices = document.getElementById('choices');

let ids = [];
let correct = 0;


function endQuiz() {
  choices.style.display = 'none';
}

function randomQuestion() {
    while (true) {
        var chosen = qs[Math.floor(Math.random() * qs.length)];
      c1.innerHTML = chosen;
      if (ids.length => 10) {
        break
        var chosen = {"id": -1}
      }
        if (!(ids.includes(chosen["id"]))) {
            break
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