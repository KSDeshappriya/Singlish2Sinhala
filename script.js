function $() {
    var elm, arg = arguments;
    var elm = new Array();
    for (var i = 0; i < arg.length; i++) {
        var elm = arg[i];
        if (typeof elm == 'string') elm = document.getElementById(elm);
        if (arg.length == 1) return elm;
        elements.push(elm);
    }
    return elements;
}

function conv() {
    document.getElementById("typtext").focus();
    var Eset, Sset, fnd, i, j, l, k, n;
    var text = document.getElementById("typtext").value;
    var vowsetE = Array("au", "aa", "ai", "AA", "ae", "A", "ii", "ee", "ie", "uu", "ea", "ei", "oo", "e", "o", "a", "i", "u");
    var consetE = Array("jny", "nyj", "NDH", "kh", "gh", "NG", "ng", "ch", "CH", "ny", "ND", "th", "TH", "dh", "DH", "bh", "sh", "SH", "p", "P", "b", "m", "B", "r", "l", "v", "s", "h", "L", "f", "n", "g", "j", "J", "k", "d", "t", "T", "D", "N", 'Y', 'y', 'c', 'w'); /*specials  */
    var specsetE = Array("ruu", "ru");
    var specsetE1 = Array("'nng", "'ng", "Luu", "Lu", "LUU", "LU", "RUU", "RU");
    var specsetE2 = Array('්' + "R", "R");
    var signsetE = Array("au", "'LL", "aa", "AA", "ae", "ii", "ee", "ie", "uu", "u", "ea", "ei", "e", "ai", "oo", "o", "'L", "i", "A", "a");
    var vowsetS = Array("ඖ", "ආ", "ඓ", "ඈ", "ඈ", "ඇ", "ඊ", "ඊ", "ඊ", "ඌ", "ඒ", "ඒ", "ඕ", "එ", "ඔ", "අ", "ඉ", "උ");
    var consetS = Array("ඥ", "ඦ", "ඳ", "ඛ", "ඝ", "ඞ", "ඟ", "ච", "ඡ", "ඤ", "ඬ", "ත", "ථ", "ද", "ධ", "භ", "ශ", "ෂ", "ප", "ඵ", "බ", "ම", "ඹ", "ර", "ල", "ව", "ස", "හ", "ළ", "ෆ", "න", "ග", "ජ", "ඣ", "ක", "ඩ", "ට", "ඨ", "ඪ", "ණ", '‍ය', 'ය', "ක", "ව");
    var specsetS = Array("ෲ", "ෘ");
    var specsetS1 = Array("ඃ", "ං", 'ළූ', 'ළු', "ඐ", "ඏ", "ඎ", "ඍ");
    var specsetS2 = Array('ර්' + '\u200D' + '\u200D', 'ර්' + '\u200D' + '\u200D');
    var signsetS = Array("ෞ", "ෳ", "ා", "ෑ", "ෑ", "ී", "ී", "ී", "ූ", "ු", "ේ", "ේ", "ෙ", "ෛ", "ෝ", "ො", "ෟ", "ි", "ැ", ""); /* special  */
    for (var i = 0; i < specsetE1.length; i++) {
        fnd = new RegExp(specsetE1[i], "g");
        text = text.replace(fnd, specsetS1[i]);
    }
    for (var i = 0; i < specsetE.length; i++) {
        for (var j = 0; j < consetE.length; j++) {
            Eset = consetE[j] + specsetE[i];
            Sset = consetS[j] + specsetS[i];
            fnd = new RegExp(Eset, "g");
            text = text.replace(fnd, Sset);
        }
    } /*   rakaransaya  */
    for (var j = 0; j < consetE.length; j++) {
        for (var i = 0; i < signsetE.length; i++) {
            Eset = consetE[j] + "r" + signsetE[i];
            Sset = consetS[j] + "්‍ර" + signsetS[i];
            fnd = new RegExp(Eset, "g");
            text = text.replace(fnd, Sset);
        }
        Eset = consetE[j] + "r";
        Sset = consetS[j] + "්‍ර";
        fnd = new RegExp(Eset, "g");
        text = text.replace(fnd, Sset);
    }
    for (i = 0; i < consetE.length; i++) {
        for (j = 0; j < signsetE.length; j++) {
            Eset = consetE[i] + signsetE[j];
            Sset = consetS[i] + signsetS[j];
            fnd = new RegExp(Eset, "g");
            text = text.replace(fnd, Sset);
        }
    }
    for (var i = 0; i < consetE.length; i++) {
        fnd = new RegExp(consetE[i], "g");
        text = text.replace(fnd, consetS[i] + "්");
    }
    for (var i = 0; i < vowsetE.length; i++) {
        fnd = new RegExp(vowsetE[i], "g");
        text = text.replace(fnd, vowsetS[i]);
    }
    for (var i = 0; i < specsetE2.length; i++) {
        fnd = new RegExp(specsetE2[i], "g");
        text = text.replace(fnd, specsetS2[i]);
    }
    l = new RegExp("//", "g");
    text = text.replace(l, "{qxz}");
    k = new RegExp("/", "g");
    text = text.replace(k, "");
    n = new RegExp("{qxz}", "g");
    text = text.replace(n, "/");
    document.getElementById("convtext").value = text;
}

