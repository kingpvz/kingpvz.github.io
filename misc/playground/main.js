var mode = 0;
var editable = 0;
var currentScreen = 'home';
var currentTab = 'html';
var deletion = false;
var fontSize = {
    "sizes": [10, 11, 12, 14, 16, 18, 20, 24, 28],
    "current": 3
}
var disableHelp = false;

window.onload = function () {
    if (localStorage.getItem('displayMode') === '1') {
        toggleMode();
    }
    if (localStorage.getItem('editorFontSize') !== 'undefined' && localStorage.getItem('editorFontSize')) {
        fontSize["current"] = Number(localStorage.getItem('editorFontSize'));
        changeFontSize('a');
    }
    if (localStorage.getItem('editorSyntaxHelp') === 'false') {
        disableHelp = true;
        document.getElementById("enablesyntaxhelp").checked = false;
    }
}


function toggleMode() {
    if (mode === 0) { //set to light

        mode = 1;

        r.style.setProperty('--highlightcolor', '#eae356');
        r.style.setProperty('--verybgcolor', '#eee');
        r.style.setProperty('--shadowtabcolor', '#333');
        r.style.setProperty('--shadowctabcolor', '#efef5f');
        r.style.setProperty('--textcolor', '#222');
        r.style.setProperty('--hoverhighlightcolor', 'yellow');
        r.style.setProperty('--maintabcolor', 'orange');
        r.style.setProperty('--gradient1', 'linear-gradient(orange 0%, #eee 80%, #eee 100%)');
        r.style.setProperty('--gradient2', 'linear-gradient(yellow 0%, #eee 80%, #eee 100%)');
        r.style.setProperty('--syntaxsymbol', 'orangered');
        r.style.setProperty('--syntaxkeyword', 'blue');
        r.style.setProperty('--linkcolor', 'darkblue');
        r.style.setProperty('--linkhovercolor', 'yellow');
        r.style.setProperty('--syntaxbackground', 'white');
        r.style.setProperty('--syntaxproperty', 'deepslateblue');

    }
    else{ //set to dark

        mode = 0;

        r.style.setProperty('--highlightcolor', '#210c00');
        r.style.setProperty('--verybgcolor', '#333');
        r.style.setProperty('--shadowtabcolor', '#ddd');
        r.style.setProperty('--shadowctabcolor', '#111');
        r.style.setProperty('--textcolor', 'white');
        r.style.setProperty('--hoverhighlightcolor', 'orange');
        r.style.setProperty('--maintabcolor', 'orangered');
        r.style.setProperty('--gradient1', 'linear-gradient(orangered 0%, #333 80%, #333 100%)');
        r.style.setProperty('--gradient2', 'linear-gradient(orange 0%, #333 80%, #333 100%)');
        r.style.setProperty('--syntaxsymbol', 'orange');
        r.style.setProperty('--syntaxkeyword', 'cornflowerblue');
        r.style.setProperty('--linkcolor', 'yellow');
        r.style.setProperty('--linkhovercolor', 'blue');
        r.style.setProperty('--syntaxbackground', '#181818');
        r.style.setProperty('--syntaxproperty', 'lightblue');

    }
    localStorage.setItem('displayMode', mode);
}

function setScreen(x) {
    if (x !== currentScreen) {
        layouts["tab"][currentScreen].classList.remove('current');
        layouts["screen"][currentScreen].classList.remove('selected');
        currentScreen = x;
        layouts["tab"][currentScreen].classList.add('current');
        layouts["screen"][currentScreen].classList.add('selected');
        if (x === 'preview') {

        }
    }
}

document.addEventListener("keydown", handleKeydown);

function handleKeydown(e) {
    if (e.key === "q" && (e.ctrlKey || e.metaKey)) {

        document.getElementById("contenteditablealert").classList.toggle("hidden");

        if (editable === 0) {
            editable = 1;
            document.body.contentEditable = true;
        } else {
            editable = 0;
            document.body.contentEditable = false;
        }

    }

    if (e.keyCode === 8 || e.keyCode === 46) {
        deletion = true;
    } else {
        deletion = false;
    }

    if (e.keyCode === 9 && currentScreen === 'editor') {
        e.preventDefault();
        let x = currentTab;
        let a = layouts["input"]["editor"][x].value;
        let b = layouts["input"]["editor"][x].selectionStart;
        layouts["input"]["editor"][x].value = addch(a, x, '    ');
        layouts["input"]["editor"][x].selectionStart = b + 4;
        layouts["input"]["editor"][x].selectionEnd = b + 4;
    }
}

