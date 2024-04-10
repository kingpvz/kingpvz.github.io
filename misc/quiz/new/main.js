var current = null;
var questioncounter = 0;

function changeScreen(to, id = -1) {
    layouts["settings"].classList.add("hidden"); layouts["export"].classList.add("hidden"); layouts["question"].classList.add("hidden");
    layouts[to].classList.remove("hidden");
    buttons["settings"].classList.remove("selected"); buttons["export"].classList.remove("selected");
    for (let [key, value] of Object.entries(buttons["question"])) {
        value.classList.remove("selected");
    }
    if (to === "question") {
        buttons["question"][id].classList.add("selected");
    } else {
        buttons[to].classList.add("selected");
        errorlog.style.display = "none";
    }

    //handle question
    if (id !== -1) {
        inputs["question"]["name"].value = questionstorage[id]["name"];
        inputs["question"]["id"].value = id;
        inputs["question"]["command"].value = questionstorage[id]["command"];
        inputs["question"]["query"].value = questionstorage[id]["query"];
        inputs["question"]["c1"].value = questionstorage[id]["c1"];
        inputs["question"]["c2"].value = questionstorage[id]["c2"];
        inputs["question"]["c3"].value = questionstorage[id]["c3"];
        inputs["question"]["c4"].value = questionstorage[id]["c4"];
        inputs["question"]["radio"]["c1"].checked = false; inputs["question"]["radio"]["c2"].checked = false; inputs["question"]["radio"]["c3"].checked = false; inputs["question"]["radio"]["c4"].checked = false;
        switch (questionstorage[id]["c"]) {
            case 1:
                inputs["question"]["radio"]["c1"].checked = true; break;
            case 2:
                inputs["question"]["radio"]["c2"].checked = true; break;
            case 3:
                inputs["question"]["radio"]["c3"].checked = true; break;
            case 4:
                inputs["question"]["radio"]["c4"].checked = true; break;
            default: break;
        }
        current = id;
    }
}

function deleteQuestion(id) {
    if (buttons["question"][id].classList.contains("selected")) { changeScreen("settings"); }
    buttons["question"][id].remove();
    delete questionstorage[id];
    delete questionlabels[id];
}

function saveQuestion() {
    questionstorage[current]["name"] = inputs["question"]["name"].value;
    questionstorage[current]["command"] = inputs["question"]["command"].value;
    questionstorage[current]["query"] = inputs["question"]["query"].value;
    questionstorage[current]["c1"] = inputs["question"]["c1"].value;
    questionstorage[current]["c2"] = inputs["question"]["c2"].value;
    questionstorage[current]["c3"] = inputs["question"]["c3"].value;
    questionstorage[current]["c4"] = inputs["question"]["c4"].value;
    var checked = 0;
    if (inputs["question"]["radio"]["c1"].checked) {
        checked = 1;
    } else if (inputs["question"]["radio"]["c2"].checked) {
        checked = 2;
    } else if (inputs["question"]["radio"]["c3"].checked) {
        checked = 3;
    } else if (inputs["question"]["radio"]["c4"].checked) {
        checked = 4;
    }
    questionstorage[current]["c"] = checked;

    questionlabels[current].innerHTML = inputs["question"]["name"].value;
}