function wksp() {
    var wksptypext = $("typtext").style;
    var wkspcnvtxt = $("convtext").style;
    var wdth = $("wkspwdth").value;
    var hght = $("wksphgt").value;
    var fntsz = $("wksptxtsz").value;
    $("txt_cnts").getElementsByTagName("table")[0].style.width = wdth;
    $("txt_cnts").getElementsByTagName("table")[1].style.width = wdth;
    wkspcnvtxt.height = hght;
    wksptypext.height = hght;
    wkspcnvtxt.fontSize = fntsz;
    wksptypext.fontSize = fntsz;
    $("wkspcfm").style.display = 'none';
    transtable_wksp();
}

function wkspcfmc() {
    if ($("wkspcfm").style.getPropertyValue) {
        var wkspcfmcdpl = $("wkspcfm").style.getPropertyValue("display");
    }
    if ($("wkspcfm").style.getAttribute) {
        var wkspcfmcdpl = $("wkspcfm").style.getAttribute("display")
    }
    if (wkspcfmcdpl == 'block') {
        $("wkspcfm").style.display = 'none';
    } else {
        $("wkspcfm").style.display = 'block';
    }
    $("stngfrm").style.display = 'none';
    $("crntvsncnt").style.display = 'none';
    $("help_cnt").style.display = 'none';
}

function stngfrmdsp() {
    if ($("stngfrm").style.getPropertyValue) {
        var stngfrmv = $("stngfrm").style.getPropertyValue("display");
    }
    if ($("stngfrm").style.getAttribute) {
        var stngfrmv = $("stngfrm").style.getAttribute("display")
    }
    if (stngfrmv == 'block') {
        $("stngfrm").style.display = 'none';
    } else {
        $("stngfrm").style.display = 'block';
    }
    $("wkspcfm").style.display = 'none';
    $("crntvsncnt").style.display = 'none';
    $("help_cnt").style.display = 'none';
}

function copytext() {
    $("convtext").select();
    document.execCommand('copy', false, null);
    $("stpotrans").value = $("typtext").value.length;
    $("difpos").value = 0;
    mvcursor();
}

function mvcursor() {
    var selstpt = Number(document.getElementById("stpotrans").value);
    var diflgh = Number(document.getElementById("difpos").value);
    var textarea = document.getElementById("typtext");
    selstpt = document.getElementById("stpotrans").value = selstpt + diflgh;
    if ('selectionStart' in textarea || 'selectionEnd' in textarea) {
        textarea.selectionStart = selstpt;
        textarea.selectionEnd = selstpt;
    } else if (document.selection) {
        var textrange = document.selection.createRange();
        textrange.moveStart("character", 0);
        textrange.collapse();
        textrange.moveEnd("character", -diflgh);
        textrange.select();
    }
}

