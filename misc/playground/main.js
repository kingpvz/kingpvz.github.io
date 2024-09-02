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
var previewState = {
    mobile: false,
    fullscreen: false
}
var uniquecss = true;

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
        r.style.setProperty('--imagefilter', 'invert()');

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
        r.style.setProperty('--imagefilter', 'none');

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
            if (document.getElementById("yourmom")) {
                document.body.removeChild(document.getElementById("yourmom"));
            }
            const script = document.createElement('script');
            script.innerHTML = layouts["input"]["editor"]["js"].value;
            script.id = "yourmom";
            document.body.appendChild(script);
            layouts["preview"]["main"].innerHTML = '<style id="MAINSTYLEWHOAT">' + layouts["input"]["editor"]["css"].value + "</style>" + layouts["input"]["editor"]["html"].value;
            if (layouts["input"]["options"]["favicon"].value) {
                layouts["preview"]["fav"].src = layouts["input"]["options"]["favicon"].value;
            } else {
                layouts["preview"]["fav"].src = "../../favicon.png";
            }
            if (layouts["input"]["options"]["title"].value) {
                layouts["preview"]["title"].innerHTML = layouts["input"]["options"]["title"].value;
            } else if (layouts["input"]["project"]["name"].value) {
                layouts["preview"]["title"].innerHTML = layouts["input"]["project"]["name"].value;
            } else if (layouts["input"]["project"]["author"].value) {
                layouts["preview"]["title"].innerHTML = layouts["input"]["project"]["author"].value + "'s Website";
            } else {
                layouts["preview"]["title"].innerHTML = "My Website";
            }
            previewState.mobile = true;
            previewFunction(1);
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

    if (e.key === "Escape" && previewState.fullscreen) {
        e.preventDefault();
        previewFunction(2);
    }
}

