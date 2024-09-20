var currentTab = 'editor';
var currentCss = 'normal';
var borderRadiusStyle = 1;
var code = "";
var style = {
    el: document.createElement('style'),
    normal: "",
    hover: "",
    active: ""
}
document.body.append(style.el);

var data = {
    "global": {
        selector: "class",
        selectorName: "",
        transition: "0s",
        preventTextSelection: false
    },
    "normal": {
        enabled: true,
        shadowinset: false,
        textdecorover: false,
        textdecorthrough: false,
        textdecorunder: false,
        textdecorstyle: 'solid',
        textdecorsize: 'auto',
        textdecorcolor: '#000000',
        fontsize: '16px',
        fontweight: 'normal',
        fontstyle: 'normal',
        font: 'sans-serif',
        fontcolor: '#000000',
        textalign: 'center',
        lineheight: 'normal',
        textdirection: 'ltr',
        letterspacing: 'normal',
        transform: 'none',
        borderprops: {
            style: 'outset',
            width: '2px',
            color: '#767676',
        },
        borderradius: {
            style: 'uni',
            size: '0px',
            customstyle: 1,
            tlp: '0px',
            trp: '0px',
            blp: '0px',
            brp: '0px',
            tls: '0px',
            trs: '0px',
            bls: '0px',
            brs: '0px'
        },
        bordermix: {
            left: 'none',
            leftw: '0px',
            leftc: '#767676',
            right: 'none',
            rightw: '0px',
            rightc: '#767676',
            top: 'none',
            topw: '0px',
            topc: '#767676',
            bottom: 'none',
            bottomw: '0px',
            bottomc: '#767676'
        },
        bg: '#efefef',
        padding: '1px 6px',
        margin: '0',
        display: 'inline',
        cursor: 'pointer',
        opacity: '1',
        width: '',
        height: '',
        scale: '1',
        css: '',
        shadowx: '0',
        shadowy: '0',
        shadowblur: '0',
        shadowspread: '0',
        shadowcolor: '#000000'
    },
    "hover": {
        enabled: false,
        shadowinset: false,
        textdecorover: false,
        textdecorthrough: false,
        textdecorunder: false,
        textdecorstyle: 'solid',
        textdecorsize: 'auto',
        textdecorcolor: '#000000',
        fontsize: '16px',
        fontweight: 'normal',
        fontstyle: 'normal',
        font: 'sans-serif',
        fontcolor: '#000000',
        textalign: 'center',
        lineheight: 'normal',
        textdirection: 'ltr',
        letterspacing: 'normal',
        transform: 'none',
        borderprops: {
            style: 'outset',
            width: '2px',
            color: '#767676',
        },
        borderradius: {
            style: 'uni',
            size: '0px',
            customstyle: 1,
            tlp: '0px',
            trp: '0px',
            blp: '0px',
            brp: '0px',
            tls: '0px',
            trs: '0px',
            bls: '0px',
            brs: '0px'
        },
        bordermix: {
            left: 'none',
            leftw: '0px',
            leftc: '#767676',
            right: 'none',
            rightw: '0px',
            rightc: '#767676',
            top: 'none',
            topw: '0px',
            topc: '#767676',
            bottom: 'none',
            bottomw: '0px',
            bottomc: '#767676'
        },
        bg: '#efefef',
        padding: '1px 6px',
        margin: '0',
        display: 'inline',
        cursor: 'pointer',
        opacity: '1',
        width: '',
        height: '',
        scale: '1',
        css: '',
        shadowx: '0',
        shadowy: '0',
        shadowblur: '0',
        shadowspread: '0',
        shadowcolor: '#000000'
    },
    "active": {
        enabled: false,
        shadowinset: false,
        textdecorover: false,
        textdecorthrough: false,
        textdecorunder: false,
        textdecorstyle: 'solid',
        textdecorsize: 'auto',
        textdecorcolor: '#000000',
        fontsize: '16px',
        fontweight: 'normal',
        fontstyle: 'normal',
        font: 'sans-serif',
        fontcolor: '#000000',
        textalign: 'center',
        lineheight: 'normal',
        textdirection: 'ltr',
        letterspacing: 'normal',
        transform: 'none',
        borderprops: {
            style: 'outset',
            width: '2px',
            color: '#767676',
        },
        borderradius: {
            style: 'uni',
            size: '0px',
            customstyle: 1,
            tlp: '0px',
            trp: '0px',
            blp: '0px',
            brp: '0px',
            tls: '0px',
            trs: '0px',
            bls: '0px',
            brs: '0px'
        },
        bordermix: {
            left: 'none',
            leftw: '0px',
            leftc: '#767676',
            right: 'none',
            rightw: '0px',
            rightc: '#767676',
            top: 'none',
            topw: '0px',
            topc: '#767676',
            bottom: 'none',
            bottomw: '0px',
            bottomc: '#767676'
        },
        bg: '#efefef',
        padding: '1px 6px',
        margin: '0',
        display: 'inline',
        cursor: 'pointer',
        opacity: '1',
        width: '',
        height: '',
        scale: '1',
        css: '',
        shadowx: '0',
        shadowy: '0',
        shadowblur: '0',
        shadowspread: '0',
        shadowcolor: '#000000'
    }
}

