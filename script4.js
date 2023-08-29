function $(id) {
    return document.getElementById(id);
}

// 
const conversions = {
    vowsetE: ["au", "aa", "ai", "AA", "ae", "A", "ii", "ee", "ie", "uu", "ea", "ei", "oo", "e", "o", "a", "i", "u"],
    consetE: ["jny", "nyj", "NDH", "kh", "gh", "NG", "ng", "ch", "CH", "ny", "ND", "th", "TH", "dh", "DH", "bh", "sh", "SH", "p", "P", "b", "m", "B", "r", "l", "v", "s", "h", "L", "f", "n", "g", "j", "J", "k", "d", "t", "T", "D", "N", 'Y', 'y', 'c', 'w'],
    specsetE: ["ruu", "ru"],
    specsetE1: ["'nng", "'ng", "Luu", "Lu", "LUU", "LU", "RUU", "RU"],
    specsetE2: ['්' + "R", "R"],
    signsetE: ["au", "'LL", "aa", "AA", "ae", "ii", "ee", "ie", "uu", "u", "ea", "ei", "e", "ai", "oo", "o", "'L", "i", "A", "a"],
    vowsetS: ["ඖ", "ආ", "ඓ", "ඈ", "ඈ", "ඇ", "ඊ", "ඊ", "ඊ", "ඌ", "ඒ", "ඒ", "ඕ", "එ", "ඔ", "අ", "ඉ", "උ"],
    consetS: ["ඥ", "ඦ", "ඳ", "ඛ", "ඝ", "ඞ", "ඟ", "ච", "ඡ", "ඤ", "ඬ", "ත", "ථ", "ද", "ධ", "භ", "ශ", "ෂ", "ප", "ඵ", "බ", "ම", "ඹ", "ර", "ල", "ව", "ස", "හ", "ළ", "ෆ", "න", "ග", "ජ", "ඣ", "ක", "ඩ", "ට", "ඨ", "ඪ", "ණ", '‍ය', 'ය', "ක", "ව"],
    specsetS: ["ෲ", "ෘ"],
    specsetS1: ["ඃ", "ං", 'ළූ', 'ළු', "ඐ", "ඏ", "ඎ", "ඍ"],
    specsetS2: ['ර්' + '\u200D' + '\u200D', 'ර්' + '\u200D' + '\u200D'],
    signsetS: ["ෞ", "ෳ", "ා", "ෑ", "ෑ", "ී", "ී", "ී", "ූ", "ු", "ේ", "ේ", "ෙ", "ෛ", "ෝ", "ො", "ෟ", "ි", "ැ", ""]
};