function newQuestion() {
    buttons["question"][questioncounter] = document.createElement("div");
    buttons["question"][questioncounter].classList.add("deletable"); buttons["question"][questioncounter].classList.add("containeritem");
    buttons["question"][questioncounter].id = "question" + questioncounter;

    var CREATEtext = document.createElement("p"); CREATEtext.classList.add("containedtext"); CREATEtext.id = "label" + questioncounter; CREATEtext.setAttribute("onclick", "changeScreen('question', '" + questioncounter + "');"); CREATEtext.innerHTML = "Question " + (questioncounter + 1);
    var CREATEdivider = document.createElement("div"); CREATEdivider.classList.add("divider");
    var CREATEtrash = document.createElement("img"); CREATEtrash.classList.add("deletebutton"); CREATEtrash.id = "delete" + questioncounter; CREATEtrash.src = "../../../global_resources/icons/delete.png"; CREATEtrash.setAttribute("onclick", "deleteQuestion('" + questioncounter + "')");

    questionstorage[questioncounter] = {
        "name": "Question " + (questioncounter+1),
        "command": "",
        "query": "",
        "c1": "",
        "c2": "",
        "c3": "",
        "c4": "",
        "c": 0
    }

    buttons["question"][questioncounter].appendChild(CREATEtext); buttons["question"][questioncounter].appendChild(CREATEdivider); buttons["question"][questioncounter].appendChild(CREATEtrash);
    document.getElementById("questions").prepend(buttons["question"][questioncounter]);

    questionlabels[questioncounter] = document.getElementById("label" + questioncounter);
    buttons["question"][questioncounter] = document.getElementById("question" + questioncounter);
    buttons["delete"][questioncounter] = document.getElementById("delete" + questioncounter);

    questioncounter++;
}

