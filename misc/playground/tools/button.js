var currentTab = 'editor';
var datacount = 0;
var code = "";
var inline = false;

var data = {
    data: {},
    class: "",
    id: "",
    lang: "en",
    innerHTML: "",
    name: "",
    title: "",
    tabindex: "",
    type: "button",
    value: "",
    popovertarget: "",
    popoveraction: "toggle",
    popover: false,
    form: "",
    formaction: "",
    formenctype: "application/x-www-form-urlencoded",
    formmethod: "get",
    formtarget: "_blank",
    formtargetframe: "",
    formnovalidate: false,
    style: "",
    hidden: false,
    disabled: false,
    inert: false,
    translate: true,
    draggable: false,
    autofocus: false,
    contenteditable: false,
    event: {
        clicktype: "link",
        clickvalue: "",
        dblclicktype: "link",
        dblclickvalue: "",
        contextmenutype: "link",
        contextmenuvalue: "",
        contextmenuprevent: true,
        resize: "",
        focus: "",
        select: "",
        copy: "",
        mousedown: "",
        mouseup: "",
        mouseover: "",
        mousemove: "",
        mouseout: "",
        wheel: "",
        drag: "",
        dragstart: "",
        dragend: "",
        dragenter: "",
        dragleave: "",
        dragover: "",
        drop: ""
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

function updateData() {
    data.class = layout.input["class"].value;
    data.id = layout.input["id"].value;
    data.lang = layout.input["lang"].value;
    data.innerHTML = layout.input["innerHTML"].value;
    data.name = layout.input["name"].value;
    data.title = layout.input["title"].value;
    data.tabindex = layout.input["tabindex"].value;
    data.type = layout.input["type"].value;
    data.value = layout.input["value"].value;
    data.popovertarget = layout.input["popovertarget"].value;
    data.popoveraction = layout.input["popoveraction"].value;
    data.popover = layout.input["popover"].checked;
    data.form = layout.input["form"].value;
    data.formaction = layout.input["formaction"].value;
    data.formenctype = layout.input["formenctype"].value;
    data.formmethod = layout.input["formmethod"].value;
    data.formtarget = layout.input["formtarget"].value;
    data.formtargetframe = layout.input["formtargetframe"].value;
    data.formnovalidate = layout.input["formnovalidate"].checked;
    data.style = layout.input["style"].value;
    data.hidden = layout.input["hidden"].checked;
    data.disabled = layout.input["disabled"].checked;
    data.inert = layout.input["inert"].checked;
    data.translate = layout.input["translate"].checked;
    data.draggable = layout.input["draggable"].checked;
    data.autofocus = layout.input["autofocus"].checked;
    data.contenteditable = layout.input["contenteditable"].checked;
    data.event.clicktype = layout.event.click.type.value;
    data.event.clickvalue = layout.event.click.value.value;
    data.event.dblclicktype = layout.event.dblclick.type.value;
    data.event.dblclickvalue = layout.event.dblclick.value.value;
    data.event.contextmenutype = layout.event.contextmenu.type.value;
    data.event.contextmenuvalue = layout.event.contextmenu.value.value;
    data.event.contextmenuprevent = layout.event.contextmenu.preventdefault.checked;
    data.event.resize = layout.event.resize.value;
    data.event.focus = layout.event.focus.value;
    data.event.select = layout.event.select.value;
    data.event.copy = layout.event.copy.value;
    data.event.mousedown = layout.event.mousedown.value;
    data.event.mouseup = layout.event.mouseup.value;
    data.event.mouseover = layout.event.mouseover.value;
    data.event.mousemove = layout.event.mousemove.value;
    data.event.mouseout = layout.event.mouseout.value;
    data.event.wheel = layout.event.wheel.value;
    data.event.drag = layout.event.drag.value;
    data.event.dragstart = layout.event.dragstart.value;
    data.event.dragend = layout.event.dragend.value;
    data.event.dragenter = layout.event.dragenter.value;
    data.event.dragleave = layout.event.dragleave.value;
    data.event.dragover = layout.event.dragover.value;
    data.event.drop = layout.event.drop.value;

    data.data = {}
    for (let i in layout.data) {
        data.data[i] = {}
        data.data[i].key = layout.data[i].key.value;
        data.data[i].value = layout.data[i].value.value;
    }
}


function generateCode() {
    let sep = (inline ? " " : "\n");
    code = "<button" + sep;
    code += data.class ? 'class="' + TFIX(data.class) + '"' + sep : "";
    code += data.id ? 'id="' + data.id + '"' + sep : "";
    code += data.lang ? 'lang="' + data.lang + '"' + sep : "";
    code += data.name ? 'name="' + TFIX(data.name) + '"' + sep : "";
    code += data.title ? 'title="' + TFIX(data.title) + '"' + sep : "";
    code += data.tabindex ? 'tabindex="' + data.tabindex + '"' + sep : "";
    code += data.type !== 'button' ? 'type="' + data.type + '"' + sep : "";
    code += data.value ? 'value="' + TFIX(data.value) + '"' + sep : "";
    code += data.popovertarget ? 'popovertarget="' + data.popovertarget + '"' + sep : "";
    code += data.popoveraction !== 'toggle' ? 'popoveraction="' + data.popoveraction + '"' + sep : "";
    code += data.popover ? 'popover' + sep : "";
    if (data.type === 'submit') {
        code += data.form ? 'form="' + data.form + '"' + sep : "";
        code += data.formaction ? 'formaction="' + TFIX(data.formaction) + '"' + sep : "";
        code += data.formenctype !== 'application/x-www-form-urlencoded' ? 'formenctype="' + data.formenctype + '"' + sep : "";
        code += 'formmethod="' + data.formmethod + '"' + sep;
        code += 'formtarget="' + (data.formtarget ? data.formtarget : data.formtargetframe) + '"' + sep;
        code += data.formnovalidate ? 'formnovalidate' + sep : "";
    }
    code += data.style ? 'style="' + TFIX(data.style) + '"' + sep : "";
    code += data.hidden ? 'hidden' + sep : "";
    code += data.disabled ? 'disabled' + sep : "";
    code += data.inert ? 'inert' + sep : "";
    code += data.draggable ? 'draggable="true"' + sep : "";
    code += data.autofocus ? 'autofocus' + sep : "";
    code += data.contenteditable ? 'contenteditable' + sep : "";
    code += data.translate ? "" : 'translate="no"' + sep;

    code += data.event.resize ? 'onresize="' + data.event.resize + '"' + sep : "";
    code += data.event.focus ? 'onfocus="' + data.event.focus + '"' + sep : "";
    code += data.event.select ? 'onselect="' + data.event.select + '"' + sep : "";
    code += data.event.copy ? 'oncopy="' + data.event.copy + '"' + sep : "";
    code += data.event.mousedown ? 'onmousedown="' + data.event.mousedown + '"' + sep : "";
    code += data.event.mouseup ? 'onmouseup="' + data.event.mouseup + '"' + sep : "";
    code += data.event.mouseover ? 'onmouseover="' + data.event.mouseover + '"' + sep : "";
    code += data.event.mousemove ? 'onmousemove="' + data.event.mousemove + '"' + sep : "";
    code += data.event.mouseout ? 'onmouseout="' + data.event.mouseout + '"' + sep : "";
    code += data.event.wheel ? 'onwheel="' + data.event.wheel + '"' + sep : "";
    code += data.event.drag ? 'ondrag="' + data.event.drag + '"' + sep : "";
    code += data.event.dragstart ? 'ondragstart="' + data.event.dragstart + '"' + sep : "";
    code += data.event.dragend ? 'ondragend="' + data.event.dragend + '"' + sep : "";
    code += data.event.dragenter ? 'ondragenter="' + data.event.dragenter + '"' + sep : "";
    code += data.event.dragleave ? 'ondragleave="' + data.event.dragleave + '"' + sep : "";
    code += data.event.dragover ? 'ondragover="' + data.event.dragover + '"' + sep : "";
    code += data.event.drop ? 'ondrop="' + data.event.drop + '"' + sep : "";
    if (data.event.clicktype === "js" && data.event.clickvalue) {
        code += 'onclick="' + data.event.clickvalue + '"' + sep;
    } else if (data.event.clickvalue) {
        code += `onclick="document.location.href = '` + data.event.clickvalue + `';"` + sep;
    }
    if (data.event.dblclicktype === "js" && data.event.dblclickvalue) {
        code += 'ondblclick="' + data.event.dblclickvalue + '"' + sep;
    } else if (data.event.dblclickvalue) {
        code += `ondblclick="document.location.href = '` + data.event.dblclickvalue + `';"` + sep;
    }
    let cntx = data.event.contextmenuprevent ? ' return false;' : '';
    if (data.event.contextmenutype === "js" && data.event.contextmenuvalue) {
        code += 'oncontextmenu="' + data.event.contextmenuvalue + cntx + '"' + sep;
    } else if (data.event.contextmenuvalue) {
        code += `oncontextmenu="` +  `document.location.href = '` + data.event.contextmenuvalue + `';`+cntx+`"` + sep;
    }
    for (let i in data.data) {
        code += data.data[i].key?`data-${data.data[i].key}="${TFIX(data.data[i].value)}"` + sep:'';
    }

    code += ">" + data.innerHTML + "</button>"
    code = code.replaceAll(' >', '>')
    var intermed = code.replaceAll("<", '<span class="symbol"(((THISWILLBERT)))&lt;</span(((THISWILLBERT)))').replaceAll(">", '<span class="symbol">&gt;</span>').replaceAll("(((THISWILLBERT)))", ">");
    if (!inline) {
        intermed = intermed.replaceAll("\n", "<br>&nbsp;&nbsp;&nbsp;&nbsp;").replaceAll('&nbsp;&nbsp;&nbsp;&nbsp;<span class="symbol">&gt;</span>', '<span class="symbol">&gt;</span>');
        intermed = intermed.replaceAll(/<br>&nbsp;&nbsp;&nbsp;&nbsp;([a-zA-Z-]+)="/g, '<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class="prop">$1</span><span class="symbol">="</span>');
        intermed = intermed.replaceAll('"<br>', '<span class="symbol">"</span><br>');
    }

    intermed = intermed.replaceAll('<span class="symbol">&lt;</span>button', '<span class="symbol">&lt;</span><span class="kw">button</span>');
    intermed = intermed.replaceAll(/<span class="symbol">&lt;<\/span>([a-zA-Z][^\&=\"]*)<span class="symbol">&gt;<\/span>/g, '<span class="symbol">&lt;</span><span class="kw">$1</span><span class="symbol">&gt;</span>');
    intermed = intermed.replaceAll(/<span class="symbol">&lt;<\/span>\/([a-zA-Z][^\&=\"]*)<span class="symbol">&gt;<\/span>/g, '<span class="symbol">&lt;/</span><span class="kw">$1</span><span class="symbol">&gt;</span>');
    layout.code.innerHTML = intermed;
}

function TFIX(i) {
    return i.replaceAll('"', "'");
}

function fixScript(x) {
    x.value = x.value.replaceAll('"', "'");
    updateData();
}

function downloadCode() {
    var filet = code;
    var elementr = document.createElement('a');
    elementr.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(filet));
    var filen = layout.input["id"].value !== "" ? layout.input["id"].value : "button";

    elementr.setAttribute('download', filen + ".html");

    elementr.style.display = 'none';
    document.body.appendChild(elementr);

    elementr.click();

    document.body.removeChild(elementr);
}

function copyCode() {
    navigator.clipboard.writeText(code);
    document.getElementById("copycodebutton").src = 'https://img.icons8.com/?size=100&id=uNzoeGXjLfRM&format=png&color=FFFFFF';
    window.setTimeout(() => { document.getElementById("copycodebutton").src = 'https://img.icons8.com/?size=100&id=ZyQyiaVmUZvu&format=png&color=FFFFFF' }, 1000);
}

function fixSelector(x) {
    x.value = x.value.replaceAll(/[^a-zA-Z0-9_-]/g, "");
    updateData();
}

function newData() {
    layout.data[datacount] = {}
    layout.data[datacount].item = document.createElement("div");
    layout.data[datacount].item.classList.add("datagriditem");
    layout.data[datacount].item.id = "dataitem" + datacount;
    let div1 = document.createElement("div"); div1.classList.add("flex");
    let div1p = document.createElement("p"); div1p.innerHTML = "data-"; div1.appendChild(div1p);
    layout.data[datacount].key = document.createElement("input"); layout.data[datacount].key.classList.add("input"); layout.data[datacount].key.classList.add("fill"); layout.data[datacount].key.id = "datakey" + datacount; layout.data[datacount].key.setAttribute("oninput", "fixSelector(this); updateData()"); div1.appendChild(layout.data[datacount].key);
    let div2 = document.createElement("div"); div2.classList.add("flex");
    layout.data[datacount].value = document.createElement("input"); layout.data[datacount].value.classList.add("input"); layout.data[datacount].value.classList.add("fill"); layout.data[datacount].value.id = "datavalue" + datacount; layout.data[datacount].value.setAttribute("oninput","updateData()"); div2.appendChild(layout.data[datacount].value);
    let trash = document.createElement("img"); trash.src = "https://kingpvz.github.io/global_resources/icons/delete.png"; trash.classList.add("imgbutton"); trash.classList.add("fit"); trash.setAttribute("onclick", `deleteData(${datacount}); updateData();`);
    layout.data[datacount].item.appendChild(div1); layout.data[datacount].item.appendChild(div2); layout.data[datacount].item.appendChild(trash);
    document.getElementById("datagrid").appendChild(layout.data[datacount].item);

    datacount++;
}

function deleteData(id) {
    document.getElementById("datagrid").removeChild(layout.data[id].item);
    delete layout.data[id];
}