function setTab(x) {
    if (x !== currentTab) {
        layouts["editortab"][currentTab].classList.remove('current');
        layouts["editor"][currentTab].classList.remove('selected');
        if (currentTab === "css" || currentTab === "cssm") {
            layouts["tools"]["html"].classList.remove('selected');
        } else {
            layouts["tools"][currentTab].classList.remove('selected');
        }
        currentTab = x;
        layouts["editortab"][currentTab].classList.add('current');
        layouts["editor"][currentTab].classList.add('selected');
        if (currentTab === "css" || currentTab === "cssm") {
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
            case 'cssm':

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
    let a;
    if (window.innerHeight > window.innerWidth) {

        a = "initial";

    } else {
        if (how === '+' && fontSize["current"] + 1 !== fontSize["sizes"].length) {
            fontSize["current"] += 1;
        }
        if (how === '-' && fontSize["current"] - 1 > -1) {
            fontSize["current"] -= 1;
        }

        document.getElementById("fontsizeinfo").innerHTML = fontSize["sizes"][fontSize["current"]];
        a = document.getElementById("fontsizeinfo").innerHTML + 'px';
        localStorage.setItem('editorFontSize', fontSize["current"]);
    }

    layouts["input"]["editor"]["html"].style.fontSize = a;
    layouts["input"]["editor"]["css"].style.fontSize = a;
    layouts["input"]["editor"]["cssm"].style.fontSize = a;
    layouts["input"]["editor"]["js"].style.fontSize = a;
}

function addch(str, place, char) {
    return str.slice(0, layouts["input"]["editor"][place].selectionStart) + char + str.slice(layouts["input"]["editor"][place].selectionStart);
}

function previewFunction(x) {
    if (x === 1) {
        if (window.innerHeight > window.innerWidth) {
            if (uniquecss) {
                document.getElementById("MAINSTYLEWHOAT").innerHTML = layouts["input"]["editor"]["css"].value+"\n"+layouts["input"]["editor"]["cssm"].value;
            }
        } else {
            if (!previewState.mobile) {
                layouts["preview"]["main"].style.width = '50vh';
                layouts["preview"]["main"].style.marginLeft = 'auto';
                layouts["preview"]["main"].style.marginRight = 'auto';
                layouts["preview"]["main"].style.borderLeft = 'solid var(--verybgcolor) calc(50vw - 25vh)';
                layouts["preview"]["main"].style.borderRight = 'solid var(--verybgcolor) calc(50vw - 25vh)';
                previewState.mobile = true;
                if (uniquecss) {
                    document.getElementById("MAINSTYLEWHOAT").innerHTML = layouts["input"]["editor"]["css"].value + "\n" +layouts["input"]["editor"]["cssm"].value;
                }
           
            } else {
                layouts["preview"]["main"].style.width = '100vw';
                layouts["preview"]["main"].style.marginLeft = '0';
                layouts["preview"]["main"].style.marginRight = '0';
                layouts["preview"]["main"].style.borderLeft = 'solid var(--verybgcolor) 0';
                layouts["preview"]["main"].style.borderRight = 'solid var(--verybgcolor) 0';
                previewState.mobile = false;
                document.getElementById("MAINSTYLEWHOAT").innerHTML = layouts["input"]["editor"]["css"].value;
            }
        }
    }
    if (x === 2) {
        if (window.innerHeight > window.innerWidth) {
            if (uniquecss) {
                layouts["preview"]["main"].style.height = 'inital';
            }
        } else {
            if (!previewState.fullscreen) {
                layouts["preview"]["main"].style.height = '100vh';
                layouts["preview"]["main"].style.bottom = '0';
                previewState.fullscreen = true;
            } else {
                layouts["preview"]["main"].style.height = '85vh';
                previewState.fullscreen = false;
            }
        }
    }
}

function toggleCssDependency() {
    uniquecss = layouts["input"]["options"]["uniquecss"].checked;
    if (uniquecss) {
        layouts["editortab"]["css"].innerHTML = "Global CSS";
        layouts["editortab"]["cssm"].style.display = "block";
    } else {
        layouts["editortab"]["css"].innerHTML = "CSS";
        layouts["editortab"]["cssm"].style.display = "none";
        if (currentTab == "cssm") {
            setTab("css");
        }
    }
}

function Export() {

    var filen = layouts["input"]["options"]["ename"].value.replaceAll(" ", "_");

    if (layouts["input"]["options"]["etype"].value === "html") {

        var filet = `<!DOCTYPE html>
<html>
  <head>
    <title>_[[[REPLACE::HEAD?TITLE::CODE?NEUTRAL]]]</title>
    <link rel="icon" type="image/x-icon" href="_[[[REPLACE::HEAD?FAVICON::CODE?NEUTRAL]]]"/>
    _[[[REPLACE::HEAD?CUSTOM::CODE?NEUTRAL]]]
    <meta name="author" content="_[[[REPLACE::HEAD?AUTHOR::CODE?NEUTRAL]]]">
    <meta name="description" content="_[[[REPLACE::HEAD?PROJECT::CODE?NEUTRAL]]] created using Kingpvz's WebDev PlayGround (https://kingpvz.github.io/misc/playground)">
  </head>
  <body>
    <style>
    html,body{margin:0;padding:0;}
    _[[[REPLACE::BODY?CSS::CODE?NEUTRAL]]]
    @media(orientation: portrait){
        _[[[REPLACE::BODY?CSSM::CODE?NEUTRAL]]]
    }
    </style>
    <div id="html">_[[[REPLACE::BODY?HTML::CODE?NEUTRAL]]]</div>
    <script>
    _[[[REPLACE::BODY?JS::CODE?NEUTRAL]]]
    <\/script>
  </body>
</html>`;
        filet = filet.replace("_[[[REPLACE::HEAD?TITLE::CODE?NEUTRAL]]]", layouts["input"]["options"]["title"].value).replace("_[[[REPLACE::HEAD?FAVICON::CODE?NEUTRAL]]]", layouts["input"]["options"]["favicon"].value.replaceAll("\"", "\\\""));
        filet = filet.replace("_[[[REPLACE::HEAD?CUSTOM::CODE?NEUTRAL]]]", layouts["input"]["options"]["head"].value).replace("_[[[REPLACE::HEAD?AUTHOR::CODE?NEUTRAL]]]", layouts["input"]["project"]["author"].value.replaceAll("\"", "\\\"")).replace("_[[[REPLACE::HEAD?PROJECT::CODE?NEUTRAL]]]", layouts["input"]["project"]["name"].value.replaceAll("\"", "\\\""));
        filet = filet.replace("_[[[REPLACE::BODY?CSS::CODE?NEUTRAL]]]", layouts["input"]["editor"]["css"].value).replace("_[[[REPLACE::BODY?CSSM::CODE?NEUTRAL]]]", layouts["input"]["editor"]["cssm"].value);
        filet = filet.replace("_[[[REPLACE::BODY?HTML::CODE?NEUTRAL]]]", layouts["input"]["editor"]["html"].value).replace("_[[[REPLACE::BODY?JS::CODE?NEUTRAL]]]", layouts["input"]["editor"]["js"].value);

        var elementr = document.createElement('a');
        elementr.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(filet));
        if (!filen) { filen = "index"; }
        elementr.setAttribute('download', filen + ".html");

        elementr.style.display = 'none';
        document.body.appendChild(elementr);

        elementr.click();

        document.body.removeChild(elementr);

    } else {

        var filet = `<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="style.css"/>
    <title>_[[[REPLACE::HEAD?TITLE::CODE?NEUTRAL]]]</title>
    <link rel="icon" type="image/x-icon" href="_[[[REPLACE::HEAD?FAVICON::CODE?NEUTRAL]]]"/>
    _[[[REPLACE::HEAD?CUSTOM::CODE?NEUTRAL]]]
    <meta name="author" content="_[[[REPLACE::HEAD?AUTHOR::CODE?NEUTRAL]]]">
    <meta name="description" content="_[[[REPLACE::HEAD?PROJECT::CODE?NEUTRAL]]] created using Kingpvz's WebDev PlayGround (https://kingpvz.github.io/misc/playground)">
  </head>
  <body>
    <script src="main.js"></script>
    <div id="html">_[[[REPLACE::BODY?HTML::CODE?NEUTRAL]]]</div>
  </body>
</html>`;
        filet = filet.replace("_[[[REPLACE::HEAD?TITLE::CODE?NEUTRAL]]]", layouts["input"]["options"]["title"].value).replace("_[[[REPLACE::HEAD?FAVICON::CODE?NEUTRAL]]]", layouts["input"]["options"]["favicon"].value.replaceAll("\"", "\\\""));
        filet = filet.replace("_[[[REPLACE::HEAD?CUSTOM::CODE?NEUTRAL]]]", layouts["input"]["options"]["head"].value).replace("_[[[REPLACE::HEAD?AUTHOR::CODE?NEUTRAL]]]", layouts["input"]["project"]["author"].value.replaceAll("\"", "\\\""));
        filet = filet.replace("_[[[REPLACE::BODY?HTML::CODE?NEUTRAL]]]", layouts["input"]["editor"]["html"].value).replace("_[[[REPLACE::HEAD?PROJECT::CODE?NEUTRAL]]]", layouts["input"]["project"]["name"].value.replaceAll("\"", "\\\""));

        var filetcss = `html,body{margin:0;padding:0;}
_[[[REPLACE::BODY?CSS::CODE?NEUTRAL]]]
@media(orientation: portrait){
    _[[[REPLACE::BODY?CSSM::CODE?NEUTRAL]]]
}`;
        filetcss = filetcss.replace("_[[[REPLACE::BODY?CSS::CODE?NEUTRAL]]]", layouts["input"]["editor"]["css"].value).replace("_[[[REPLACE::BODY?CSSM::CODE?NEUTRAL]]]", layouts["input"]["editor"]["cssm"].value);

        var filetjs = layouts["input"]["editor"]["js"].value;

        var elementr = document.createElement('a');
        elementr.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(filet));
        if (!filen) { filen = "index"; }
        elementr.setAttribute('download', filen + ".html");

        elementr.style.display = 'none';
        document.body.appendChild(elementr);

        elementr.click();

        document.body.removeChild(elementr);
        var elementr = document.createElement('a');
        elementr.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(filetcss));
        elementr.setAttribute('download', "style.css");

        elementr.style.display = 'none';
        document.body.appendChild(elementr);

        elementr.click();

        document.body.removeChild(elementr);
        var elementr = document.createElement('a');
        elementr.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(filetjs));
        if (!filen) { filen = "index"; }
        elementr.setAttribute('download', "main.js");

        elementr.style.display = 'none';
        document.body.appendChild(elementr);

        elementr.click();

        document.body.removeChild(elementr);
    }

}

