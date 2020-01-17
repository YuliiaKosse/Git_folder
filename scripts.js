function myFunction() {
    alert("Alert!");
}

var isRed = false;
function colorchange() {
    if (isRed === true) {
        document.getElementById("toggle").style.color = "black";
        isRed = false;
    } else {
        document.getElementById("toggle").style.color = "red";
        isRed = true;
    }
}
function send() {
    var message = document.getElementById("Message").value;
    console.log(message);

}
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}