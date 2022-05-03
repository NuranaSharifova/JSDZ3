function ontextChanged() {
    let userinput = "";
    for (const char of Input.value)
        if (char < '0' || char > '9') {
            userinput += char;
        }

    Input.value = userinput;
}

function openModal(e) {
    modalID.classList.remove("modelmenu");
    e.preventDefault();
}

function closeModal(e) {
    modalID.classList.add("modelmenu");

}
let activelight = 0;

function switchnext(e) {
    activelight++;
    if (activelight == 1) {
        document.getElementById("circle1").style.backgroundColor = "red";
        document.getElementById("circle2").style.backgroundColor = "grey";
        document.getElementById("circle3").style.backgroundColor = "grey";

    } else if (activelight == 2) {
        document.getElementById("circle1").style.backgroundColor = "grey";
        document.getElementById("circle2").style.backgroundColor = "orange";
        document.getElementById("circle3").style.backgroundColor = "grey";
    } else if (activelight == 3) {
        document.getElementById("circle1").style.backgroundColor = "grey";
        document.getElementById("circle2").style.backgroundColor = "grey";
        document.getElementById("circle3").style.backgroundColor = "green";
        activelight = 0
    }

    e.preventDefault();
}

var list = document.querySelectorAll('.bookList li');

function setSelected() {

    document.querySelectorAll('.bookList li.selected').forEach(function(el) {
        el.classList.remove('selected');
    });
    this.classList.add('selected');
}


list.forEach(function(ol) {
    ol.onclick = setSelected;
});