function importProject() {
    if (confirm('Loading a project will discard all unsaved data.')) {


        var input = document.createElement('input');
        input.type = 'file';
        input.accept = '.wdpg';

        input.onchange = e => {

            var file = e.target.files[0];

            var reader = new FileReader();
            reader.readAsText(file, 'UTF-8');

            reader.onload = readerEvent => {
                var content = readerEvent.target.result;

                content = JSON.parse(content);

                layouts["input"]["project"]["name"].value = content["info"]["name"];
                layouts["input"]["project"]["author"].value = content["info"]["author"];
                layouts["input"]["options"]["title"].value = content["options"]["title"];
                layouts["input"]["options"]["favicon"].value = content["options"]["fav"];
                layouts["input"]["options"]["head"].value = content["options"]["head"];
                if (content["options"]["uniquecss"] === "false") {
                    layouts["input"]["options"]["uniquecss"].checked = false;
                    toggleCssDependency();
                }
                layouts["input"]["options"]["etype"].value = content["options"]["export"];
                layouts["input"]["options"]["ename"].value = content["options"]["name"];
                layouts["input"]["editor"]["html"].value = content["code"]["html"];
                layouts["input"]["editor"]["css"].value = content["code"]["css"];
                layouts["input"]["editor"]["cssm"].value = content["code"]["cssm"];
                layouts["input"]["editor"]["js"].value = content["code"]["js"];

            }

        }

        input.click();


    } else {
        console.log("Action aborted.")
    }
}

