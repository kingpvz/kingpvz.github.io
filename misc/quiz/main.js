let qs = questions[q];

let ids = [];

function randomQuestion() {
    while (true) {
        var chosen = qs[Math.floor(Math.random() * qs.length)];
        if (!(ids.includes(chosen["id"]))) {
            break
        }
    }
}