function conv() {
    document.getElementById("typtext").focus();
    var Eset, Sset, fnd, i, j, l, k, n;
    var text = document.getElementById("typtext").value;

    /* This `for` loop is iterating over the elements in the `conversions.specsetE1` array. It creates
    a regular expression pattern using each element as the search pattern and the "g" flag for
    global search. Then, it replaces all occurrences of the search pattern in the `text` variable
    with the corresponding element from the `conversions.specsetS1` array. */
    for (var i = 0; i < conversions.specsetE1.length; i++) {
        fnd = new RegExp(conversions.specsetE1[i], "g");
        text = text.replace(fnd, conversions.specsetS1[i]);
    }

    /* The code is iterating over the elements in the `conversions.specsetE` array and the
    `conversions.consetE` array. For each combination of elements, it creates a regular expression
    pattern using the concatenation of the current element from `conversions.consetE` and
    `conversions.specsetE` as the search pattern. It then replaces all occurrences of the search
    pattern in the `text` variable with the concatenation of the corresponding elements from
    `conversions.consetS` and `conversions.specsetS`. This code is essentially performing a
    character substitution in the `text` variable based on the specified conversion rules. */
    for (var i = 0; i < conversions.specsetE.length; i++) {
        for (var j = 0; j < conversions.consetE.length; j++) {
            Eset = conversions.consetE[j] + conversions.specsetE[i];
            Sset = conversions.consetS[j] + conversions.specsetS[i];
            fnd = new RegExp(Eset, "g");
            text = text.replace(fnd, Sset);
        }
    }

    /* The code is iterating over the elements in the `conversions.consetE` array and the
    `conversions.signsetE` array. For each combination of elements, it creates a regular expression
    pattern using the concatenation of the current element from `conversions.consetE`, the letter
    "r", and the current element from `conversions.signsetE` as the search pattern. It then replaces
    all occurrences of the search pattern in the `text` variable with the concatenation of the
    corresponding elements from `conversions.consetS`, the Sinhala character "්‍ර", and the current
    element from `conversions.signsetS`. */
    for (var j = 0; j < conversions.consetE.length; j++) {
        for (var i = 0; i < conversions.signsetE.length; i++) {
            Eset = conversions.consetE[j] + "r" + conversions.signsetE[i];
            Sset = conversions.consetS[j] + "්‍ර" + conversions.signsetS[i];
            fnd = new RegExp(Eset, "g");
            text = text.replace(fnd, Sset);
        }
        Eset = conversions.consetE[j] + "r";
        Sset = conversions.consetS[j] + "්‍ර";
        fnd = new RegExp(Eset, "g");
        text = text.replace(fnd, Sset);
    }

    /* The code is iterating over the elements in the `conversions.consetE` array and the
    `conversions.signsetE` array. For each combination of elements, it creates a regular expression
    pattern using the concatenation of the current element from `conversions.consetE` and
    `conversions.signsetE` as the search pattern. It then replaces all occurrences of the search
    pattern in the `text` variable with the concatenation of the corresponding elements from
    `conversions.consetS` and `conversions.signsetS`. */
    for (i = 0; i < conversions.consetE.length; i++) {
        for (j = 0; j < conversions.signsetE.length; j++) {
            Eset = conversions.consetE[i] + conversions.signsetE[j];
            Sset = conversions.consetS[i] + conversions.signsetS[j];
            fnd = new RegExp(Eset, "g");
            text = text.replace(fnd, Sset);
        }
    }

    /* This `for` loop is iterating over the elements in the `conversions.consetE` array. For each
    element, it creates a regular expression pattern using the current element as the search pattern
    and the "g" flag for global search. It then replaces all occurrences of the search pattern in
    the `text` variable with the concatenation of the corresponding element from the
    `conversions.consetS` array and the Sinhala character "්". */
    for (var i = 0; i < conversions.consetE.length; i++) {
        fnd = new RegExp(conversions.consetE[i], "g");
        text = text.replace(fnd, conversions.consetS[i] + "්");
    }

    /* This `for` loop is iterating over the elements in the `conversions.vowsetE` array. For each
    element, it creates a regular expression pattern using the current element as the search pattern
    and the "g" flag for global search. It then replaces all occurrences of the search pattern in
    the `text` variable with the corresponding element from the `conversions.vowsetS` array.
    Essentially, it is performing a character substitution in the `text` variable based on the
    specified conversion rules for vowel characters. */
    for (var i = 0; i < conversions.vowsetE.length; i++) {
        fnd = new RegExp(conversions.vowsetE[i], "g");
        text = text.replace(fnd, conversions.vowsetS[i]);
    }

    /* This `for` loop is iterating over the elements in the `conversions.specsetE2` array. For each
    element, it creates a regular expression pattern using the current element as the search pattern
    and the "g" flag for global search. It then replaces all occurrences of the search pattern in
    the `text` variable with the corresponding element from the `conversions.specsetS2` array.
    Essentially, it is performing a character substitution in the `text` variable based on the
    specified conversion rules for special characters. */
    for (var i = 0; i < conversions.specsetE2.length; i++) {
        fnd = new RegExp(conversions.specsetE2[i], "g");
        text = text.replace(fnd, conversions.specsetS2[i]);
    }

    /* This code is performing a character substitution in the `text` variable. */
    l = new RegExp("//", "g");
    text = text.replace(l, "{qxz}");
    k = new RegExp("/", "g");
    text = text.replace(k, "");
    n = new RegExp("{qxz}", "g");
    text = text.replace(n, "/");
    document.getElementById("convtext").value = text;
}
//   

/**
 * The function sets the styles for a workspace by adjusting the width, height, and font size of text
 * elements.
 */
function setWorkspaceStyles() {
    const typtext = $("typtext").style;
    const convtext = $("convtext").style;
    const wdth = $("wkspwdth").value;
    const hght = $("wksphgt").value;
    const fntsz = $("wksptxtsz").value;

    const txt_cnts_tables = $("txt_cnts").getElementsByTagName("table");
    txt_cnts_tables[0].style.width = wdth;
    txt_cnts_tables[1].style.width = wdth;

    convtext.height = hght;
    typtext.height = hght;
    convtext.fontSize = fntsz;
    typtext.fontSize = fntsz;

    $("wkspcfm").style.display = 'none';
    transtable_wksp();
}

/**
 * The function toggles the display property of an element between 'block' and 'none'.
 * @param elementId - The elementId parameter is a string that represents the id of the HTML element
 * you want to toggle the display of.
 */
function toggleDisplay(elementId) {
    const element = $(elementId);
    if (element) {
        element.style.display = element.style.display === 'block' ? 'none' : 'block';
    }
}

/**
 * The function initializes event listeners for input elements and calls other functions to handle the
 * input.
 */
function initialize() {
    $("typtext").addEventListener('input', convertText);
    $("wkspwdth").addEventListener('input', setWorkspaceStyles);
    $("wksphgt").addEventListener('input', setWorkspaceStyles);
    $("wksptxtsz").addEventListener('input', setWorkspaceStyles);
}


/**
 * The function `txtselclk()` is used to determine the position of the cursor within a textarea element
 * when the user clicks on it.
 */
function txtselclk() {
    var textarea = document.getElementById("typtext");
    if ('selectionStart' in textarea) {
        // document.getElementById("stpotrans").value = textarea.selectionStart;
        // textarea.selectionStart = document.getElementById("stpotrans").value;
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