function setTab(x) {
    if (x !== currentTab) {
        layouts["editortab"][currentTab].classList.remove('current');
        layouts["editor"][currentTab].classList.remove('selected');
        if (currentTab === "css") {
            layouts["tools"]["html"].classList.remove('selected');
        } else {
            layouts["tools"][currentTab].classList.remove('selected');
        }
        currentTab = x;
        layouts["editortab"][currentTab].classList.add('current');
        layouts["editor"][currentTab].classList.add('selected');
        if (currentTab === "css") {
            layouts["tools"]["html"].classList.add('selected');
        } else {
            layouts["tools"][currentTab].classList.add('selected');
        }
        
    }
}

function syntaxHelp(x) {
    let a = layouts["input"]["editor"][x].value;
    let b = layouts["input"]["editor"][x].selectionStart;
    let c = 0;
    if (!deletion && !disableHelp) {    
        switch (x) {
            case 'html':

                switch (a.slice(layouts["input"]["editor"][x].selectionStart - 1, layouts["input"]["editor"][x].selectionStart)) {
                    case '<':
                        a = addch(a, x, '>');
                        break;
                    case '{':
                        a = addch(a, x, '}');
                        break;
                }
                if (a.slice(layouts["input"]["editor"][x].selectionStart - 4, layouts["input"]["editor"][x].selectionStart) === "<img") {
                    a = addch(a, x, ' src="" /');
                    c = 6;
                }
                if (a.slice(layouts["input"]["editor"][x].selectionStart - 2, layouts["input"]["editor"][x].selectionStart) === "<a") {
                    a = addch(a, x, ' href=""');
                    c = 7;
                }

                break;
            case 'css':

                switch (a.slice(layouts["input"]["editor"][x].selectionStart - 1, layouts["input"]["editor"][x].selectionStart)) {
                    case '{':
                        a = addch(a, x, '\n    \n}');
                        c = 5;
                        break;
                    case '!':
                        a = addch(a, x, 'important');
                        c = 9;
                        break;
                }
                if (a.slice(layouts["input"]["editor"][x].selectionStart - 2, layouts["input"]["editor"][x].selectionStart) == "/*") {
                    a = addch(a, x, '*/');
                }

                break;
            case 'js':

                switch (a.slice(layouts["input"]["editor"][x].selectionStart - 1, layouts["input"]["editor"][x].selectionStart)) {
                    case '{':
                        a = addch(a, x, '}');
                        break;
                    case '`':
                        a = addch(a, x, '`');
                        break;
                }
                switch (a.slice(layouts["input"]["editor"][x].selectionStart - 2, layouts["input"]["editor"][x].selectionStart)) {
                    case "/*":
                        a = addch(a, x, '*/');
                        break;
                    case "{\n":
                        a = addch(a, x, '    \n');
                        c = 4;
                        break;
                }

                break;
                
        }
        switch (a.slice(layouts["input"]["editor"][x].selectionStart - 1, layouts["input"]["editor"][x].selectionStart)) {
            case '(':
                a = addch(a, x, ')');
                break;
            case '"':
                a = addch(a, x, '"');
                break;
            case "'":
                a = addch(a, x, "'");
                break;
            case '[':
                a = addch(a, x, ']');
                break;
        }
        layouts["input"]["editor"][x].value = a;
        layouts["input"]["editor"][x].selectionStart = b+c;
        layouts["input"]["editor"][x].selectionEnd = b+c;
    }
}

function changeFontSize(how) {
    if (how === '+' && fontSize["current"]+1!==fontSize["sizes"].length) {
        fontSize["current"] += 1;
    }
    if (how === '-' && fontSize["current"] - 1 > -1) {
        fontSize["current"] -= 1;
    }
    
    document.getElementById("fontsizeinfo").innerHTML = fontSize["sizes"][fontSize["current"]];
    let a = document.getElementById("fontsizeinfo").innerHTML+'px';
    layouts["input"]["editor"]["html"].style.fontSize = a;
    layouts["input"]["editor"]["css"].style.fontSize = a;
    layouts["input"]["editor"]["js"].style.fontSize = a;
    localStorage.setItem('editorFontSize', fontSize["current"]);
}

function addch(str, place, char) {
    return str.slice(0, layouts["input"]["editor"][place].selectionStart) + char + str.slice(layouts["input"]["editor"][place].selectionStart);
}

function Export(){

}

function importProject() {

}

function exportProject() {

}