function setTab(x) {
    if (currentTab !== x) {
        layout.screen[currentTab].classList.add("hidden");
        layout.screen[x].classList.remove("hidden");
        layout.tab[currentTab].classList.remove("selected");
        layout.tab[x].classList.add("selected");
        currentTab = x;
        if (currentTab === 'code') { generateCode(); }
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
        let where = x;
        layout.input['shadowinset'].checked = data[where].shadowinset;
        layout.input['textdecor']['over'].checked = data[where].textdecorover;
        layout.input['textdecor']['through'].checked = data[where].textdecorthrough;
        layout.input['textdecor']['under'].checked = data[where].textdecorunder;
        layout.input['textdecor']['style'].value = data[where].textdecorstyle;
        layout.input['textdecor']['size'].value = data[where].textdecorsize;
        layout.input['textdecor']['color'].value = data[where].textdecorcolor;
        layout.input['font']['size'].value = data[where].fontsize;
        layout.input['font']['weight'].value = data[where].fontweight;
        layout.input['font']['style'].value = data[where].fontstyle;
        layout.input['font']['font'].value = data[where].font;
        layout.input['font']['color'].value = data[where].fontcolor;
        layout.input['font']['align'].value = data[where].textalign;
        layout.input['font']['lnh'].value = data[where].lineheight;
        layout.input['font']['direction'].value = data[where].textdirection;
        layout.input['font']['lettersp'].value = data[where].letterspacing;
        layout.input['font']['transform'].value = data[where].transform;
        layout.input['border']['style'].value = data[where].borderprops.style;
        layout.input['border']['width'].value = data[where].borderprops.width;
        layout.input['border']['color'].value = data[where].borderprops.color;
        borderRadiusStyle = data[where].borderradius.customstyle;
        layout.input['border']['radstyle'].value = data[where].borderradius.style;
        layout.input['border']['radius'].value = data[where].borderradius.size;
        layout.input['border']['rad']['tlp'].value = data[where].borderradius.tlp;
        layout.input['border']['rad']['trp'].value = data[where].borderradius.trp;
        layout.input['border']['rad']['blp'].value = data[where].borderradius.blp;
        layout.input['border']['rad']['brp'].value = data[where].borderradius.brp;
        layout.input['border']['rad']['tls'].value = data[where].borderradius.tls;
        layout.input['border']['rad']['trs'].value = data[where].borderradius.trs;
        layout.input['border']['rad']['bls'].value = data[where].borderradius.bls;
        layout.input['border']['rad']['brs'].value = data[where].borderradius.brs;
        layout.input['border']['mix']['left']['style'].value = data[where].bordermix.left;
        layout.input['border']['mix']['left']['width'].value = data[where].bordermix.leftw;
        layout.input['border']['mix']['left']['color'].value = data[where].bordermix.leftc;
        layout.input['border']['mix']['right']['style'].value = data[where].bordermix.right;
        layout.input['border']['mix']['right']['width'].value = data[where].bordermix.rightw;
        layout.input['border']['mix']['right']['color'].value = data[where].bordermix.rightc;
        layout.input['border']['mix']['top']['style'].value = data[where].bordermix.top;
        layout.input['border']['mix']['top']['width'].value = data[where].bordermix.topw;
        layout.input['border']['mix']['top']['color'].value = data[where].bordermix.topc;
        layout.input['border']['mix']['bottom']['style'].value = data[where].bordermix.bottom;
        layout.input['border']['mix']['bottom']['width'].value = data[where].bordermix.bottomw;
        layout.input['border']['mix']['bottom']['color'].value = data[where].bordermix.bottomc;
        layout.input['misc']['bgcolor'].value = data[where].bg;
        layout.input['misc']['padding'].value = data[where].padding;
        layout.input['misc']['margin'].value = data[where].margin;
        layout.input['misc']['display'].value = data[where].display;
        layout.input['misc']['cursor'].value = data[where].cursor;
        layout.input['misc']['opacity'].value = data[where].opacity;
        layout.input['misc']['width'].value = data[where].width;
        layout.input['misc']['height'].value = data[where].height;
        layout.input['misc']['scale'].value = data[where].scale;
        layout.input['misc']['customcss'].value = data[where].css;
        layout.input['shadow']['x'].value = data[where].shadowx;
        layout.input['shadow']['y'].value = data[where].shadowy;
        layout.input['shadow']['blur'].value = data[where].shadowblur;
        layout.input['shadow']['spread'].value = data[where].shadowspread;
        layout.input['shadow']['color'].value = data[where].shadowcolor;

        if (layout.input['border']['style'].value === 'mixed' || layout.input['border']['style'].value === 'none') {
            if (layout.input['border']['style'].value === 'mixed') {
                document.getElementById('mixedbordereditor').classList.remove('inactive');
            } else {
                document.getElementById('mixedbordereditor').classList.add('inactive');
            }
            document.getElementById('thewholebordereditthing').classList.add('inactive');
        } else {
            document.getElementById('mixedbordereditor').classList.add('inactive');
            document.getElementById('thewholebordereditthing').classList.remove('inactive');
        }

        if (layout.input['border']['radstyle'].value === 'custom') {
            document.getElementById('mixedradiuseditor').classList.remove('inactive');
            document.getElementById('borderradius').classList.add('inactive');
        } else {
            document.getElementById('mixedradiuseditor').classList.add('inactive');
            document.getElementById('borderradius').classList.remove('inactive');
        }

        if (layout.input['misc']['display'].value === 'inline') {
            document.getElementById('widthandheightsetting').classList.add('inactive');
        } else {
            document.getElementById('widthandheightsetting').classList.remove('inactive');
        }

        if (borderRadiusStyle === 1) {
            let x = document.querySelectorAll('.advancedradius');
            for (let i = 0; i < x.length; i++) { x[i].classList.add('inactive') }
            document.getElementById('buttonradiusadvanced').classList.remove('chosen');
            document.getElementById('buttonradiussimple').classList.add('chosen');
        }
        if (borderRadiusStyle === 2) {
            let x = document.querySelectorAll('.advancedradius');
            for (let i = 0; i < x.length; i++) { x[i].classList.remove('inactive') }
            document.getElementById('buttonradiusadvanced').classList.add('chosen');
            document.getElementById('buttonradiussimple').classList.remove('chosen');
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
    updateData();
}

function updateData(borderRadius=0) {
    if (borderRadius !== 0) { borderRadiusStyle = borderRadius; }

    if (currentCss === 'normal') {
        if (!data['hover'].enabled) {
            saveCssData('hover');
        }
        if (!data['active'].enabled) {
            saveCssData('active');
        }
        saveCssData('normal');
    } else {
        if (data[currentCss].enabled) {
            saveCssData(currentCss);
        }
    }
    
    style.normal = createCss('normal', true);
    style.hover = createCss('hover', true);
    style.active = createCss('active', true);

    var normalpart = "#thebuttoninquestion{" + style.normal + "transition: " + data["global"].transition + ";\n" + (data["global"].preventTextSelection ? "-webkit-user-select: none;\n-ms-user-select: none;\nuser-select: none;\n":"") + "}\n";
    var hoverpart = data['hover'].enabled ? "#thebuttoninquestion:hover{" + style.hover + "}\n" : "";
    var activepart = data['active'].enabled ? "#thebuttoninquestion:active{" + style.active + "}" : "";
    style.el.innerHTML = normalpart + hoverpart + activepart;
}

function saveCssData(where) {
    data['global'].selector = layout.input['selectortype'].value;
    data['global'].selectorName = layout.input['selectorname'].value;
    data['global'].transition = layout.input['transition'].value;
    data['global'].preventTextSelection = layout.input['preventtextselection'].checked;
    data[where].shadowinset = layout.input['shadowinset'].checked;
    data[where].textdecorover = layout.input['textdecor']['over'].checked;
    data[where].textdecorthrough = layout.input['textdecor']['through'].checked;
    data[where].textdecorunder = layout.input['textdecor']['under'].checked;
    data[where].textdecorstyle = layout.input['textdecor']['style'].value;
    data[where].textdecorsize = layout.input['textdecor']['size'].value;
    data[where].textdecorcolor = layout.input['textdecor']['color'].value;
    data[where].fontsize = layout.input['font']['size'].value;
    data[where].fontweight = layout.input['font']['weight'].value;
    data[where].fontstyle = layout.input['font']['style'].value;
    data[where].font = layout.input['font']['font'].value;
    data[where].fontcolor = layout.input['font']['color'].value;
    data[where].textalign = layout.input['font']['align'].value;
    data[where].lineheight = layout.input['font']['lnh'].value;
    data[where].textdirection = layout.input['font']['direction'].value;
    data[where].letterspacing = layout.input['font']['lettersp'].value;
    data[where].transform = layout.input['font']['transform'].value;
    data[where].borderprops.style = layout.input['border']['style'].value;
    data[where].borderprops.width = layout.input['border']['width'].value;
    data[where].borderprops.color = layout.input['border']['color'].value;
    data[where].borderradius.customstyle = borderRadiusStyle;
    data[where].borderradius.style = layout.input['border']['radstyle'].value;
    data[where].borderradius.size = layout.input['border']['radius'].value;
    data[where].borderradius.tlp = layout.input['border']['rad']['tlp'].value;
    data[where].borderradius.trp = layout.input['border']['rad']['trp'].value;
    data[where].borderradius.blp = layout.input['border']['rad']['blp'].value;
    data[where].borderradius.brp = layout.input['border']['rad']['brp'].value;
    data[where].borderradius.tls = layout.input['border']['rad']['tls'].value;
    data[where].borderradius.trs = layout.input['border']['rad']['trs'].value;
    data[where].borderradius.bls = layout.input['border']['rad']['bls'].value;
    data[where].borderradius.brs = layout.input['border']['rad']['brs'].value;
    data[where].bordermix.left = layout.input['border']['mix']['left']['style'].value;
    data[where].bordermix.leftw = layout.input['border']['mix']['left']['width'].value;
    data[where].bordermix.leftc = layout.input['border']['mix']['left']['color'].value;
    data[where].bordermix.right = layout.input['border']['mix']['right']['style'].value;
    data[where].bordermix.rightw = layout.input['border']['mix']['right']['width'].value;
    data[where].bordermix.rightc = layout.input['border']['mix']['right']['color'].value;
    data[where].bordermix.top = layout.input['border']['mix']['top']['style'].value;
    data[where].bordermix.topw = layout.input['border']['mix']['top']['width'].value;
    data[where].bordermix.topc = layout.input['border']['mix']['top']['color'].value;
    data[where].bordermix.bottom = layout.input['border']['mix']['bottom']['style'].value;
    data[where].bordermix.bottomw = layout.input['border']['mix']['bottom']['width'].value;
    data[where].bordermix.bottomc = layout.input['border']['mix']['bottom']['color'].value;
    data[where].bg = layout.input['misc']['bgcolor'].value;
    data[where].padding = layout.input['misc']['padding'].value;
    data[where].margin = layout.input['misc']['margin'].value;
    data[where].display = layout.input['misc']['display'].value;
    data[where].cursor = layout.input['misc']['cursor'].value;
    data[where].opacity = layout.input['misc']['opacity'].value;
    data[where].width = layout.input['misc']['width'].value;
    data[where].height = layout.input['misc']['height'].value;
    data[where].scale = layout.input['misc']['scale'].value;
    data[where].css = layout.input['misc']['customcss'].value;
    data[where].shadowx = layout.input['shadow']['x'].value;
    data[where].shadowy = layout.input['shadow']['y'].value;
    data[where].shadowblur = layout.input['shadow']['blur'].value;
    data[where].shadowspread = layout.input['shadow']['spread'].value;
    data[where].shadowcolor = layout.input['shadow']['color'].value;
}

function createCss(x, preview=false) {
    var css = "";
    css += "box-shadow: " + data[x].shadowcolor + " " + (data[x].shadowx !== "" ? data[x].shadowx : "0") + " " + (data[x].shadowy !== "" ? data[x].shadowy : "0") + " " + (data[x].shadowblur !== "" ? data[x].shadowblur:"0") + " " + data[x].shadowspread + " " + (data[x].shadowinset ? "inset" : "") + ";\n";
    css += "text-decoration: " + (data[x].textdecorover ? "overline" : "") + (data[x].textdecorthrough ? " line-through" : "") + (data[x].textdecorunder ? " underline" : "") + " " + data[x].textdecorstyle + " " + data[x].textdecorcolor + " " + data[x].textdecorsize +";\n";
    css += "font-size: " + data[x].fontsize + ";\n"; css += "font-weight: " + data[x].fontweight + ";\n";
    css += "font-style: " + data[x].fontstyle + ";\n"; css += "font-family: " + data[x].font + ";\n";
    css += "color: " + data[x].fontcolor + ";\n"; css += "text-align: " + data[x].textalign + ";\n";
    css += "line-height: " + data[x].lineheight + ";\n"; css += "direction: " + data[x].textdirection + ";\n";
    css += "letter-spacing: " + data[x].letterspacing + ";\n"; css += "text-transform: " + data[x].transform + ";\n";
    if (data[x].borderprops.style === 'none') {
        css += "border: none;\n";
    } else if (data[x].borderprops.style === 'mixed') {

        css += "border-left: " + data[x].bordermix.left + " " + data[x].bordermix.leftw + " " + data[x].bordermix.leftc + ";\n";
        css += "border-right: " + data[x].bordermix.right + " " + data[x].bordermix.rightw + " " + data[x].bordermix.rightc + ";\n";
        css += "border-top: " + data[x].bordermix.top + " " + data[x].bordermix.topw + " " + data[x].bordermix.topc + ";\n";
        css += "border-bottom: " + data[x].bordermix.bottom + " " + data[x].bordermix.bottomw + " " + data[x].bordermix.bottomc + ";\n";

    } else {
        css += "border: " + data[x].borderprops.style + " " + data[x].borderprops.width + " " + data[x].borderprops.color + ";\n";
    }
    if (data[x].borderradius.style === 'uni') {
        css += "border-radius: " + data[x].borderradius.size + ";\n";
    } else {
        if (data[x].borderradius.customstyle === 1) {
            css += "border-radius: " + data[x].borderradius.tlp + " " + data[x].borderradius.trp + " " + data[x].borderradius.brp + " " + data[x].borderradius.blp + ";\n";
        } else {
            css += "border-radius: " + data[x].borderradius.tlp + " " + data[x].borderradius.trp + " " + data[x].borderradius.brp + " " + data[x].borderradius.blp + " / " + data[x].borderradius.tls + " " + data[x].borderradius.trs + " " + data[x].borderradius.brs + " " + data[x].borderradius.bls + ";\n";
        }
    }
    css += "background-color: " + data[x].bg + ";\n"; css += "padding: " + data[x].padding + ";\n"; css += "cursor: " + data[x].cursor + ";\n"; 
    css += "margin: " + data[x].margin + ";\n"; css += "display: " + data[x].display + ";\n"; css += "opacity: " + data[x].opacity + ";\n";   
    if (data[x].display !== 'inline') {
        css += "width: " + data[x].width + ";\n"; css += "height: " + data[x].height + ";\n";
    }
    css += "scale: " + (preview ? (Number(data[x].scale) * Number(layout.view.scale.value)).toString() : data[x].scale) + ";\n";
    css += data[x].css + ";\n";
    return css;
}

function changePreview() {
    layout.btn.innerHTML = layout.view.text.value;
    layout.prw.style.backgroundColor = layout.view.bg.value;
    layout.prw.style.alignItems = layout.view.v.value;
    layout.prw.style.justifyContent = layout.view.h.value;
}

function generateCode() {
    var normal = createCss('normal');
    var hover = createCss('hover');
    var active = createCss('active');
    var selectorpart;
    if (data['global'].selector === 'class') { selectorpart = "." + (data['global'].selectorName !== "" ? data['global'].selectorName : "buttonClass") }
    if (data['global'].selector === 'id') { selectorpart = "#" + (data['global'].selectorName !== "" ? data['global'].selectorName : "buttonID") }
    if (data['global'].selector === 'button') { selectorpart = "button" }
    var normalpart = selectorpart + " {\n" + normal + "transition: " + data["global"].transition + ";\n" + (data["global"].preventTextSelection ? "-webkit-user-select: none;\n-ms-user-select: none;\nuser-select: none;\n" : "") + "}\n";
    var hoverpart = data['hover'].enabled ? selectorpart + ":hover {\n" + hover + "}\n" : "";
    var activepart = data['active'].enabled ? selectorpart + ":active {\n" + active + "}" : "";
    code = (normalpart + hoverpart + activepart).replaceAll(";;", ";").replaceAll(";\n;", ";");
    var intermed = code.replaceAll("\n", "<br>&nbsp;&nbsp;&nbsp;&nbsp;").replaceAll("<br>&nbsp;&nbsp;&nbsp;&nbsp;}", "<br>}").replaceAll(";<br>&nbsp;&nbsp;&nbsp;&nbsp;;", ";").replaceAll("<br>&nbsp;&nbsp;&nbsp;&nbsp;<br>", "<br>").replaceAll("}<br>&nbsp;&nbsp;&nbsp;&nbsp;", "}<br><br>");
    layout.code.innerHTML = intermed.replaceAll(":", "</span><span class='symbol'>:</span>").replaceAll("&nbsp;&nbsp;&nbsp;&nbsp;", "&nbsp;&nbsp;&nbsp;&nbsp;<span class='kw'>").replaceAll(":</span>hover", ":</span><span class='prop'>hover</span>").replaceAll(":</span>active", ":</span><span class='prop'>active</span>").replaceAll("&nbsp;", "___RESERVED SPACE___").replaceAll(";", "</span><span class='symbol'>;</span>").replaceAll("___RESERVED SPACE___", "&nbsp;").replaceAll("{", "</span><span class='symbol'>{</span>").replaceAll("}", "</span><span class='symbol'>}</span>");
}

function downloadCss() {
    var filet = code;
    var elementr = document.createElement('a');
    elementr.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(filet));
    var filen = layout.input.selectorname.value !== "" ? layout.input.selectorname.value : "button";

    elementr.setAttribute('download', filen + ".css");

    elementr.style.display = 'none';
    document.body.appendChild(elementr);

    elementr.click();

    document.body.removeChild(elementr);
}

function copyCss() {
    navigator.clipboard.writeText(code);
    document.getElementById("copycodebutton").src = 'https://img.icons8.com/?size=100&id=uNzoeGXjLfRM&format=png&color=FFFFFF';
    window.setTimeout(() => { document.getElementById("copycodebutton").src = 'https://img.icons8.com/?size=100&id=ZyQyiaVmUZvu&format=png&color=FFFFFF' }, 1000);
}

function fixSelector() {
    layout.input.selectorname.value = layout.input.selectorname.value.replaceAll(/[^a-zA-Z0-9_-]/g, "");
    updateData();
}