function downloadQuiz() {
    //bruh idk what all of this code does but changing anything deletes system32 from all computers connected to the website so don't touch this

    var questionamount = Object.keys(questionstorage).length;

    var errors = [];
    if (inputs["settings"]["ask"].value === "" || Number(inputs["settings"]["ask"].value) <= 0) { inputs["settings"]["ask"].value = 10; }
    if (Number(inputs["settings"]["ask"].value) > questionamount) { errors.push("You cannot ask more questions than there is."); }
    if (inputs["settings"]["next"].value === "") { inputs["settings"]["next"].value = "Next" }
    if (inputs["settings"]["done"].value === "") { inputs["settings"]["done"].value = "Done" }
    if (inputs["settings"]["points"].value === "") { inputs["settings"]["points"].value = "Points" }
    if (inputs["settings"]["correct"].value === "") { inputs["settings"]["correct"].value = "Correct" }
    if (inputs["settings"]["wrong"].value === "") { inputs["settings"]["wrong"].value = "Wrong" }
    if (inputs["settings"]["rating"].value === "") { inputs["settings"]["rating"].value = "Rating" }
    if (inputs["settings"]["rfail"].value === "") { inputs["settings"]["rfail"].value = "You've failed the quiz." }
    if (inputs["settings"]["rbad"].value === "") { inputs["settings"]["rbad"].value = "You did poorly on the quiz." }
    if (inputs["settings"]["rok"].value === "") { inputs["settings"]["rok"].value = "You did the quiz." }
    if (inputs["settings"]["rgood"].value === "") { inputs["settings"]["rgood"].value = "You did the quiz pretty well." }
    if (inputs["settings"]["rgreat"].value === "") { inputs["settings"]["rgreat"].value = "You did the quiz really well!" }
    if (inputs["settings"]["tryagain"].value === "") { inputs["settings"]["tryagain"].value = "Try Again" }
    if (inputs["settings"]["return"].value === "") { inputs["settings"]["return"].value = "Return" }
    if (inputs["export"]["filename"].value === "") { inputs["export"]["filename"].value = "myquiz" }

    for (let [key, value] of Object.entries(questionstorage)) {
        if (questionstorage[key]["command"] === "") { errors.push(questionstorage[key]["name"] + " (Question ID " + key + ") has empty command.") }
        if (questionstorage[key]["query"] === "") { errors.push(questionstorage[key]["name"] + " (Question ID " + key + ") has no question text.") }
        if (questionstorage[key]["c1"] === "") { errors.push(questionstorage[key]["name"] + " (Question ID " + key + ") has no choice 1 text.") }
        if (questionstorage[key]["c2"] === "") { errors.push(questionstorage[key]["name"] + " (Question ID " + key + ") has no choice 2 text.") }
        if (questionstorage[key]["c3"] === "") { errors.push(questionstorage[key]["name"] + " (Question ID " + key + ") has no choice 3 text.") }
        if (questionstorage[key]["c4"] === "") { errors.push(questionstorage[key]["name"] + " (Question ID " + key + ") has no choice 4 text.") }
        if (questionstorage[key]["c"] === 0) { errors.push(questionstorage[key]["name"] + " (Question ID " + key + ") has no correct answer chosen.") }
    }

    if (errors.length !== 0) {

        errorlog.innerHTML = `<span style="color: white;">Encountered Problems:</span><br><br>` + errors.join("<br>");
        errorlog.style.display = "block";

    } else {

        var ex = `{
        "info": {
        "author": "_AUTHORNAME",
        "name": "_QUIZNAME",
        "id": "_QUIZID",
        "questions": _QUESTIONS,
        "embed": "_EMBED"
    },
        "settings": {
        "n": "_TEXT_NEXT",
        "ask": _ASK,
        "done": "_TEXT_DONE",
        "text_points": "_TEXT_POINTS",
        "text_correct": "_TEXT_CORRECT",
        "text_wrong": "_TEXT_WRONG",
        "r": "_RATING",
        "r_fail": "_RATING_FAIL",
        "r_bad": "_RATING_BAD",
        "r_ok": "_RATING_OK",
        "r_good": "_RATING_GOOD",
        "r_great": "_RATING_GREAT",
        "text_again": "_TEXT_AGAIN",
        "text_return": "_TEXT_RETURN"
}, "qr": [`.replace("_AUTHORNAME", inputs["export"]["author"].value).replace("_QUIZNAME", inputs["settings"]["name"].value).replace("_QUIZID", inputs["settings"]["id"].value).replace("_QUESTIONS", questionamount).replace("_EMBED", inputs["export"]["embed"].value);
        ex = ex.replace("_TEXT_NEXT", inputs["settings"]["next"].value).replace("_ASK", inputs["settings"]["ask"].value).replace("_TEXT_DONE", inputs["settings"]["done"].value).replace("_TEXT_POINTS", inputs["settings"]["points"].value);
        ex = ex.replace("_TEXT_CORRECT", inputs["settings"]["correct"].value).replace("_TEXT_WRONG", inputs["settings"]["wrong"].value).replace("_RATING", inputs["settings"]["rating"].value).replace("_RATING_FAIL", inputs["settings"]["rfail"].value);
        ex = ex.replace("_RATING_BAD", inputs["settings"]["rbad"].value).replace("_RATING_OK", inputs["settings"]["rok"].value).replace("_RATING_GOOD", inputs["settings"]["rgood"].value).replace("_RATING_GREAT", inputs["settings"]["rgreat"].value);
        ex = ex.replace("_TEXT_AGAIN", inputs["settings"]["tryagain"].value).replace("_TEXT_RETURN", inputs["settings"]["return"].value);

        for (let [key, value] of Object.entries(questionstorage)) {
            var qex = "";

            if (ex.slice(-1) === "}") { qex = qex+"," }
            qex = qex+`{
                "id": _ID,
                "command": "_COMMAND",
                "query": "_QUERY",
                "c1": "_C1",
                "c2": "_C2",
                "c3": "_C3",
                "c4": "_C4",
                "c": _CORRECT
            }`.replace("_ID", key).replace("_COMMAND", questionstorage[key]["command"]).replace("_QUERY", questionstorage[key]["query"]).replace("_C1", questionstorage[key]["c1"]).replace("_C2", questionstorage[key]["c2"]);
            qex = qex.replace("_C3", questionstorage[key]["c3"]).replace("_C4", questionstorage[key]["c4"]).replace("_CORRECT", questionstorage[key]["c"]);

            ex = ex + qex;
        }

        ex = ex + `]}`

        var elementr = document.createElement('a');
        elementr.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(ex));
        elementr.setAttribute('download', inputs["export"]["filename"].value+"."+inputs["export"]["filetype"].value);

        elementr.style.display = 'none';
        document.body.appendChild(elementr);

        elementr.click();

        document.body.removeChild(elementr);

    }
}