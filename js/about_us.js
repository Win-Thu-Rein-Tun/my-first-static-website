setInterval(next, 4000);

let box = 1;

function next() {
    document.querySelector("#box" + box).style.display = "none";
    box++; if(box>4) box = 1;
    document.querySelector("#box" + box).style.display = "block";
}