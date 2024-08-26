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

function saveProject() {
    var filet = `{
        "settings":{
            "name":"_SETTINGSNAME",
            "id":"_SETTINGSID",
            "ask":"_SETTINGSASK",
            "text": {
                "next":"_SETTINGSTEXTNEXT",
                "finish":"_SETTINGSTEXTFINISH",
                "points":"_SETTINGSTEXTPOINTS",
                "correct":"_SETTINGSTEXTCORRECT",
                "incorrect":"_SETTINGSTEXTINCORRECT",
                "rating":"_SETTINGSTEXTRATING",
                "again":"_SETTINGSTEXTAGAIN",
                "return":"_SETTINGSTEXTRETURN"
            },
            "rating": {
                "fail":"_SETTINGSRATEFAIL",
                "bad":"_SETTINGSRATEBAD",
                "ok":"_SETTINGSRATEOK",
                "good":"_SETTINGSRATEGOOD",
                "great":"_SETTINGSRATEGREAT"
            }
        },
        "export":{
            "author":"_EXPORTAUTHOR",
            "embed":"_EXPORTEMBED",
            "name":"_EXPORTFILENAME"
        },
        "KEY:?questionstate::currentquestion": _CURRENTQUESTION,
        "question": [
            _QUESTIONDUMP
        ]
    }`;
    filet = filet.replace("_EXPORTAUTHOR", inputs["export"]["author"].value).replace("_SETTINGSNAME", inputs["settings"]["name"].value).replace("_SETTINGSID", inputs["settings"]["id"].value).replace("_EXPORTEMBED", inputs["export"]["embed"].value);
    filet = filet.replace("_SETTINGSTEXTNEXT", inputs["settings"]["next"].value).replace("_SETTINGSASK", inputs["settings"]["ask"].value).replace("_SETTINGSTEXTFINISH", inputs["settings"]["done"].value).replace("_SETTINGSTEXTPOINTS", inputs["settings"]["points"].value);
    filet = filet.replace("_SETTINGSTEXTCORRECT", inputs["settings"]["correct"].value).replace("_SETTINGSTEXTINCORRECT", inputs["settings"]["wrong"].value).replace("_SETTINGSTEXTRATING", inputs["settings"]["rating"].value).replace("_SETTINGSRATEFAIL", inputs["settings"]["rfail"].value);
    filet = filet.replace("_SETTINGSRATEBAD", inputs["settings"]["rbad"].value).replace("_SETTINGSRATEOK", inputs["settings"]["rok"].value).replace("_SETTINGSRATEGOOD", inputs["settings"]["rgood"].value).replace("_SETTINGSRATEGREAT", inputs["settings"]["rgreat"].value);
    filet = filet.replace("_SETTINGSTEXTAGAIN", inputs["settings"]["tryagain"].value).replace("_SETTINGSTEXTRETURN", inputs["settings"]["return"].value).replace("_CURRENTQUESTION", questioncounter).replace("_EXPORTFILENAME", inputs["export"]["filename"].value);

    var fileq = ``;
    for (let [key, value] of Object.entries(questionstorage)) {
        var qex = "";

        if (fileq.slice(-1) === "}") { qex = qex + ",\n" }
        qex = qex + `{
                "name": "_NAME",
                "id": _ID,
                "command": "_COMMAND",
                "query": "_QUERY",
                "c1": "_C1",
                "c2": "_C2",
                "c3": "_C3",
                "c4": "_C4",
                "c": _CORRECT
            }`.replace("_ID", key).replace("_COMMAND", questionstorage[key]["command"]).replace("_QUERY", questionstorage[key]["query"]).replace("_C1", questionstorage[key]["c1"]).replace("_C2", questionstorage[key]["c2"]);
        qex = qex.replace("_C3", questionstorage[key]["c3"]).replace("_C4", questionstorage[key]["c4"]).replace("_CORRECT", questionstorage[key]["c"]).replace("_NAME", questionstorage[key]["name"]);

        fileq = fileq + qex;
    }

    filet = filet.replace("_QUESTIONDUMP", fileq)

    var elementr = document.createElement('a');
    elementr.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(filet));
    var filen = "myquiz";
    if (inputs["settings"]["id"].value.replace(" ", "")) { filen = inputs["settings"]["id"].value; }
    elementr.setAttribute('download', filen + ".uqp");

    elementr.style.display = 'none';
    document.body.appendChild(elementr);

    elementr.click();

    document.body.removeChild(elementr);
}

