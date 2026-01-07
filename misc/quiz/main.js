if (q === "*") {
    var trn = JSON.parse(sessionStorage.getItem("QZ"));
    var qs = trn["qr"];
    var sts = trn["settings"];
} else {
    var qs = questions[q]["qr"];
    var sts = questions[q]["settings"];
}

let ids = [];
let correct = 0;
let stats = {
  "points": 0,
  "correct": 0,
  "wrong": 0
}


function readyUp() {
  next.innerHTML = sts["n"];
  again.innerHTML = sts["text_again"];
  returns.innerHTML = sts["text_return"];
}

function endQuiz() {
  choices.style.display = 'none';
  command.innerHTML = sts["done"];
  query.innerHTML = sts["text_points"] + ": " + stats["points"] + "/" + 100*sts["ask"];
  statsc.style.display = 'block';
  next.style.display = 'none';
  navs.style.display = 'flex';

  s_correct.innerHTML = sts["text_correct"] + ": " + stats["correct"];
  s_wrong.innerHTML = sts["text_wrong"] + ": " + stats["wrong"];
  let ratio = stats["points"]/(100*sts["ask"]);
  if (ratio <= 0){
    s_rating.innerHTML = sts["r"]+ ": " + sts["r_fail"];
  } else if ((ratio <= 0.3) && (ratio > 0)){
    s_rating.innerHTML = sts["r"]+ ": " + sts["r_bad"];
  } else if ((ratio <= 0.6) && (ratio > 0.3)){
    s_rating.innerHTML = sts["r"]+ ": " + sts["r_ok"];
  } else if ((ratio <= 0.85) && (ratio > 0.6)){
    s_rating.innerHTML = sts["r"]+ ": " + sts["r_good"];
  } else if (ratio > 0.85) {
    s_rating.innerHTML = sts["r"]+ ": " + sts["r_great"];
  }
}

function shuffle(arr) {
    let currentIndex = arr.length;

    while (currentIndex != 0) {

        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [arr[currentIndex], arr[randomIndex]] = [
            arr[randomIndex], arr[currentIndex]];
    }
}

function switchPlaces() {
    var variants = ["c1", "c2", "c3", "c4"];
    shuffle(variants);
    choices.style.gridTemplateAreas = '"' + variants[0] + ' ' + variants[1] + '" "' + variants[2] + ' ' + variants[3] + '"';
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
    c1.innerHTML = "<p style='margin:0'>"+chosen["c1"]+"</p>";
    c2.innerHTML = "<p style='margin:0'>" + chosen["c2"] + "</p>";
    c3.innerHTML = "<p style='margin:0'>" + chosen["c3"] + "</p>";
    c4.innerHTML = "<p style='margin:0'>" + chosen["c4"] + "</p>";
    correct = chosen["c"];
    switchPlaces();
} else {
  endQuiz();
}
}

function answer(num){
  if (num === correct){
    stats["points"] += 100;
    stats["correct"] += 1;
  } else {
    stats["points"] -= 25;
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

function tryAgain() {
  window.location.reload();
}

function returnHome() {
  window.location.href = r;
}