function exportProject() {

    var filet = {
        info: {
            name: layouts["input"]["project"]["name"].value,
            author: layouts["input"]["project"]["author"].value
        },
        options: {
            title: layouts["input"]["options"]["title"].value,
            fav: layouts["input"]["options"]["favicon"].value,
            head: layouts["input"]["options"]["head"].value,
            uniquecss: layouts["input"]["options"]["uniquecss"].checked,
            export: layouts["input"]["options"]["etype"].value,
            name: layouts["input"]["options"]["ename"].value
        },
        code: {
            html: layouts["input"]["editor"]["html"].value,
            css: layouts["input"]["editor"]["css"].value,
            cssm: layouts["input"]["editor"]["cssm"].value,
            js: layouts["input"]["editor"]["js"].value
        }
    };
    var filet = JSON.stringify(filet);
    var elementr = document.createElement('a');
    elementr.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(filet));
    var filen = layouts["input"]["project"]["name"].value.replaceAll(" ", "_").toLowerCase();
    if (!filen) { filen = "mywebsite"; }
    elementr.setAttribute('download', filen + ".wdpg");

    elementr.style.display = 'none';
    document.body.appendChild(elementr);

    elementr.click();

    document.body.removeChild(elementr);

}

function downloadUnit() {

    var filet = layouts["input"]["editor"][currentTab].value;
    var elementr = document.createElement('a');
    elementr.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(filet));
    var filen = layouts["input"]["project"]["name"].value.replaceAll(" ", "_").toLowerCase();
    if (!filen) { filen = "file"; }
    let filex;
    if (currentTab === 'cssm') {
        filex = 'css';
    } else {
        filex = currentTab;
    }

    elementr.setAttribute('download', filen + "." + filex);

    elementr.style.display = 'none';
    document.body.appendChild(elementr);

    elementr.click();

    document.body.removeChild(elementr);

}