function loadProject() {
    if (confirm('Loading a project will discard all unsaved data.')) {


        var input = document.createElement('input');
        input.type = 'file';
        input.accept = '.uqp';

        input.onchange = e => {

            var file = e.target.files[0];

            var reader = new FileReader();
            reader.readAsText(file, 'UTF-8');

            reader.onload = readerEvent => {
                var content = readerEvent.target.result;

                content = JSON.parse(content);

                inputs["settings"]["name"].value = content["settings"]["name"];
                inputs["settings"]["id"].value = content["settings"]["id"];
                inputs["settings"]["ask"].value = content["settings"]["ask"];
                inputs["settings"]["next"].value = content["settings"]["text"]["next"];
                inputs["settings"]["done"].value = content["settings"]["text"]["finish"];
                inputs["settings"]["points"].value = content["settings"]["text"]["points"];
                inputs["settings"]["correct"].value = content["settings"]["text"]["correct"];
                inputs["settings"]["wrong"].value = content["settings"]["text"]["incorrect"];
                inputs["settings"]["rating"].value = content["settings"]["text"]["rating"];
                inputs["settings"]["tryagain"].value = content["settings"]["text"]["again"];
                inputs["settings"]["return"].value = content["settings"]["text"]["return"];
                inputs["settings"]["rfail"].value = content["settings"]["rating"]["fail"];
                inputs["settings"]["rbad"].value = content["settings"]["rating"]["bad"];
                inputs["settings"]["rok"].value = content["settings"]["rating"]["ok"];
                inputs["settings"]["rgood"].value = content["settings"]["rating"]["good"];
                inputs["settings"]["rgreat"].value = content["settings"]["rating"]["great"];

                inputs["export"]["author"].value = content["export"]["author"];
                inputs["export"]["embed"].value = content["export"]["embed"];
                inputs["export"]["filename"].value = content["export"]["name"];

                questioncounter = content["KEY:?questionstate::currentquestion"];

                for (let i = 0; i < content["question"].length; i++) {
                    let wt = content["question"][i];

                    buttons["question"][wt["id"]] = document.createElement("div");
                    buttons["question"][wt["id"]].classList.add("deletable"); buttons["question"][wt["id"]].classList.add("containeritem");
                    buttons["question"][wt["id"]].id = "question" + wt["id"];

                    var CREATEtext = document.createElement("p"); CREATEtext.classList.add("containedtext"); CREATEtext.id = "label" + wt["id"]; CREATEtext.setAttribute("onclick", "changeScreen('question', '" + wt["id"] + "');"); CREATEtext.innerHTML = wt["name"];
                    var CREATEdivider = document.createElement("div"); CREATEdivider.classList.add("divider");
                    var CREATEtrash = document.createElement("img"); CREATEtrash.classList.add("deletebutton"); CREATEtrash.id = "delete" + wt["id"]; CREATEtrash.src = "../../../global_resources/icons/delete.png"; CREATEtrash.setAttribute("onclick", "deleteQuestion('" + wt["id"] + "')");

                    questionstorage[wt["id"]] = {
                        "name": wt["name"],
                        "command": wt["command"],
                        "query": wt["query"],
                        "c1": wt["c1"],
                        "c2": wt["c2"],
                        "c3": wt["c3"],
                        "c4": wt["c4"],
                        "c": wt["c"]
                    }

                    buttons["question"][wt["id"]].appendChild(CREATEtext); buttons["question"][wt["id"]].appendChild(CREATEdivider); buttons["question"][wt["id"]].appendChild(CREATEtrash);
                    document.getElementById("questions").prepend(buttons["question"][wt["id"]]);

                    questionlabels[wt["id"]] = document.getElementById("label" + wt["id"]);
                    buttons["question"][wt["id"]] = document.getElementById("question" + wt["id"]);
                    buttons["delete"][wt["id"]] = document.getElementById("delete" + wt["id"]);
                }

            }

        }

        input.click();


    } else {
        console.log("Action aborted.")
    }
}