function mvcursor2() {
    var selstpt = Number(document.getElementById("stpotrans").value);
    var diflgh = Number(document.getElementById("difpos").value);
    var textarea = document.getElementById("typtext");
    selstpt = document.getElementById("stpotrans").value = selstpt + diflgh;
    if ('selectionStart' in textarea || 'selectionEnd' in textarea) {
        textarea.selectionStart = selstpt;
        textarea.selectionEnd = selstpt;
    } else if (document.selection) {
        var textrange = document.selection.createRange();
        textrange.moveStart("character", diflgh);
        textrange.collapse();
        textrange.moveEnd("character", diflgh);
        textrange.select();
    }
}

function txtselclk() {
    var textarea = document.getElementById("typtext");
    if ('selectionStart' in textarea) {
        document.getElementById("stpotrans").value = textarea.selectionStart;
        textarea.selectionStart = document.getElementById("stpotrans").value;
    } else {
        if (document.selection) {
            var Strdrelm = document.getElementById("typtext");
            var textrange = document.selection.createRange();
            var strdrange = textrange.duplicate();
            strdrange.moveToElementText(Strdrelm);
            strdrange.setEndPoint('EndToEnd', textrange);
            document.getElementById("stpotrans").value = strdrange.text.length - textrange.text.length;
        }
    }
}

function clearall() {
    document.getElementById("typtext").value = '';
    document.getElementById("typtext").placeholder = "";
    document.getElementById("stpotrans").value = 0;
    document.getElementById("difpos").value = 0;
    mvcursor()
}

function transfer() {
    var td = document.getElementById("typtext").value;
    document.getElementById("transfered").innerHTML = td;
}

function redotrigger() {
    var trslt11 = document.getElementById("saver1").value;
    var maintxt = document.getElementById("typtext").value;
    var comptxt = document.getElementById("save1").value;
    if (trslt11 != maintxt) {
        temptrnf1();
    }
}

function undotrigger() {
    var trslt1 = document.getElementById("save1").value;
    var maintxt = document.getElementById("typtext").value;
    trslt11 = document.getElementById("saver1").value;
    if (trslt1 != maintxt && trslt11 != maintxt) {
        temptrnf2();
    }
}

function temptrnf1() {
    $("save10").value = $("save9").value;
    $("save9").value = $("save8").value;
    $("save8").value = $("save7").value;
    $("save7").value = $("save6").value;
    $("save6").value = $("save5").value;
    $("save5").value = $("save4").value;
    $("save4").value = $("save3").value;
    $("save3").value = $("save2").value;
    $("save2").value = $("save1").value;
    $("save1").value = $("typtext").value;
}

function undotrnf() {
    var textarea = $("typtext");
    var prelgh = Number(textarea.value.length);
    $("typtext").value = $("save1").value;
    $("save1").value = $("save2").value;
    $("save2").value = $("save3").value;
    $("save3").value = $("save4").value;
    $("save4").value = $("save5").value;
    $("save5").value = $("save6").value;
    $("save6").value = $("save7").value;
    $("save7").value = $("save8").value;
    $("save8").value = $("save9").value;
    $("save9").value = $("save10").value;
    var aftlgh = Number(textarea.value.length);
    var diflgh = aftlgh - prelgh;
    $("difpos").value = diflgh;
    mvcursor2();
}

function temptrnf2() {
    $("saver10").value = $("saver9").value;
    $("saver9").value = $("saver8").value;
    $("saver8").value = $("saver7").value;
    $("saver7").value = $("saver6").value;
    $("saver6").value = $("saver5").value;
    $("saver5").value = $("saver4").value;
    $("saver4").value = $("saver3").value;
    $("saver3").value = $("saver2").value;
    $("saver2").value = $("saver1").value;
    $("saver1").value = $("typtext").value;
}

function redotrnf() {
    var textarea = $("typtext");
    var prelgh = Number(textarea.value.length);
    $("typtext").value = $("saver1").value;
    $("saver1").value = $("saver2").value;
    $("saver2").value = $("saver3").value;
    $("saver3").value = $("saver4").value;
    $("saver4").value = $("saver5").value;
    $("saver5").value = $("saver6").value;
    $("saver6").value = $("saver7").value;
    $("saver7").value = $("saver8").value;
    $("saver8").value = $("saver9").value;
    $("saver9").value = $("saver10").value;
    var aftlgh = Number(textarea.value.length);
    var diflgh = aftlgh - prelgh;
    $("difpos").value = diflgh;
    mvcursor2();
}

