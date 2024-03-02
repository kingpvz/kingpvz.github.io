console.log(q);
console.log(questions);
let ids = [];

function randomQuestion() {
    while (true) {
        var chosen = questions[Math.floor(Math.random() * questions.length)];
        if (ids.includes(chosen["id"])) {
            break
        }
    }
}