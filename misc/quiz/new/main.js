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