function crntvsn() {
    if ($("crntvsncnt").style.getPropertyValue) {
        var crntvsndpl = $("crntvsncnt").style.getPropertyValue("display");
    }
    if ($("crntvsncnt").style.getAttribute) {
        var crntvsndpl = $("crntvsncnt").style.getAttribute("display")
    }
    if (crntvsndpl == 'block') {
        $("crntvsncnt").style.display = 'none';
        window.scrollTo(0, 0);
    } else {
        $("crntvsncnt").style.display = 'block'
    }
    $("stngfrm").style.display = 'none';
    $("wkspcfm").style.display = 'none';
    $("help_cnt").style.display = 'none';
}

function hlpcntopn() {
    if ($("help_cnt").style.getPropertyValue) {
        var crntvsndpl = $("help_cnt").style.getPropertyValue("display");
    }
    if ($("help_cnt").style.getAttribute) {
        var crntvsndpl = $("help_cnt").style.getAttribute("display")
    }
    if (crntvsndpl == 'block') {
        $("help_cnt").style.display = 'none';
        window.scrollTo(0, 0);
    } else {
        $("help_cnt").style.display = 'block'
    }
    $("stngfrm").style.display = 'none';
    $("wkspcfm").style.display = 'none';
    $("crntvsncnt").style.display = 'none';
};

function transtable_wksp() {
    if ("innerWidth" in document.documentElement) {
        var wrapperw = $("outer_wrapper").innerWidth + "px";
        var textareaw = $("typtext").innerWidth + "px";
    } else {
        var wrapperw = $("outer_wrapper").clientWidth + "px";
        var textareaw = $("typtext").clientWidth + "px";
    };
    var rg = /\D/g;
    var wid_wrapper = wrapperw.replace(rg, "");
    var wid_textarea = textareaw.replace(rg, "");
    var ratio = Number(wid_wrapper) / Number(wid_textarea);
    if ($("trans_cntTable").style.getPropertyValue) {
        var dplstatus = $("trans_cntTable").style.getPropertyValue("display");
    }
    if ($("trans_cntTable").style.getAttribute) {
        var dplstatus = $("trans_cntTable").style.getAttribute("display");
    }
    if (dplstatus == 'block') {
        if (ratio <= 2.95) {
            $("trans_cntTable").style.width = "100%";
        }
        if (ratio > 2.95) {
            $("trans_cntTable").style.width = "33%";
        }
    }
}

function transtable() {
    if ("innerWidth" in document.documentElement) {
        var wrapperw = $("outer_wrapper").innerWidth + "px";
        var textareaw = $("typtext").innerWidth + "px";
    } else {
        var wrapperw = $("outer_wrapper").clientWidth + "px";
        var textareaw = $("typtext").clientWidth + "px";
    };
    var rg = /\D/g;
    var wid_wrapper = wrapperw.replace(rg, "");
    var wid_textarea = textareaw.replace(rg, "");
    var ratio = Number(wid_wrapper) / Number(wid_textarea);
    if ($("trans_cntTable").style.getPropertyValue) {
        var dplstatus = $("trans_cntTable").style.getPropertyValue("display");
    }
    if ($("trans_cntTable").style.getAttribute) {
        var dplstatus = $("trans_cntTable").style.getAttribute("display");
    }
    if (dplstatus == 'block') {
        $("trans_cntTable").style.display = "none";
        if (2 >= ratio && ratio > 1) {
            $("wkspwdth").value = "100%";
        }
        if (ratio > 2) {
            $("wkspwdth").value = "50%";
        }
    } else {
        $("trans_cntTable").style.display = "block";
        if (ratio > 1.98 && Number(wid_wrapper) > 1000) {
            $("wkspwdth").value = "33%";
            $("trans_cntTable").style.width = "33%";
        } else {
            $("trans_cntTable").style.width = "100%";
        }
    }
    $("txt_cnts").getElementsByTagName("table")[0].style.width = $("wkspwdth").value;
    $("txt_cnts").getElementsByTagName("table")[1].style.width = $("wkspwdth").value;
}



function add(a, b) {
    return a + b;
}

// Usage
const result = add(5, 3);
