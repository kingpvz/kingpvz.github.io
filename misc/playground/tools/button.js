var currentTab = 'editor';
var currentCss = 'normal';
var style = {
    el: document.createElement('style'),
    normal: "",
    hover: "",
    active: ""
}

var data = {
    "normal": {
        enabled: true
    },
    "hover": {
        enabled: false
    },
    "active": {
        enabled: false
    }
}

function setTab(x) {
    if (currentTab !== x) {
        layout.screen[currentTab].classList.add("hidden");
        layout.screen[x].classList.remove("hidden");
        layout.tab[currentTab].classList.remove("selected");
        layout.tab[x].classList.add("selected");
        currentTab = x;
    }
}

function setCss(x) {
    if (currentCss !== x) {
        if (x === 'normal') { document.getElementById("theentireenabledthing").classList.add('inactive') }
        else { document.getElementById("theentireenabledthing").classList.remove('inactive') }
        layout.css[currentCss].classList.remove("chosen");
        currentCss = x;
        layout.css[currentCss].classList.add("chosen");

        layout.input['cssenabled'].checked = data[x].enabled;
        if (data[currentCss].enabled) {
            layout.cssedit.classList.remove("inactive");
        } else {
            layout.cssedit.classList.add("inactive");
        }
    }
}

function enableCss() {
    data[currentCss].enabled = layout.input["cssenabled"].checked;
    if (data[currentCss].enabled) {
        layout.cssedit.classList.remove("inactive");
    } else {
        layout.cssedit.classList.add("inactive");
    }
}

function updateData() {

}