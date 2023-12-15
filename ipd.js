let applyTemplate = () => {
    console.log("applyTemplate");
    var n = document.getElementById("rangeTemplate").value;
    var komentar = "Terima Kasih dan sukses selalu";

    if (n >= 2)
        komentar = "Terima Kasih dan sukses selalu";
    else {
        komentar = "Kurang Baik";
        var confirm = window.confirm("Apakah anda yakin untuk memberikan nilai buruk?");
        if (confirm != true)
            return;

        var confirm2 = window.confirm("Apakah anda benar-benar yakin untuk memberikan nilai buruk?");

        if (confirm != true && confirm2 != true)
            return;
    }

    document.getElementById("txtKomentar").value = komentar;
    document.getElementById("chkPermanent").checked = true;
    var dosen = document.querySelectorAll('input[type="radio"][id$="' + n + '1"]')
    for (var i = 0; i < dosen.length; i++) {
        dosen[i].checked = true;
    }
    var mk = document.querySelectorAll('input[type="radio"][id$="' + n + '"]')
    for (var i = 0; i < mk.length; i++) {
        mk[i].checked = true;
    }
}

let x = document.getElementById("sipform");
let y = document.querySelector("body > div:nth-child(12) > table");

let input = document.createElement("input");
input.type = "range";
input.min = 1;
input.max = 4;
input.value = 4;
input.id = "rangeTemplate";
input.oninput = () => { document.getElementById("rangeValue").innerText = document.getElementById("rangeTemplate").value; }

let output = document.createElement("span");
output.id = "rangeValue";
output.innerText = input.value;

let button = document.createElement("input");
button.type = "button";
button.value = "Apply";
button.id = "applyTemplate";
button.onclick = () => applyTemplate()

let button2 = document.createElement("input");
button2.type = "button";
button2.value = "Submit";
button2.id = "submitTemplate";
button2.onclick = () => document.querySelector("#form2 > div > div:nth-child(10) > input:nth-child(2)").click();

let table = document.createElement("table");
table.className = "filterBox";
let tbody = document.createElement("tbody");
let tr = document.createElement("tr");
let td1 = document.createElement("td");
let td2 = document.createElement("td");

td1.appendChild(input);
td1.appendChild(output);
td2.appendChild(button);
td2.appendChild(button2);
tr.appendChild(td1);
tr.appendChild(td2);
tbody.appendChild(tr);
table.appendChild(tbody);

if (x != null && y == null)
    x.appendChild(table);


if (y != null)
    y.parentNode.insertBefore(table, y.nextSibling);